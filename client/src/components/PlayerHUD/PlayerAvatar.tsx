import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Player, PlayerColor, TURN_TIMEOUT_MS } from '@royal-ludo/shared';
import { useTheme } from '../../context/ThemeContext';

interface PlayerAvatarProps {
  player: Player;
  isActive: boolean;
  turnDeadline: number;
  isMe: boolean;
}

export const PlayerAvatar: React.FC<PlayerAvatarProps> = ({
  player,
  isActive,
  turnDeadline,
  isMe
}) => {
  const { theme } = useTheme();
  const [timeLeft, setTimeLeft] = useState<number>(20);

  useEffect(() => {
    if (!isActive) return;

    const updateTimer = () => {
      const remaining = Math.max(0, Math.ceil((turnDeadline - Date.now()) / 1000));
      setTimeLeft(remaining);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 250);
    return () => clearInterval(interval);
  }, [isActive, turnDeadline]);

  const colorConfig = theme.colors[player.color];
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const progress = isActive ? Math.max(0, Math.min(1, (turnDeadline - Date.now()) / TURN_TIMEOUT_MS)) : 0;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div
      className={`relative flex items-center gap-3 p-2.5 rounded-2xl transition-all ${
        isActive
          ? 'bg-[#22150c] shadow-xl scale-105'
          : 'bg-[#180f08]/80 opacity-90'
      }`}
      style={{
        boxShadow: isActive ? `0 0 24px ${colorConfig.glow}, inset 0 1px 2px rgba(255,230,180,0.2)` : undefined,
        border: isActive ? `2px solid ${colorConfig.primary}` : '1px solid rgba(223, 178, 86, 0.25)'
      }}
    >
      {/* Avatar Container with Circular Turn Countdown Timer */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* SVG Circular Timer Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="3.5"
            className="text-slate-200 dark:text-slate-800"
          />
          {isActive && (
            <motion.circle
              cx="28"
              cy="28"
              r={radius}
              fill="transparent"
              stroke={timeLeft <= 5 ? '#ef4444' : colorConfig.primary}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ ease: 'linear', duration: 0.25 }}
            />
          )}
        </svg>

        {/* Avatar Circle */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-xl shadow-md border-2 border-white/90 select-none overflow-hidden"
          style={{ background: colorConfig.light }}
        >
          {player.avatar}
        </div>

        {/* Bot or Disconnect Tag */}
        {player.isBot && (
          <span className="absolute -bottom-1 -right-1 bg-sky-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-md">
            BOT
          </span>
        )}
      </div>

      {/* Player Meta Info */}
      <div className="flex flex-col min-w-0 pr-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate max-w-[90px] sm:max-w-[120px]">
            {player.name}
          </span>
          {isMe && (
            <span className="text-[9px] font-black uppercase tracking-wider bg-amber-400 text-amber-950 px-1 rounded">
              YOU
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
          <span>{player.finishedCount}/4 Home</span>
          <span>•</span>
          <span>{player.capturesCount} ⚔</span>
        </div>
      </div>
    </div>
  );
};

