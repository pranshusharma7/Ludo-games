import {
  GameState,
  Player,
  PlayerColor,
  MoveResult,
  TURN_TIMEOUT_MS,
  TURN_ORDER,
  DEFAULT_AVATARS
} from '@royal-ludo/shared';
import { LudoEngine } from '@royal-ludo/shared';
import { redis } from './redis';
import { Server } from 'socket.io';

export class GameManager {
  private io: Server;
  private turnTimers = new Map<string, NodeJS.Timeout>();
  private quickMatchQueues = new Map<number, string[]>(); // playerCount -> roomCodes

  constructor(io: Server) {
    this.io = io;
  }

  private getRoomKey(roomCode: string): string {
    return `ludo:room:${roomCode.toUpperCase()}`;
  }

  private generateRoomCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  async getGameState(roomCode: string): Promise<GameState | null> {
    const data = await redis.get(this.getRoomKey(roomCode));
    return data ? JSON.parse(data) : null;
  }

  async saveGameState(gameState: GameState): Promise<void> {
    gameState.updatedAt = Date.now();
    await redis.set(this.getRoomKey(gameState.roomCode), JSON.stringify(gameState), 3600 * 4); // 4 hour TTL
  }

  async createRoom(
    hostId: string,
    playerName: string,
    avatar: string,
    playerCount: number = 4
  ): Promise<{ roomCode: string; gameState: GameState }> {
    let roomCode = this.generateRoomCode();
    while (await this.getGameState(roomCode)) {
      roomCode = this.generateRoomCode();
    }

    const gameState = LudoEngine.createInitialGameState({
      roomCode,
      hostId,
      players: [{ id: hostId, name: playerName, avatar, isBot: false }],
      playerCount
    });

    gameState.turnState.phase = 'waiting';

    await this.saveGameState(gameState);
    return { roomCode, gameState };
  }

  async joinRoom(
    roomCode: string,
    playerId: string,
    playerName: string,
    avatar: string
  ): Promise<{ success: boolean; error?: string; gameState?: GameState; playerColor?: PlayerColor }> {
    const code = roomCode.toUpperCase();
    const gameState = await this.getGameState(code);

    if (!gameState) {
      return { success: false, error: 'Room does not exist.' };
    }

    // Check if player is already in room (reconnect)
    const existingPlayer = gameState.players.find(p => p.id === playerId);
    if (existingPlayer) {
      existingPlayer.isConnected = true;
      existingPlayer.isBot = false;
      await this.saveGameState(gameState);
      return { success: true, gameState, playerColor: existingPlayer.color };
    }

    // If game has already started and full
    if (gameState.turnState.phase !== 'waiting') {
      // Check if there is a disconnected player or bot they can replace
      const vacant = gameState.players.find(p => p.isBot || !p.isConnected);
      if (vacant) {
        vacant.id = playerId;
        vacant.name = playerName;
        vacant.avatar = avatar;
        vacant.isBot = false;
        vacant.isConnected = true;
        await this.saveGameState(gameState);
        return { success: true, gameState, playerColor: vacant.color };
      }
      return { success: false, error: 'Match is already in progress and full.' };
    }

    // Joining waiting room
    const activeColors = TURN_ORDER[gameState.playerCount];
    if (gameState.players.length >= gameState.playerCount) {
      return { success: false, error: 'Room is full.' };
    }

    const nextColor = activeColors[gameState.players.length];
    const newPlayer: Player = {
      id: playerId,
      name: playerName || `Player ${gameState.players.length + 1}`,
      color: nextColor,
      avatar: avatar || DEFAULT_AVATARS[gameState.players.length % DEFAULT_AVATARS.length],
      isBot: false,
      isConnected: true,
      tokens: [-1, -1, -1, -1],
      finishedCount: 0,
      capturesCount: 0
    };

    gameState.players.push(newPlayer);
    LudoEngine.addLog(gameState, `${newPlayer.name} joined the room.`, 'system', newPlayer.color);

    await this.saveGameState(gameState);
    return { success: true, gameState, playerColor: newPlayer.color };
  }

