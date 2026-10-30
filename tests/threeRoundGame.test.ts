import { describe, it } from 'node:test';
import assert from 'node:assert';
import { GameService } from '../helpers/gameService';
import { blobsRoomStore } from '../helpers/blobsStorage';
import { LudoEngine } from '../shared/src/engine';
import { GameState } from '../shared/src/types';

describe('Three-Round 2-Player Ludo Championship Test', () => {
  it('plays a complete three-round game with two players, including scoring and final series winner', async () => {
    const gameService = new GameService();
    blobsRoomStore.clearMemoryFallback();

    // 1. Setup 2-player match: Alice (Red) vs Bob (Yellow)
    const p1Id = 'player_alice';
    const p2Id = 'player_bob';

    // Alice creates room for 2 players with 3 rounds
    const createRes = await gameService.joinRoom({
      playerName: 'Alice',
      avatar: '👑',
      playerCount: 2,
      playerId: p1Id,
      maxRounds: 3
    });

    assert.strictEqual(createRes.success, true);
    const roomCode = createRes.roomCode!;
    assert.strictEqual(createRes.playerColor, 'red');

    // Bob joins room
    const joinRes = await gameService.joinRoom({
      roomCode,
      playerName: 'Bob',
      avatar: '🦁',
      playerCount: 2,
      playerId: p2Id
    });

    assert.strictEqual(joinRes.success, true);
    assert.strictEqual(joinRes.playerColor, 'yellow');

    // Alice starts the match
    const startRes = await gameService.startGame(roomCode, p1Id);
    assert.strictEqual(startRes.success, true);
    assert.strictEqual(startRes.gameState?.turnState.phase, 'roll');
    assert.strictEqual(startRes.gameState?.players.length, 2);

    // ==========================================
    // ROUND 1: Alice (Red) sweeps the board
    // ==========================================
    console.log('--- ROUND 1 ---');
    let state = (await gameService.getState(roomCode)).gameState!;
    assert.strictEqual(state.matchScores?.currentRound, 1);

    // Simulate gameplay for Round 1:
    // Move all 4 of Alice's tokens to Home (56) step-by-step
    const alice = state.players.find(p => p.id === p1Id)!;
    const bob = state.players.find(p => p.id === p2Id)!;

    // Bob deploys 1 token and makes a capture attempt
    bob.tokens[0] = 5; // Bob's token at relative position 5
    // Alice moves 4 tokens into home
    for (let t = 0; t < 4; t++) {
      alice.tokens[t] = 56;
      alice.finishedCount++;
    }
    alice.capturesCount = 2; // Alice made 2 captures
    bob.capturesCount = 1;

    state.winner = 'red';
    state.rankings = ['red', 'yellow'];
    state.turnState.phase = 'finished';

    // Process Round 1 scoring
    gameService.processRoundCompletion(state);
    await blobsRoomStore.setRoom(roomCode, state);

    // Verify Round 1 Results
    state = (await gameService.getState(roomCode)).gameState!;
    assert.strictEqual(state.matchScores?.roundScores.length, 1);
    const r1 = state.matchScores!.roundScores[0];
    assert.strictEqual(r1.round, 1);
    assert.strictEqual(r1.winner, 'red');
    console.log(`Round 1 Winner: ${r1.winner}, Scores:`, state.matchScores?.scores);

    // Alice won round 1: 100 bonus + 4*25 finished + 2*15 captures = 230 pts
    assert.strictEqual(r1.scores.red > r1.scores.yellow, true);
    assert.strictEqual(state.matchScores?.seriesWinner, null, 'Series not finished yet after round 1');

    // ==========================================
    // ROUND 2: Bob (Yellow) mounts a comeback
    // ==========================================
    console.log('--- ROUND 2 ---');
    // Both players vote for Rematch
    await gameService.rematch(roomCode, p1Id);
    const rematchRes = await gameService.rematch(roomCode, p2Id);
    assert.strictEqual(rematchRes.success, true);

    state = (await gameService.getState(roomCode)).gameState!;
    assert.strictEqual(state.matchScores?.currentRound, 2);
    assert.strictEqual(state.winner, null, 'Winner reset for new round');
    assert.strictEqual(state.turnState.phase, 'roll');

    // Verify tokens were reset to yard for Round 2
    state.players.forEach(p => {
      assert.deepStrictEqual(p.tokens, [-1, -1, -1, -1]);
      assert.strictEqual(p.finishedCount, 0);
    });

    // In Round 2, Bob moves all 4 tokens to Home
    const bobR2 = state.players.find(p => p.id === p2Id)!;
    const aliceR2 = state.players.find(p => p.id === p1Id)!;

    for (let t = 0; t < 4; t++) {
      bobR2.tokens[t] = 56;
      bobR2.finishedCount++;
    }
    bobR2.capturesCount = 3;
    aliceR2.finishedCount = 2;
    aliceR2.capturesCount = 0;

    state.winner = 'yellow';
    state.rankings = ['yellow', 'red'];
    state.turnState.phase = 'finished';

    // Process Round 2 scoring
    gameService.processRoundCompletion(state);
    await blobsRoomStore.setRoom(roomCode, state);

    state = (await gameService.getState(roomCode)).gameState!;
    assert.strictEqual(state.matchScores?.roundScores.length, 2);
    const r2 = state.matchScores!.roundScores[1];
    assert.strictEqual(r2.round, 2);
    assert.strictEqual(r2.winner, 'yellow');
    console.log(`Round 2 Winner: ${r2.winner}, Scores:`, state.matchScores?.scores);
    assert.strictEqual(state.matchScores?.seriesWinner, null, 'Series not finished yet after round 2');

    // ==========================================
    // ROUND 3: The Championship Decider!
    // ==========================================
    console.log('--- ROUND 3 (DECIDER) ---');
    await gameService.rematch(roomCode, p1Id);
    await gameService.rematch(roomCode, p2Id);

    state = (await gameService.getState(roomCode)).gameState!;
    assert.strictEqual(state.matchScores?.currentRound, 3);
    assert.strictEqual(state.winner, null);

    // In Round 3, Alice dominates and finishes all 4 tokens
    const aliceR3 = state.players.find(p => p.id === p1Id)!;
    const bobR3 = state.players.find(p => p.id === p2Id)!;

    for (let t = 0; t < 4; t++) {
      aliceR3.tokens[t] = 56;
      aliceR3.finishedCount++;
    }
    aliceR3.capturesCount = 2;
    bobR3.finishedCount = 1;

    state.winner = 'red';
    state.rankings = ['red', 'yellow'];
    state.turnState.phase = 'finished';

    // Process Round 3 completion & final championship series winner
    gameService.processRoundCompletion(state);
    await blobsRoomStore.setRoom(roomCode, state);

    // ==========================================
    // FINAL CHAMPIONSHIP VERIFICATION
    // ==========================================
    state = (await gameService.getState(roomCode)).gameState!;
    const ms = state.matchScores!;

    assert.strictEqual(ms.currentRound, 3);
    assert.strictEqual(ms.roundScores.length, 3);
    assert.strictEqual(ms.roundScores[2].round, 3);
    assert.strictEqual(ms.roundScores[2].winner, 'red');

    console.log('FINAL 3-ROUND MATCH SCORES:', ms.scores);
    console.log('CROWNED SERIES CHAMPION:', ms.seriesWinner);

    // Alice won Round 1 and Round 3 -> Alice is the Series Winner!
    assert.strictEqual(ms.seriesWinner, 'red', 'Alice (Red) must be the final series winner!');
    assert.strictEqual(state.winner, 'red');
    assert.strictEqual(state.turnState.phase, 'finished');
    assert.strictEqual(ms.scores.red > ms.scores.yellow, true);
  });
});

