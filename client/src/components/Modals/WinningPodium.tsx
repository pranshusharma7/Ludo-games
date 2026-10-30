import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Player, PlayerColor } from '@royal-ludo/shared';
import { useTheme } from '../../context/ThemeContext';
import { useAudio } from '../../hooks/useAudio';

interface WinningPodiumProps {
  winner: PlayerColor;
  rankings: PlayerColor[];
  players: Player[];
  rematchVotes: string[];
  myPlayerId: string;
  onRequestRematch: () => void;
  onReturnLobby: () => void;
}

export const WinningPodium: React.FC<WinningPodiumProps> = ({
  winner,
  rankings,
  players,
  rematchVotes,
  myPlayerId,
  onRequestRematch,
  onReturnLobby
}) => {
  const { theme } = useTheme();
  const { playVictory } = useAudio();

  useEffect(() => {
    playVictory();
    // Confetti blast
    const end = Date.now() + 3000;
    const colors = ['#f59e0b', '#fb7185', '#34d399', '#60a5fa', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, [playVictory]);

  const winningPlayer = players.find(p => p.color === winner);
  const hasVotedRematch = rematchVotes.includes(myPlayerId);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="relative w-full max-w-md p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-white/20 text-center"
        >
          {/* Animated Trophy */}
          <motion.div
            animate={{ rotate: [-8, 8, -8], y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl mb-2"
          >
            🏆
          </motion.div>

          <span className="text-xs uppercase font-serif font-black tracking-widest text-amber-500">
            CHAMPION DECIDED
          </span>

          <h2 className="text-2xl font-display font-black text-slate-900 dark:text-white mt-1">
            {winningPlayer?.name} Triumphs!
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
            All four tokens reached the Home Pyramid in glorious victory.
          </p>

          {/* Podium Standings */}
          <div className="flex items-end justify-center gap-2 mb-6 h-36">
            {rankings.map((color, idx) => {
              const p = players.find(x => x.color === color);
              const rank = idx + 1;
              const height = rank === 1 ? 'h-28' : rank === 2 ? 'h-20' : 'h-14';

              return (
                <div key={color} className="flex flex-col items-center flex-1">
                  <span className="text-xl mb-1">{p?.avatar}</span>
                  <span className="text-[10px] font-bold truncate max-w-[70px] text-slate-700 dark:text-slate-200">
                    {p?.name}
                  </span>
                  <div
                    className={`w-full ${height} rounded-t-xl flex items-center justify-center font-display font-black text-lg text-white shadow-md transition-all`}
                    style={{ background: theme.colors[color].primary }}
                  >
                    #{rank}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2.5">
            <button
              onClick={onRequestRematch}
              className={`w-full py-3.5 px-4 font-display font-bold text-sm rounded-2xl shadow-lg transition ${
                hasVotedRematch
                  ? 'bg-amber-500 text-amber-950 opacity-90'
                  : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-amber-950'
              }`}
            >
              {hasVotedRematch
                ? `Voted Rematch (${rematchVotes.length} ready) ⏳`
                : 'Play Again / Rematch ↻'}
            </button>

            <button
              onClick={onReturnLobby}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition"
            >
              Back to Main Lobby
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

