import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { LudoEngine } from '../src/engine.js';
import { HOME_TRIANGLE_POS } from '../src/constants.js';

describe('LudoEngine Core Tests', () => {
  it('initializes game state with correct player count and tokens in yard', () => {
    const state = LudoEngine.createInitialGameState({
      roomCode: 'ABC123',
      hostId: 'user-1',
      players: [
        { id: 'user-1', name: 'Alice' },
        { id: 'user-2', name: 'Bob' }
      ],
      playerCount: 2
    });

    assert.equal(state.players.length, 2);
    assert.equal(state.players[0].color, 'red');
    assert.equal(state.players[1].color, 'yellow');
    assert.deepEqual(state.players[0].tokens, [-1, -1, -1, -1]);
    assert.equal(state.turnState.activeColor, 'red');
    assert.equal(state.turnState.phase, 'roll');
  });

  it('only permits release from yard when roll is 6', () => {
    const state = LudoEngine.createInitialGameState({
      roomCode: 'ABC123',
      hostId: 'user-1',
      players: [{ id: 'user-1', name: 'Alice' }, { id: 'user-2', name: 'Bob' }],
      playerCount: 2
    });

    const player = state.players[0];

    // Roll 5: cannot release
    assert.deepEqual(LudoEngine.getLegalMoves(player, 5), []);

    // Roll 6: can release all 4 yard tokens
    assert.deepEqual(LudoEngine.getLegalMoves(player, 6), [0, 1, 2, 3]);
  });

  it('releases token to starting tile 0 on roll 6', () => {
    const state = LudoEngine.createInitialGameState({
      roomCode: 'ABC123',
      hostId: 'user-1',
      players: [{ id: 'user-1', name: 'Alice' }, { id: 'user-2', name: 'Bob' }],
      playerCount: 2
    });

    const move = LudoEngine.applyMove(state, 'red', 0, 6);
    assert.equal(move.fromPos, -1);
    assert.equal(move.toPos, 0);
    assert.equal(move.isDeploy, true);
    assert.equal(state.players[0].tokens[0], 0);
    assert.equal(move.extraTurn, true); // Rolling 6 grants extra turn
  });

  it('captures opponent token on unsafe square and awards extra turn', () => {
    const state = LudoEngine.createInitialGameState({
      roomCode: 'ABC123',
      hostId: 'user-1',
      players: [{ id: 'user-1', name: 'Alice' }, { id: 'user-2', name: 'Bob' }],
      playerCount: 2
    });

    const red = state.players[0];
    const yellow = state.players[1];

    // Yellow is at relative pos 2 (global pos 26 + 2 = 28)
    yellow.tokens[0] = 2;

    // Red starts at 0 (global 0).
    // To land on global 28, Red needs relative pos 28.
    // Let Red be at relative pos 24. A roll of 4 will land on relative 28 (global 28)!
    red.tokens[0] = 24;

    const move = LudoEngine.applyMove(state, 'red', 0, 4);

    assert.equal(move.toPos, 28);
    assert.ok(move.captured);
    assert.equal(move.captured?.playerColor, 'yellow');
    assert.equal(move.captured?.tokenIndex, 0);
    assert.equal(yellow.tokens[0], -1); // Yellow sent back to yard!
    assert.equal(red.capturesCount, 1);
    assert.equal(move.extraTurn, true); // Capture bonus!
  });

  it('prevents capture on safe star squares', () => {
    const state = LudoEngine.createInitialGameState({
      roomCode: 'ABC123',
      hostId: 'user-1',
      players: [{ id: 'user-1', name: 'Alice' }, { id: 'user-2', name: 'Bob' }],
      playerCount: 2
    });

    const red = state.players[0];
    const yellow = state.players[1];

    // Safe square 8 on perimeter
    // Red relative 8 is global 8 (SAFE)
    red.tokens[0] = 5;

    // Yellow global start is 26.
    // Yellow relative pos that lands on global 8: (26 + pos) % 52 = 8 => pos = 34.
    yellow.tokens[0] = 34;

    // Red moves 3 steps to land on relative 8 (global 8)
    const move = LudoEngine.applyMove(state, 'red', 0, 3);

    assert.equal(move.toPos, 8);
    assert.equal(move.captured, undefined); // Protected by safe haven!
    assert.equal(yellow.tokens[0], 34); // Yellow untouched!
  });

  it('requires exact roll to reach Home (56) and cannot overshoot', () => {
    const state = LudoEngine.createInitialGameState({
      roomCode: 'ABC123',
      hostId: 'user-1',
      players: [{ id: 'user-1', name: 'Alice' }, { id: 'user-2', name: 'Bob' }],
      playerCount: 2
    });

    const red = state.players[0];
    red.tokens[0] = 53; // 3 steps away from 56

    // Roll 4: overshoots 56, illegal!
    assert.deepEqual(LudoEngine.getLegalMoves(red, 4), []);

    // Roll 3: exact roll, reaches home!
    assert.deepEqual(LudoEngine.getLegalMoves(red, 3), [0]);

    const move = LudoEngine.applyMove(state, 'red', 0, 3);
    assert.equal(move.toPos, HOME_TRIANGLE_POS);
    assert.equal(move.isHome, true);
    assert.equal(red.finishedCount, 1);
  });

  it('detects match winner when all 4 tokens reach Home', () => {
    const state = LudoEngine.createInitialGameState({
      roomCode: 'ABC123',
      hostId: 'user-1',
      players: [{ id: 'user-1', name: 'Alice' }, { id: 'user-2', name: 'Bob' }],
      playerCount: 2
    });

    const red = state.players[0];
    red.tokens = [56, 56, 56, 55];
    red.finishedCount = 3;

    LudoEngine.applyMove(state, 'red', 3, 1);

    assert.equal(red.finishedCount, 4);
    assert.equal(state.winner, 'red');
    assert.deepEqual(state.rankings, ['red']);
  });

  it('advances turn properly and skips completed players', () => {
    const state = LudoEngine.createInitialGameState({
      roomCode: 'ABC123',
      hostId: 'user-1',
      players: [
        { id: 'user-1', name: 'Alice' },
        { id: 'user-2', name: 'Bob' },
        { id: 'user-3', name: 'Charlie' },
        { id: 'user-4', name: 'David' }
      ],
      playerCount: 4
    });

    assert.equal(state.turnState.activeColor, 'red');
    LudoEngine.advanceTurn(state, false);
    assert.equal(state.turnState.activeColor, 'green');

    // Make Green finished
    state.players[1].finishedCount = 4;

    LudoEngine.advanceTurn(state, false);
    assert.equal(state.turnState.activeColor, 'yellow');

    LudoEngine.advanceTurn(state, false);
    assert.equal(state.turnState.activeColor, 'blue');

    // Next turn should wrap around to red, skipping finished green!
    LudoEngine.advanceTurn(state, false);
    assert.equal(state.turnState.activeColor, 'red');
  });

  it('chooseBestMove heuristic selects capture and home entry over simple advances', () => {
    const state = LudoEngine.createInitialGameState({
      roomCode: 'ABC123',
      hostId: 'user-1',
      players: [{ id: 'user-1', name: 'Alice' }, { id: 'user-2', name: 'Bob' }],
      playerCount: 2
    });

    const red = state.players[0];
    const yellow = state.players[1];

    // Token 0 can reach Home (at 53, roll 3 -> 56)
    red.tokens[0] = 53;
    // Token 1 can advance normally (at 10, roll 3 -> 13)
    red.tokens[1] = 10;

    const best = LudoEngine.chooseBestMove(state, 'red', 3, [0, 1]);
    assert.equal(best, 0); // Prioritizes reaching Home!
  });
});

