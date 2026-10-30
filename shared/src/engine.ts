import {
  PlayerColor,
  Player,
  GameState,
  MoveResult,
  TurnState,
  GameLogEntry
} from './types';
import {
  COLORS,
  TURN_ORDER,
  START_TILES,
  SAFE_TILES,
  TOTAL_PERIMETER_TILES,
  HOME_TRIANGLE_POS,
  TURN_TIMEOUT_MS,
  DEFAULT_AVATARS
} from './constants';

export class LudoEngine {
  /**
   * Convert relative position (0..50 on track) to global circuit tile (0..51)
   */
  public static getGlobalPos(color: PlayerColor, relativePos: number): number {
    return (START_TILES[color] + relativePos) % TOTAL_PERIMETER_TILES;
  }

  /**
   * Check if a global circuit position is a consecrated safe square
   */
  public static isSafeTile(globalPos: number): boolean {
    return SAFE_TILES.includes(globalPos);
  }

  /**
   * Initialize a brand new GameState for a room
   */
  public static createInitialGameState(params: {
    roomCode: string;
    hostId: string;
    players: Array<{ id: string; name: string; avatar?: string; isBot?: boolean }>;
    playerCount: number;
  }): GameState {
    const activeColors = TURN_ORDER[params.playerCount] || TURN_ORDER[4];

    const initialPlayers: Player[] = activeColors.map((color, index) => {
      const p = params.players[index];
      const name = p ? p.name : `Player ${index + 1}`;
      const avatar = (p && p.avatar) ? p.avatar : DEFAULT_AVATARS[index % DEFAULT_AVATARS.length];
      const isBot = p ? !!p.isBot : false;

      return {
        id: p ? p.id : `bot-${color}`,
        name,
        color,
        avatar,
        isBot,
        isConnected: true,
        tokens: [-1, -1, -1, -1],
        finishedCount: 0,
        capturesCount: 0
      };
    });

    const firstColor = activeColors[0];
    const initialTurnState: TurnState = {
      activeColor: firstColor,
      roll: null,
      sixesStreak: 0,
      phase: 'roll',
      turnDeadline: Date.now() + TURN_TIMEOUT_MS,
      availableMoves: []
    };

    return {
      roomCode: params.roomCode,
      hostId: params.hostId,
      playerCount: params.playerCount,
      players: initialPlayers,
      turnState: initialTurnState,
      rankings: [],
      winner: null,
      logs: [
        {
          id: `log-${Date.now()}`,
          timestamp: Date.now(),
          text: `Match began with ${initialPlayers.length} players. First turn: ${initialPlayers[0].name}.`,
          type: 'system',
          color: firstColor
        }
      ],
      rematchVotes: [],
      updatedAt: Date.now()
    };
  }

  /**
   * Get legal token indices (0..3) for a player given a dice roll
   */
  public static getLegalMoves(player: Player, roll: number): number[] {
    const legal: number[] = [];

    player.tokens.forEach((pos, tokenIdx) => {
      // Already inside Home
      if (pos === HOME_TRIANGLE_POS) return;

      // In Yard: only a 6 can deploy it
      if (pos === -1) {
        if (roll === 6) legal.push(tokenIdx);
        return;
      }

      // On track or in home lane: must reach HOME_TRIANGLE_POS with exact roll
      if (pos + roll <= HOME_TRIANGLE_POS) {
        legal.push(tokenIdx);
      }
    });

    return legal;
  }