  async findQuickMatch(
    playerId: string,
    playerName: string,
    avatar: string,
    playerCount: number = 4
  ): Promise<{ roomCode: string; gameState: GameState }> {
    const queue = this.quickMatchQueues.get(playerCount) || [];

    while (queue.length > 0) {
      const candidateCode = queue.shift()!;
      const state = await this.getGameState(candidateCode);
      if (state && state.turnState.phase === 'waiting' && state.players.length < state.playerCount) {
        const joinRes = await this.joinRoom(candidateCode, playerId, playerName, avatar);
        if (joinRes.success && joinRes.gameState) {
          // If room became full, start game automatically
          if (joinRes.gameState.players.length === joinRes.gameState.playerCount) {
            await this.startGame(candidateCode, joinRes.gameState.hostId);
          } else {
            queue.unshift(candidateCode); // Still has slots
          }
          this.quickMatchQueues.set(playerCount, queue);
          return { roomCode: candidateCode, gameState: joinRes.gameState };
        }
      }
    }

    // Create a new public room for quick match
    const created = await this.createRoom(playerId, playerName, avatar, playerCount);
    queue.push(created.roomCode);
    this.quickMatchQueues.set(playerCount, queue);
    return created;
  }

  async startGame(roomCode: string, hostId: string): Promise<{ success: boolean; error?: string; gameState?: GameState }> {
    const gameState = await this.getGameState(roomCode);
    if (!gameState) {
      return { success: false, error: 'Room not found.' };
    }

    if (gameState.hostId !== hostId && !gameState.players.some(p => p.id === hostId)) {
      return { success: false, error: 'Only the room host can start the match.' };
    }

    if (gameState.turnState.phase !== 'waiting') {
      return { success: false, error: 'Game already in progress.' };
    }

    // Fill remaining slots with AI Bots so the game can start immediately
    const activeColors = TURN_ORDER[gameState.playerCount];
    while (gameState.players.length < gameState.playerCount) {
      const nextColor = activeColors[gameState.players.length];
      const botNames = ['PixelBot', 'LudoMaster', 'RoyalAI', 'CyberPawn'];
      const botIndex = gameState.players.length;
      gameState.players.push({
        id: `bot-${nextColor}-${Date.now()}`,
        name: `${botNames[botIndex % botNames.length]} (AI)`,
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

    LudoEngine.addLog(gameState, 'The match has begun! May fortune favor the bold.', 'system');

    await this.saveGameState(gameState);
    this.scheduleTurnTimer(roomCode);

    // If first player is a bot, trigger bot turn
    const firstPlayer = gameState.players.find(p => p.color === gameState.turnState.activeColor);
    if (firstPlayer && firstPlayer.isBot) {
      this.triggerBotTurn(roomCode);
    }

    return { success: true, gameState };
  }

  async rollDice(
    roomCode: string,
    playerId: string
  ): Promise<{ success: boolean; error?: string; roll?: number; gameState?: GameState }> {
    const gameState = await this.getGameState(roomCode);
    if (!gameState) return { success: false, error: 'Room not found.' };

    const activeColor = gameState.turnState.activeColor;
    const player = gameState.players.find(p => p.color === activeColor);

    if (!player || player.id !== playerId) {
      return { success: false, error: 'It is not your turn to roll.' };
    }

    if (gameState.turnState.phase !== 'roll') {
      return { success: false, error: 'Dice has already been rolled for this turn.' };
    }

    // Authoritative Server-Side Roll (1 to 6)
    const roll = Math.floor(Math.random() * 6) + 1;
    gameState.turnState.roll = roll;

    if (roll === 6) {
      gameState.turnState.sixesStreak++;
    } else {
      gameState.turnState.sixesStreak = 0;
    }

    LudoEngine.addLog(gameState, `${player.name} rolled a ${roll}.`, 'roll', player.color);

    // Three consecutive 6s rule
    if (gameState.turnState.sixesStreak === 3) {
      LudoEngine.addLog(gameState, `Three consecutive sixes! ${player.name}'s roll is voided.`, 'extra', player.color);
      gameState.turnState.sixesStreak = 0;
      gameState.turnState.roll = null;
      LudoEngine.advanceTurn(gameState, false);
      await this.saveGameState(gameState);
      this.scheduleTurnTimer(roomCode);
      this.checkAndTriggerBot(roomCode);
      return { success: true, roll, gameState };
    }

    const legal = LudoEngine.getLegalMoves(player, roll);
    gameState.turnState.availableMoves = legal;

    if (legal.length === 0) {
      LudoEngine.addLog(gameState, `No valid moves available for ${player.name}.`, 'system', player.color);
      // If rolled a 6, player gets another roll even if no moves were available!
      const getsExtraTurn = roll === 6;
      gameState.turnState.availableMoves = [];
      await this.saveGameState(gameState);

      // Allow 1.25s for clients to view the 3D dice bounce & settle on the roll before advancing turn
      setTimeout(async () => {
        const freshState = await this.getGameState(roomCode);
        if (freshState && freshState.turnState.activeColor === activeColor && freshState.turnState.roll === roll) {
          LudoEngine.advanceTurn(freshState, getsExtraTurn);
          await this.saveGameState(freshState);
          this.io.to(roomCode).emit('state_sync', { gameState: freshState });
          this.scheduleTurnTimer(roomCode);
          this.checkAndTriggerBot(roomCode);
        }
      }, 1250);

      return { success: true, roll, gameState };
    }

    // Has legal moves: enter move phase
    gameState.turnState.phase = 'move';
    gameState.turnState.turnDeadline = Date.now() + TURN_TIMEOUT_MS;

    await this.saveGameState(gameState);
    this.scheduleTurnTimer(roomCode);

    return { success: true, roll, gameState };
  }

  async moveToken(
    roomCode: string,
    playerId: string,
    tokenIndex: number
  ): Promise<{ success: boolean; error?: string; moveResult?: MoveResult; gameState?: GameState }> {
    const gameState = await this.getGameState(roomCode);
    if (!gameState) return { success: false, error: 'Room not found.' };

    const activeColor = gameState.turnState.activeColor;
    const player = gameState.players.find(p => p.color === activeColor);

    if (!player || player.id !== playerId) {
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

    await this.saveGameState(gameState);
    this.scheduleTurnTimer(roomCode);
    this.checkAndTriggerBot(roomCode);

    return { success: true, moveResult, gameState };
  }

  private scheduleTurnTimer(roomCode: string): void {
    // Clear existing timer
    const existing = this.turnTimers.get(roomCode);
    if (existing) clearTimeout(existing);

    const timer = setTimeout(async () => {
      await this.handleTurnTimeout(roomCode);
    }, TURN_TIMEOUT_MS);

    this.turnTimers.set(roomCode, timer);
  }

  private async handleTurnTimeout(roomCode: string): Promise<void> {
    const gameState = await this.getGameState(roomCode);
    if (!gameState || gameState.turnState.phase === 'finished' || gameState.turnState.phase === 'waiting') {
      return;
    }

    const activeColor = gameState.turnState.activeColor;
    const player = gameState.players.find(p => p.color === activeColor);
    if (!player) return;

    LudoEngine.addLog(gameState, `⏳ Time out! Auto-playing turn for ${player.name}.`, 'timeout', player.color);

    // If still in roll phase, auto-roll
    if (gameState.turnState.phase === 'roll') {
      const roll = Math.floor(Math.random() * 6) + 1;
      gameState.turnState.roll = roll;
      const legal = LudoEngine.getLegalMoves(player, roll);

      if (legal.length === 0) {
        LudoEngine.advanceTurn(gameState, roll === 6);
        await this.saveGameState(gameState);
        this.io.to(roomCode).emit('turn_timeout', { playerColor: activeColor });
        this.io.to(roomCode).emit('state_sync', { gameState });
        this.scheduleTurnTimer(roomCode);
        this.checkAndTriggerBot(roomCode);
        return;
      }

      // Pick best move
      const bestToken = LudoEngine.chooseBestMove(gameState, activeColor, roll, legal);
      const moveResult = LudoEngine.applyMove(gameState, activeColor, bestToken, roll);
      LudoEngine.advanceTurn(gameState, moveResult.extraTurn);

      await this.saveGameState(gameState);
      this.io.to(roomCode).emit('turn_timeout', { playerColor: activeColor, autoMoveResult: moveResult });
      this.io.to(roomCode).emit('state_sync', { gameState });
      this.scheduleTurnTimer(roomCode);
      this.checkAndTriggerBot(roomCode);
      return;
    }

    // In move phase
    if (gameState.turnState.phase === 'move' && gameState.turnState.roll !== null) {
      const legal = gameState.turnState.availableMoves;
      const bestToken = LudoEngine.chooseBestMove(gameState, activeColor, gameState.turnState.roll, legal);
      const moveResult = LudoEngine.applyMove(gameState, activeColor, bestToken, gameState.turnState.roll);
      LudoEngine.advanceTurn(gameState, moveResult.extraTurn);

      await this.saveGameState(gameState);
      this.io.to(roomCode).emit('turn_timeout', { playerColor: activeColor, autoMoveResult: moveResult });
      this.io.to(roomCode).emit('state_sync', { gameState });
      this.scheduleTurnTimer(roomCode);
      this.checkAndTriggerBot(roomCode);
    }
  }

  private async checkAndTriggerBot(roomCode: string): Promise<void> {
    const gameState = await this.getGameState(roomCode);
    if (!gameState || gameState.turnState.phase === 'finished' || gameState.turnState.phase === 'waiting') {
      return;
    }

    const activePlayer = gameState.players.find(p => p.color === gameState.turnState.activeColor);
    if (activePlayer && activePlayer.isBot) {
      setTimeout(() => this.triggerBotTurn(roomCode), 600);
    }
  }

  private async triggerBotTurn(roomCode: string): Promise<void> {
    const gameState = await this.getGameState(roomCode);
    if (!gameState || gameState.turnState.phase === 'finished') return;

    const activeColor = gameState.turnState.activeColor;
    const bot = gameState.players.find(p => p.color === activeColor);
    if (!bot || !bot.isBot) return;

    // Step 1: Bot rolls dice
    const rollRes = await this.rollDice(roomCode, bot.id);
    if (!rollRes.success || !rollRes.gameState) return;

    this.io.to(roomCode).emit('dice_rolled', {
      playerColor: activeColor,
      roll: rollRes.roll!,
      sixesStreak: rollRes.gameState.turnState.sixesStreak,
      availableMoves: rollRes.gameState.turnState.availableMoves
    });
    this.io.to(roomCode).emit('state_sync', { gameState: rollRes.gameState });

    // If turn already ended (no moves or voided 3 sixes)
    if (rollRes.gameState.turnState.phase !== 'move') {
      return;
    }

    // Step 2: Bot ponders after 3D dice finishes rolling (1.25s) and moves token
    setTimeout(async () => {
      const updatedState = await this.getGameState(roomCode);
      if (!updatedState || updatedState.turnState.phase !== 'move') return;

      const legal = updatedState.turnState.availableMoves;
      const bestMove = LudoEngine.chooseBestMove(updatedState, activeColor, updatedState.turnState.roll!, legal);

      const moveRes = await this.moveToken(roomCode, bot.id, bestMove);
      if (moveRes.success && moveRes.moveResult && moveRes.gameState) {
        this.io.to(roomCode).emit('token_moved', {
          moveResult: moveRes.moveResult,
          gameState: moveRes.gameState
        });
        this.io.to(roomCode).emit('state_sync', { gameState: moveRes.gameState });
      }
    }, 1250);
  }

  async handlePlayerDisconnect(playerId: string): Promise<void> {
    // Find rooms where player is active
    // For fast lookup, scan memory or active rooms
    // We can mark player as disconnected & bot takeover
  }

  async handleRematch(roomCode: string, playerId: string): Promise<{ gameState: GameState; restarted: boolean }> {
    const gameState = await this.getGameState(roomCode);
    if (!gameState) throw new Error('Room not found');

    if (!gameState.rematchVotes.includes(playerId)) {
      gameState.rematchVotes.push(playerId);
    }

    const humanPlayers = gameState.players.filter(p => !p.isBot);
    const majority = Math.ceil(humanPlayers.length / 2);

    let restarted = false;
    if (gameState.rematchVotes.length >= majority) {
      // Restart game with same players
      const resetPlayers = gameState.players.map(p => ({
        id: p.id,
        name: p.name,
        avatar: p.avatar,
        isBot: p.isBot
      }));

      const newState = LudoEngine.createInitialGameState({
        roomCode,
        hostId: gameState.hostId,
        players: resetPlayers,
        playerCount: gameState.playerCount
      });

      newState.turnState.phase = 'roll';
      LudoEngine.addLog(newState, 'Rematch started! Round two begins.', 'system');

      await this.saveGameState(newState);
      this.scheduleTurnTimer(roomCode);
      this.checkAndTriggerBot(roomCode);
      return { gameState: newState, restarted: true };
    }

    await this.saveGameState(gameState);
    return { gameState, restarted: false };
  }
}

