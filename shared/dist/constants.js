"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOARD_THEMES = exports.QUICK_EMOJIS = exports.DEFAULT_AVATARS = exports.TURN_TIMEOUT_MS = exports.HOME_TRIANGLE_POS = exports.HOME_LANE_LENGTH = exports.TOTAL_PERIMETER_TILES = exports.SAFE_TILES = exports.START_TILES = exports.TURN_ORDER = exports.COLORS = void 0;
exports.COLORS = ['red', 'green', 'yellow', 'blue'];
exports.TURN_ORDER = {
    2: ['red', 'yellow'],
    3: ['red', 'green', 'yellow'],
    4: ['red', 'green', 'yellow', 'blue']
};
exports.START_TILES = {
    red: 0,
    green: 13,
    yellow: 26,
    blue: 39
};
// Canonical 8 safe spots on the 52-tile circuit
exports.SAFE_TILES = [0, 8, 13, 21, 26, 34, 39, 47];
exports.TOTAL_PERIMETER_TILES = 52;
exports.HOME_LANE_LENGTH = 5;
exports.HOME_TRIANGLE_POS = 56; // 0..50 (51 tiles) + 51..55 (5 lane tiles) -> 56 is Home!
exports.TURN_TIMEOUT_MS = 20_000; // 20s turn timer
exports.DEFAULT_AVATARS = [
    '🦁', '🐯', '🦊', '🐼', '🐨', '🦄', '🐲', '👑',
    '🧙', '🥷', '🚀', '⚡', '💎', '🔥', '🌟', '🎯'
];
exports.QUICK_EMOJIS = ['👋', '🔥', '😂', '😎', '😱', '👏', '🍀', '💔'];
exports.BOARD_THEMES = {
    candy: {
        name: 'Candy Pastel',
        tagline: 'Sweet, playful & delightfully soft',
        bgGradient: 'radial-gradient(circle at 50% 30%, #fdf2f8 0%, #ede9fe 60%, #e0e7ff 100%)',
        boardBg: '#ffffff',
        frameBorder: '#f472b6',
        goldAccent: '#f59e0b',
        colors: {
            red: { primary: '#fb7185', light: '#fecdd3', glow: 'rgba(251, 113, 133, 0.45)' },
            green: { primary: '#34d399', light: '#a7f3d0', glow: 'rgba(52, 211, 153, 0.45)' },
            yellow: { primary: '#fbbf24', light: '#fde68a', glow: 'rgba(251, 191, 36, 0.45)' },
            blue: { primary: '#60a5fa', light: '#bfdbfe', glow: 'rgba(96, 165, 250, 0.45)' }
        }
    },
    neon: {
        name: 'Neon Night',
        tagline: 'Cyberpunk glow under midnight sky',
        bgGradient: 'radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0f172a 60%, #020617 100%)',
        boardBg: '#090d16',
        frameBorder: '#06b6d4',
        goldAccent: '#facc15',
        colors: {
            red: { primary: '#f43f5e', light: '#fda4af', glow: 'rgba(244, 63, 94, 0.65)' },
            green: { primary: '#10b981', light: '#6ee7b7', glow: 'rgba(16, 185, 129, 0.65)' },
            yellow: { primary: '#eab308', light: '#fef08a', glow: 'rgba(234, 179, 8, 0.65)' },
            blue: { primary: '#0ea5e9', light: '#7dd3fc', glow: 'rgba(14, 165, 233, 0.65)' }
        }
    },
    wood: {
        name: 'Royal Wood',
        tagline: 'Hand-turned walnut & solid brass inlays',
        bgGradient: 'radial-gradient(circle at 50% 30%, #3e2716 0%, #1c1008 60%, #0d0703 100%)',
        boardBg: '#d7be92',
        frameBorder: '#9c6634',
        goldAccent: '#d4af37',
        colors: {
            red: { primary: '#b91c1c', light: '#f87171', glow: 'rgba(185, 28, 28, 0.5)' },
            green: { primary: '#15803d', light: '#4ade80', glow: 'rgba(21, 128, 61, 0.5)' },
            yellow: { primary: '#b45309', light: '#fbbf24', glow: 'rgba(180, 83, 9, 0.5)' },
            blue: { primary: '#1d4ed8', light: '#60a5fa', glow: 'rgba(29, 78, 216, 0.5)' }
        }
    },
    minimal: {
        name: 'Minimal Light',
        tagline: 'Clean architectural clarity',
        bgGradient: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        boardBg: '#ffffff',
        frameBorder: '#94a3b8',
        goldAccent: '#64748b',
        colors: {
            red: { primary: '#e11d48', light: '#fbcfe8', glow: 'rgba(225, 29, 72, 0.35)' },
            green: { primary: '#059669', light: '#a7f3d0', glow: 'rgba(5, 150, 105, 0.35)' },
            yellow: { primary: '#d97706', light: '#fde68a', glow: 'rgba(217, 119, 6, 0.35)' },
            blue: { primary: '#2563eb', light: '#bfdbfe', glow: 'rgba(37, 99, 235, 0.35)' }
        }
    }
};
//# sourceMappingURL=constants.js.map