  /**
   * Apply a move to the game state. Returns the move result.
   * Pure, mutating the passed gameState (or clone beforehand).
   */
  public static applyMove(
    gameState: GameState,
    playerColor: PlayerColor,
    tokenIndex: number,
    roll: number
  ): MoveResult {
    const player = gameState.players.find(p => p.color === playerColor);
    if (!player) {
      throw new Error(`Player with color ${playerColor} not found.`);
    }

    const startPos = player.tokens[tokenIndex];
    if (startPos === HOME_TRIANGLE_POS) {
      throw new Error(`Token ${tokenIndex} is already in Home.`);
    }

    let isDeploy = false;
    let isHome = false;
    let endPos = startPos;

    if (startPos === -1) {
      if (roll !== 6) {
        throw new Error(`Cannot release token without rolling a 6.`);
      }
      isDeploy = true;
      endPos = 0; // Starting star square
      player.tokens[tokenIndex] = endPos;
    } else {
      endPos = startPos + roll;
      if (endPos > HOME_TRIANGLE_POS) {
        throw new Error(`Cannot overshoot Home triangle.`);
      }
      player.tokens[tokenIndex] = endPos;
      if (endPos === HOME_TRIANGLE_POS) {
        isHome = true;
        player.finishedCount++;
      }
    }

    // Check for capture on the common 52-tile circuit (endPos <= 50)
    let captured: { playerColor: PlayerColor; tokenIndex: number } | undefined = undefined;

    if (endPos <= 50) {
      const landingGlobalPos = this.getGlobalPos(playerColor, endPos);
      const isSafe = this.isSafeTile(landingGlobalPos);

      if (!isSafe) {
        // Check all other players for tokens at this global spot
        for (const op of gameState.players) {
          if (op.color === playerColor) continue;

          for (let oIdx = 0; oIdx < 4; oIdx++) {
            const opPos = op.tokens[oIdx];
            if (opPos >= 0 && opPos <= 50) {
              const opGlobalPos = this.getGlobalPos(op.color, opPos);
              if (opGlobalPos === landingGlobalPos) {
                // CAPTURE! Send opponent back to Yard
                op.tokens[oIdx] = -1;
                player.capturesCount++;
                captured = {
                  playerColor: op.color,
                  tokenIndex: oIdx
                };
                break;
              }
            }
          }
          if (captured) break;
        }
      }
    }

    // Determine extra turn eligibility
    const extraTurn = (roll === 6 || !!captured) && player.finishedCount < 4;
    const extraTurnReason = (roll === 6 && captured) ? 'capture' : (roll === 6 ? 'six' : (captured ? 'capture' : undefined));

    // Check if player has finished the game
    if (player.finishedCount === 4 && !gameState.rankings.includes(playerColor)) {
      gameState.rankings.push(playerColor);
      player.rank = gameState.rankings.length;

      if (!gameState.winner) {
        gameState.winner = playerColor;
      }
    }

    // Build MoveResult
    const result: MoveResult = {
      playerColor,
      tokenIndex,
      fromPos: startPos,
      toPos: endPos,
      roll,
      isDeploy,
      isHome,
      captured,
      extraTurn,
      extraTurnReason
    };

    // Append Log
    const logText = isDeploy
      ? `${player.name} deployed Token ${tokenIndex + 1} onto start!`
      : isHome
        ? `🏆 ${player.name}'s Token ${tokenIndex + 1} reached Home!`
        : captured
          ? `⚔ ${player.name} captured ${gameState.players.find(p => p.color === captured!.playerColor)?.name}'s token!`
          : `${player.name} moved Token ${tokenIndex + 1} forward ${roll} steps.`;

    this.addLog(gameState, logText, captured ? 'capture' : isHome ? 'home' : isDeploy ? 'move' : 'move', playerColor);

    return result;
  }

  /**
   * Advance the active turn to the next eligible player or grant extra roll
   */
  public static advanceTurn(gameState: GameState, grantExtraTurn: boolean = false): void {
    const activeColors = TURN_ORDER[gameState.playerCount] || TURN_ORDER[4];
    const unfinishedPlayers = gameState.players.filter(p => p.finishedCount < 4);

    // If only 0 or 1 unfinished player left, game ends
    if (unfinishedPlayers.length <= 1) {
      if (unfinishedPlayers.length === 1 && !gameState.rankings.includes(unfinishedPlayers[0].color)) {
        gameState.rankings.push(unfinishedPlayers[0].color);
        unfinishedPlayers[0].rank = gameState.rankings.length;
      }
      gameState.turnState.phase = 'finished';
      return;
    }

    if (grantExtraTurn) {
      gameState.turnState.phase = 'roll';
      gameState.turnState.roll = null;
      gameState.turnState.availableMoves = [];
      gameState.turnState.turnDeadline = Date.now() + TURN_TIMEOUT_MS;
      return;
    }

    // Move to next player in active rotation
    const currentIndex = activeColors.indexOf(gameState.turnState.activeColor);
    let nextIndex = currentIndex;
    let nextPlayer: Player | undefined = undefined;

    do {
      nextIndex = (nextIndex + 1) % activeColors.length;
      const candidateColor = activeColors[nextIndex];
      nextPlayer = gameState.players.find(p => p.color === candidateColor);
    } while (nextPlayer && nextPlayer.finishedCount === 4);

    if (nextPlayer) {
      gameState.turnState.activeColor = nextPlayer.color;
      gameState.turnState.phase = 'roll';
      gameState.turnState.roll = null;
      gameState.turnState.sixesStreak = 0;
      gameState.turnState.availableMoves = [];
      gameState.turnState.turnDeadline = Date.now() + TURN_TIMEOUT_MS;
    }
  }

