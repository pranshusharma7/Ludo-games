import { PlayerColor, BoardThemeId } from './types';
export declare const COLORS: PlayerColor[];
export declare const TURN_ORDER: Record<number, PlayerColor[]>;
export declare const START_TILES: Record<PlayerColor, number>;
export declare const SAFE_TILES: number[];
export declare const TOTAL_PERIMETER_TILES = 52;
export declare const HOME_LANE_LENGTH = 5;
export declare const HOME_TRIANGLE_POS = 56;
export declare const TURN_TIMEOUT_MS = 20000;
export declare const DEFAULT_AVATARS: string[];
export declare const QUICK_EMOJIS: string[];
export declare const BOARD_THEMES: Record<BoardThemeId, {
    name: string;
    tagline: string;
    bgGradient: string;
    boardBg: string;
    frameBorder: string;
    goldAccent: string;
    colors: Record<PlayerColor, {
        primary: string;
        light: string;
        glow: string;
    }>;
}>;
//# sourceMappingURL=constants.d.ts.map