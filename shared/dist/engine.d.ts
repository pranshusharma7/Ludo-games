import { PlayerColor, Player, GameState, MoveResult, GameLogEntry } from './types';
export declare class LudoEngine {
    /**
     * Convert relative position (0..50 on track) to global circuit tile (0..51)
     */
    static getGlobalPos(color: PlayerColor, relativePos: number): number;
    /**
     * Check if a global circuit position is a consecrated safe square
     */
    static isSafeTile(globalPos: number): boolean;
    /**
     * Initialize a brand new GameState for a room
     */
    static createInitialGameState(params: {
        roomCode: string;
        hostId: string;
        players: Array<{
            id: string;
            name: string;
            avatar?: string;
            isBot?: boolean;
        }>;
        playerCount: number;
    }): GameState;
    /**
     * Get legal token indices (0..3) for a player given a dice roll
     */
    static getLegalMoves(player: Player, roll: number): number[];
    /**
     * Apply a move to the game state. Returns the move result.
     * Pure, mutating the passed gameState (or clone beforehand).
     */
    static applyMove(gameState: GameState, playerColor: PlayerColor, tokenIndex: number, roll: number): MoveResult;
    /**
     * Advance the active turn to the next eligible player or grant extra roll
     */
    static advanceTurn(gameState: GameState, grantExtraTurn?: boolean): void;
    /**
     * Select best move using tactical heuristics (for AI and 20s timeouts)
     */
    static chooseBestMove(gameState: GameState, playerColor: PlayerColor, roll: number, legalMoves: number[]): number;
    /**
     * Helper to append a structured log message
     */
    static addLog(gameState: GameState, text: string, type: GameLogEntry['type'], color?: PlayerColor): void;
}
//# sourceMappingURL=engine.d.ts.map