  /**
   * Select best move using tactical heuristics (for AI and 20s timeouts)
   */
  public static chooseBestMove(
    gameState: GameState,
    playerColor: PlayerColor,
    roll: number,
    legalMoves: number[]
  ): number {
    if (legalMoves.length === 0) return -1;
    if (legalMoves.length === 1) return legalMoves[0];

    const player = gameState.players.find(p => p.color === playerColor);
    if (!player) return legalMoves[0];

    let bestScore = -99999;
    let bestTokenIdx = legalMoves[0];

    legalMoves.forEach(tokenIdx => {
      const pos = player.tokens[tokenIdx];
      let score = 0;

      // 1. Release token from yard
      if (pos === -1) {
        score += 350;
      } else {
        const nextPos = pos + roll;

        // 2. Reach Home Triangle!
        if (nextPos === HOME_TRIANGLE_POS) {
          score += 1000;
        }

        // 3. Capture an opponent!
        if (nextPos <= 50) {
          const landingGlobal = this.getGlobalPos(playerColor, nextPos);
          if (!this.isSafeTile(landingGlobal)) {
            let wouldCapture = false;
            for (const op of gameState.players) {
              if (op.color === playerColor) continue;
              for (const opPos of op.tokens) {
                if (opPos >= 0 && opPos <= 50 && this.getGlobalPos(op.color, opPos) === landingGlobal) {
                  wouldCapture = true;
                  break;
                }
              }
              if (wouldCapture) break;
            }
            if (wouldCapture) score += 650;
          }
        }

        // 4. Reach a consecrated safe square
        if (nextPos <= 50 && this.isSafeTile(this.getGlobalPos(playerColor, nextPos))) {
          score += 220;
        }

        // 5. Enter safe home lane
        if (nextPos > 50) {
          score += 240;
        }

        // 6. Escape danger (if an enemy is 1..6 tiles behind)
        if (pos <= 50) {
          const currGlobal = this.getGlobalPos(playerColor, pos);
          if (!this.isSafeTile(currGlobal)) {
            for (const op of gameState.players) {
              if (op.color === playerColor) continue;
              for (const opPos of op.tokens) {
                if (opPos >= 0 && opPos <= 50) {
                  const enemyGlobal = this.getGlobalPos(op.color, opPos);
                  const dist = (currGlobal - enemyGlobal + TOTAL_PERIMETER_TILES) % TOTAL_PERIMETER_TILES;
                  if (dist >= 1 && dist <= 6) {
                    score += 160; // Incentive to run away
                    break;
                  }
                }
              }
            }
          }
        }

        // 7. General forward progress
        score += nextPos * 2;
      }

      if (score > bestScore) {
        bestScore = score;
        bestTokenIdx = tokenIdx;
      }
    });

    return bestTokenIdx;
  }

  /**
   * Helper to append a structured log message
   */
  public static addLog(
    gameState: GameState,
    text: string,
    type: GameLogEntry['type'],
    color?: PlayerColor
  ): void {
    const entry: GameLogEntry = {
      id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      timestamp: Date.now(),
      text,
      type,
      color
    };
    gameState.logs.unshift(entry);
    if (gameState.logs.length > 25) {
      gameState.logs.pop();
    }
  }
}

