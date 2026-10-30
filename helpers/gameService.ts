import { LudoEngine } from '../shared/src/engine';
import { GameState, Player, PlayerColor, MoveResult, MatchScores } from '../shared/src/types';
import { blobsRoomStore } from './blobsStorage';
import { DEFAULT_AVATARS, TURN_ORDER, TURN_TIMEOUT_MS } from '../shared/src/constants';

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export class GameService {
  /**
   * Create or join a room
   */
  async joinRoom(params: {
    roomCode?: string;
    playerName: string;
    avatar: string;
    playerCount?: number;
    playerId?: string;
    maxRounds?: number;
  }): Promise<{ success: boolean; error?: string; roomCode?: string; gameState?: GameState; playerColor?: PlayerColor }> {
    const playerId = params.playerId || `p_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const count = params.playerCount || 4;
    const maxRounds = params.maxRounds || 3;

    let targetCode = params.roomCode?.toUpperCase();

    // 1. Create a new room if roomCode not supplied
    if (!targetCode) {
      let created = false;
      let attempts = 0;
      let newRoomCode = '';

      while (!created && attempts < 5) {
        attempts++;
        newRoomCode = generateRoomCode();
        const initialPlayer: Player = {
          id: playerId,
          name: params.playerName || 'Player 1',
          color: 'red',
          avatar: params.avatar || '👑',
          isBot: false,
          isConnected: true,
          tokens: [-1, -1, -1, -1],
          finishedCount: 0,
          capturesCount: 0
        };

        const initialMatchScores: MatchScores = {
          currentRound: 1,
          maxRounds,
          roundScores: [],
          scores: { red: 0, green: 0, yellow: 0, blue: 0 },
          seriesWinner: null
        };

        const initialGameState: GameState = {
          roomCode: newRoomCode,
          hostId: playerId,
          playerCount: count,
          players: [initialPlayer],
          turnState: {
            activeColor: 'red',
            roll: null,
            sixesStreak: 0,
            phase: 'waiting',
            turnDeadline: 0,
            availableMoves: []
          },
          rankings: [],
          winner: null,
          logs: [],
          rematchVotes: [],
          matchScores: initialMatchScores,
          reactions: [],
          updatedAt: Date.now(),
          version: 1
        };

        LudoEngine.addLog(initialGameState, `Room ${newRoomCode} created by ${initialPlayer.name}.`, 'system', 'red');

        const writeRes = await blobsRoomStore.setRoom(newRoomCode, initialGameState, { onlyIfNew: true });
        if (writeRes.modified) {
          created = true;
          return {
            success: true,
            roomCode: newRoomCode,
            gameState: initialGameState,
            playerColor: 'red'
          };
        }
      }
      return { success: false, error: 'Could not create room. Please try again.' };
    }

    // 2. Join existing room with optimistic concurrency
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data: gameState, etag } = await blobsRoomStore.getRoom(targetCode);
      if (!gameState) {
        return { success: false, error: 'Room not found.' };
      }

      // Existing player reconnecting
      const existingPlayer = gameState.players.find(p => p.id === playerId || p.name === params.playerName);
      if (existingPlayer) {
        existingPlayer.isConnected = true;
        if (existingPlayer.isBot) existingPlayer.isBot = false;
        await blobsRoomStore.setRoom(targetCode, gameState, { onlyIfMatch: etag });
        return {
          success: true,
          roomCode: targetCode,
          gameState,
          playerColor: existingPlayer.color
        };
      }

      if (gameState.turnState.phase !== 'waiting') {
        return { success: false, error: 'Match is already in progress.' };
      }

      if (gameState.players.length >= gameState.playerCount) {
        return { success: false, error: 'Room is already full.' };
      }

      const activeColors = TURN_ORDER[gameState.playerCount] || TURN_ORDER[4];
      const nextColor = activeColors[gameState.players.length];
      const newPlayer: Player = {
        id: playerId,
        name: params.playerName || `Player ${gameState.players.length + 1}`,
        color: nextColor,
        avatar: params.avatar || DEFAULT_AVATARS[gameState.players.length % DEFAULT_AVATARS.length],
        isBot: false,
        isConnected: true,
        tokens: [-1, -1, -1, -1],
        finishedCount: 0,
        capturesCount: 0
      };

      gameState.players.push(newPlayer);
      LudoEngine.addLog(gameState, `${newPlayer.name} joined the room.`, 'system', newPlayer.color);

      const writeRes = await blobsRoomStore.setRoom(targetCode, gameState, { onlyIfMatch: etag });
      if (writeRes.modified) {
        return {
          success: true,
          roomCode: targetCode,
          gameState,
          playerColor: newPlayer.color
        };
      }
    }

    return { success: false, error: 'Concurrent modification conflict. Please retry.' };
  }

  /**
   * Start a match
   */
  async startGame(roomCode: string, playerId: string): Promise<{ success: boolean; error?: string; gameState?: GameState }> {
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data: gameState, etag } = await blobsRoomStore.getRoom(roomCode);
      if (!gameState) return { success: false, error: 'Room not found.' };

      if (gameState.hostId !== playerId && gameState.players[0]?.id !== playerId) {
        return { success: false, error: 'Only the host can start the match.' };
      }

      const activeColors = TURN_ORDER[gameState.playerCount] || TURN_ORDER[4];

      // Fill empty slots with bots
      while (gameState.players.length < gameState.playerCount) {
        const nextColor = activeColors[gameState.players.length];
        const botIndex = gameState.players.length + 1;
        gameState.players.push({
          id: `bot_${nextColor}`,
          name: `Bot ${nextColor.toUpperCase()}`,
          color: nextColor,
          avatar: '🤖',
          isBot: true,
          isConnected: true,
          tokens: [-1, -1, -1, -1],
          finishedCount: 0,
          capturesCount: 0
        });
      }

      gameState.turnState.phase = 'roll';
      gameState.turnState.activeColor = activeColors[0];
      gameState.turnState.roll = null;
      gameState.turnState.sixesStreak = 0;
      gameState.turnState.availableMoves = [];
      gameState.turnState.turnDeadline = Date.now() + TURN_TIMEOUT_MS;

      LudoEngine.addLog(gameState, `Round ${gameState.matchScores?.currentRound || 1} has begun!`, 'system');

      const writeRes = await blobsRoomStore.setRoom(roomCode, gameState, { onlyIfMatch: etag });
      if (writeRes.modified) {
        return { success: true, gameState };
      }
    }
    return { success: false, error: 'Failed to start game due to conflict.' };
  }

  /**
   * Authoritative dice roll
   */
  async rollDice(roomCode: string, playerId: string): Promise<{ success: boolean; error?: string; roll?: number; gameState?: GameState }> {
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data: gameState, etag } = await blobsRoomStore.getRoom(roomCode);
      if (!gameState) return { success: false, error: 'Room not found.' };

      const activeColor = gameState.turnState.activeColor;
      const player = gameState.players.find(p => p.color === activeColor);

      if (!player) return { success: false, error: 'Active player not found.' };
      if (!player.isBot && player.id !== playerId) {
        return { success: false, error: 'It is not your turn to roll.' };
      }

      if (gameState.turnState.phase !== 'roll') {
        return { success: false, error: 'Dice has already been rolled for this turn.' };
      }

      const roll = Math.floor(Math.random() * 6) + 1;
      gameState.turnState.roll = roll;

      if (roll === 6) {
        gameState.turnState.sixesStreak++;
      } else {
        gameState.turnState.sixesStreak = 0;
      }

      LudoEngine.addLog(gameState, `${player.name} rolled a ${roll}.`, 'roll', player.color);

      // Three consecutive 6s voids turn
      if (gameState.turnState.sixesStreak === 3) {
        LudoEngine.addLog(gameState, `Three consecutive sixes! ${player.name}'s roll is voided.`, 'extra', player.color);
        gameState.turnState.sixesStreak = 0;
        gameState.turnState.roll = null;
        LudoEngine.advanceTurn(gameState, false);
        const res = await blobsRoomStore.setRoom(roomCode, gameState, { onlyIfMatch: etag });
        if (res.modified) return { success: true, roll, gameState };
        continue;
      }

      const legal = LudoEngine.getLegalMoves(player, roll);
      gameState.turnState.availableMoves = legal;

      if (legal.length === 0) {
        LudoEngine.addLog(gameState, `No valid moves available for ${player.name}.`, 'system', player.color);
        const getsExtraTurn = roll === 6;
        LudoEngine.advanceTurn(gameState, getsExtraTurn);
        const res = await blobsRoomStore.setRoom(roomCode, gameState, { onlyIfMatch: etag });
        if (res.modified) return { success: true, roll, gameState };
        continue;
      }

      gameState.turnState.phase = 'move';
      gameState.turnState.turnDeadline = Date.now() + TURN_TIMEOUT_MS;

      const res = await blobsRoomStore.setRoom(roomCode, gameState, { onlyIfMatch: etag });
      if (res.modified) return { success: true, roll, gameState };
    }

    return { success: false, error: 'Concurrent roll error.' };
  }

  /**
   * Authoritative token movement & round scoring
   */
  async moveToken(
    roomCode: string,
    playerId: string,
    tokenIndex: number
  ): Promise<{ success: boolean; error?: string; moveResult?: MoveResult; gameState?: GameState }> {
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data: gameState, etag } = await blobsRoomStore.getRoom(roomCode);
      if (!gameState) return { success: false, error: 'Room not found.' };

      const activeColor = gameState.turnState.activeColor;
      const player = gameState.players.find(p => p.color === activeColor);

      if (!player) return { success: false, error: 'Active player not found.' };
      if (!player.isBot && player.id !== playerId) {
        return { success: false, error: 'It is not your turn to move.' };
      }

      if (gameState.turnState.phase !== 'move' || gameState.turnState.roll === null) {
        return { success: false, error: 'Not in token move phase.' };
      }

      if (!gameState.turnState.availableMoves.includes(tokenIndex)) {
        return { success: false, error: 'Illegal move for this token.' };
      }

      const roll = gameState.turnState.roll;
      const moveResult = LudoEngine.applyMove(gameState, activeColor, tokenIndex, roll);

      // Advance turn or grant extra turn
      LudoEngine.advanceTurn(gameState, moveResult.extraTurn);

      // Check if round finished
      if (gameState.winner || gameState.turnState.phase === 'finished') {
        this.processRoundCompletion(gameState);
      }

      const res = await blobsRoomStore.setRoom(roomCode, gameState, { onlyIfMatch: etag });
      if (res.modified) {
        return { success: true, moveResult, gameState };
      }
    }

    return { success: false, error: 'Concurrent move error.' };
  }

  /**
   * Update matchScores when a round finishes
   */
  public processRoundCompletion(gameState: GameState): void {
    if (!gameState.winner) return;

    if (!gameState.matchScores) {
      gameState.matchScores = {
        currentRound: 1,
        maxRounds: 3,
        roundScores: [],
        scores: { red: 0, green: 0, yellow: 0, blue: 0 },
        seriesWinner: null
      };
    }

    const ms = gameState.matchScores;
    const currentRound = ms.currentRound;

    // Check if this round already scored
    const alreadyScored = ms.roundScores.some(rs => rs.round === currentRound);
    if (!alreadyScored) {
      const roundPoints: Record<PlayerColor, number> = { red: 0, green: 0, yellow: 0, blue: 0 };

      gameState.players.forEach(p => {
        let pts = p.finishedCount * 25 + p.capturesCount * 15;
        if (p.color === gameState.winner) pts += 100;
        roundPoints[p.color] = pts;
        ms.scores[p.color] = (ms.scores[p.color] || 0) + pts;
      });

      ms.roundScores.push({
        round: currentRound,
        winner: gameState.winner,
        scores: roundPoints
      });

      LudoEngine.addLog(
        gameState,
        `🏆 ${gameState.players.find(p => p.color === gameState.winner)?.name} won Round ${currentRound}!`,
        'win',
        gameState.winner
      );

      // Check if multi-round series is complete
      if (currentRound >= ms.maxRounds) {
        // Find player with highest total score
        let bestColor: PlayerColor = gameState.winner;
        let maxPts = -1;
        Object.entries(ms.scores).forEach(([c, pts]) => {
          if (pts > maxPts) {
            maxPts = pts;
            bestColor = c as PlayerColor;
          }
        });

        ms.seriesWinner = bestColor;
        gameState.winner = bestColor;
        gameState.turnState.phase = 'finished';

        const champion = gameState.players.find(p => p.color === bestColor);
        LudoEngine.addLog(
          gameState,
          `👑 ${champion?.name || bestColor} is the FINAL SERIES CHAMPION with ${maxPts} points across ${ms.maxRounds} rounds!`,
          'win',
          bestColor
        );
      }
    }
  }

  /**
   * Rematch: advances to next round if currentRound < maxRounds, or restarts series
   */
  async rematch(roomCode: string, playerId: string): Promise<{ success: boolean; gameState?: GameState }> {
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data: gameState, etag } = await blobsRoomStore.getRoom(roomCode);
      if (!gameState) return { success: false };

      if (!gameState.rematchVotes.includes(playerId)) {
        gameState.rematchVotes.push(playerId);
      }

      const humanPlayers = gameState.players.filter(p => !p.isBot);
      const requiredVotes = humanPlayers.length <= 2 ? humanPlayers.length : Math.ceil(humanPlayers.length * 0.6);

      if (gameState.rematchVotes.length >= requiredVotes) {
        const ms = gameState.matchScores;

        if (ms && ms.currentRound < ms.maxRounds && !ms.seriesWinner) {
          // Advance to next round of the 3-round series
          ms.currentRound++;
        } else if (ms && ms.seriesWinner) {
          // Series finished: reset series back to Round 1
          ms.currentRound = 1;
          ms.roundScores = [];
          ms.scores = { red: 0, green: 0, yellow: 0, blue: 0 };
          ms.seriesWinner = null;
        }

        // Reset board for next round
        gameState.players.forEach(p => {
          p.tokens = [-1, -1, -1, -1];
          p.finishedCount = 0;
          p.capturesCount = 0;
          delete p.rank;
        });

        const activeColors = TURN_ORDER[gameState.playerCount] || TURN_ORDER[4];
        // Rotate starting player by round
        const starterIndex = ((ms?.currentRound || 1) - 1) % activeColors.length;

        gameState.winner = null;
        gameState.rankings = [];
        gameState.rematchVotes = [];
        gameState.turnState = {
          activeColor: activeColors[starterIndex],
          roll: null,
          sixesStreak: 0,
          phase: 'roll',
          turnDeadline: Date.now() + TURN_TIMEOUT_MS,
          availableMoves: []
        };

        LudoEngine.addLog(gameState, `Starting Round ${ms?.currentRound || 1}!`, 'system');

        const res = await blobsRoomStore.setRoom(roomCode, gameState, { onlyIfMatch: etag });
        if (res.modified) {
          return { success: true, gameState };
        }
      } else {
        const res = await blobsRoomStore.setRoom(roomCode, gameState, { onlyIfMatch: etag });
        if (res.modified) {
          return { success: true, gameState };
        }
      }
    }
    return { success: false };
  }

  /**
   * Get latest state
   */
  async getState(roomCode: string): Promise<{ success: boolean; gameState?: GameState; etag?: string }> {
    const { data: gameState, etag } = await blobsRoomStore.getRoom(roomCode);
    if (!gameState) return { success: false };
    return { success: true, gameState, etag };
  }

  /**
   * Emoji reaction
   */
  async sendReaction(
    roomCode: string,
    senderId: string,
    emoji: string
  ): Promise<{ success: boolean; gameState?: GameState }> {
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data: gameState, etag } = await blobsRoomStore.getRoom(roomCode);
      if (!gameState) return { success: false };

      const player = gameState.players.find(p => p.id === senderId);
      if (!player) return { success: false };

      if (!gameState.reactions) gameState.reactions = [];
      gameState.reactions.push({
        id: `rx_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        senderId,
        senderColor: player.color,
        emoji,
        timestamp: Date.now()
      });

      // Keep last 20 reactions
      if (gameState.reactions.length > 20) {
        gameState.reactions = gameState.reactions.slice(-20);
      }

      const res = await blobsRoomStore.setRoom(roomCode, gameState, { onlyIfMatch: etag });
      if (res.modified) return { success: true, gameState };
    }
    return { success: false };
  }
}

export const gameService = new GameService();
