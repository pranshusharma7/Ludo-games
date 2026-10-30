export type PlayerColor = 'red' | 'green' | 'yellow' | 'blue';

export type GamePhase = 'waiting' | 'roll' | 'move' | 'finished';

export type BoardThemeId = 'candy' | 'neon' | 'wood' | 'minimal';

export interface Player {
  id: string;
  name: string;
  color: PlayerColor;
  avatar: string; // Emoji avatar or icon identifier
  isBot: boolean;
  isConnected: boolean;
  tokens: [number, number, number, number]; // -1: Yard, 0..50: Track, 51..55: Home Lane, 56: Home Triangle
  finishedCount: number;
  capturesCount: number;
  rank?: number; // 1 = 1st place, 2 = 2nd place, etc.
}

export interface MoveResult {
  playerColor: PlayerColor;
  tokenIndex: number;
  fromPos: number;
  toPos: number;
  roll: number;
  isDeploy: boolean;
  isHome: boolean;
  captured?: {
    playerColor: PlayerColor;
    tokenIndex: number;
  };
  extraTurn: boolean;
  extraTurnReason?: 'six' | 'capture';
}

export interface GameLogEntry {
  id: string;
  timestamp: number;
  text: string;
  type: 'roll' | 'move' | 'capture' | 'home' | 'extra' | 'win' | 'timeout' | 'system';
  color?: PlayerColor;
}

export interface TurnState {
  activeColor: PlayerColor;
  roll: number | null;
  sixesStreak: number;
  phase: GamePhase;
  turnDeadline: number; // Unix timestamp in ms
  availableMoves: number[]; // indices of tokens that can move
}

export interface RoundScore {
  round: number;
  winner: PlayerColor;
  scores: Record<PlayerColor, number>;
}

export interface MatchScores {
  currentRound: number; // 1, 2, 3
  maxRounds: number;    // e.g. 3
  roundScores: RoundScore[];
  scores: Record<PlayerColor, number>; // cumulative match score
  seriesWinner: PlayerColor | null;
}

export interface GameState {
  roomCode: string;
  hostId: string;
  playerCount: number; // 2, 3, or 4
  players: Player[];
  turnState: TurnState;
  rankings: PlayerColor[];
  winner: PlayerColor | null;
  logs: GameLogEntry[];
  rematchVotes: string[]; // player IDs who voted for rematch
  matchScores?: MatchScores; // 3-round match scoring & series winner
  reactions?: EmojiReaction[];
  updatedAt: number;
  version?: number; // Monotonically increasing state version
}

export interface RoomMetadata {
  roomCode: string;
  hostId: string;
  playerCount: number;
  currentPlayers: number;
  status: 'waiting' | 'in_progress' | 'finished';
}

export interface EmojiReaction {
  id: string;
  senderId: string;
  senderColor: PlayerColor;
  emoji: string;
  timestamp: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  wins: number;
  captures: number;
  winStreak: number;
}

/* ==========================================================================
   Type-Safe Socket.IO Event Interfaces
   ========================================================================== */

export interface ClientToServerEvents {
  join_room: (data: { roomCode?: string; playerName: string; avatar: string; playerCount?: number }, callback: (res: { success: boolean; error?: string; roomCode?: string; gameState?: GameState }) => void) => void;
  quick_match: (data: { playerName: string; avatar: string; playerCount: number }, callback: (res: { success: boolean; error?: string; roomCode?: string; gameState?: GameState }) => void) => void;
  start_game: (callback: (res: { success: boolean; error?: string }) => void) => void;
  roll_dice: (callback: (res: { success: boolean; error?: string; roll?: number }) => void) => void;
  move_token: (data: { tokenIndex: number }, callback: (res: { success: boolean; error?: string; moveResult?: MoveResult }) => void) => void;
  send_reaction: (data: { emoji: string }) => void;
  request_rematch: () => void;
  leave_room: () => void;
  heartbeat: () => void;
}

export interface ServerToClientEvents {
  room_joined: (data: { roomCode: string; playerId: string; playerColor: PlayerColor; gameState: GameState }) => void;
  state_sync: (data: { gameState: GameState }) => void;
  dice_rolled: (data: { playerColor: PlayerColor; roll: number; sixesStreak: number; availableMoves: number[] }) => void;
  token_moved: (data: { moveResult: MoveResult; gameState: GameState }) => void;
  turn_timeout: (data: { playerColor: PlayerColor; autoMoveResult?: MoveResult }) => void;
  reaction_received: (data: EmojiReaction) => void;
  player_disconnected: (data: { playerId: string; playerColor: PlayerColor; replacedByBot: boolean }) => void;
  player_reconnected: (data: { playerId: string; playerColor: PlayerColor }) => void;
  game_over: (data: { winner: PlayerColor; rankings: PlayerColor[]; gameState: GameState }) => void;
  error_message: (data: { message: string }) => void;
}

