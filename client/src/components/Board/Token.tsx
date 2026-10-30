import React from 'react';
import { motion } from 'framer-motion';
import { PlayerColor } from '@royal-ludo/shared';
import { useTheme } from '../../context/ThemeContext';

interface TokenProps {
  color: PlayerColor;
  tokenIndex: number;
  xPercent: number;
  yPercent: number;
  offsetX: number;
  offsetY: number;
  scale: number;
  isEligible: boolean;
  isFinished: boolean;
  isHopping?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
}

export const Token: React.FC<TokenProps> = ({
  color,
  tokenIndex,
  xPercent,
  yPercent,
  offsetX,
  offsetY,
  scale,
  isEligible,
  isFinished,
  isHopping = false,
  onHoverStart,
  onHoverEnd,
  onClick
}) => {
  const { theme } = useTheme();
  const colorConfig = theme.colors[color];

  return (
    <motion.button
      type="button"
      className={`absolute w-[5.6%] h-[5.6%] rounded-full outline-none focus:outline-none select-none z-10 flex items-center justify-center ${
        isEligible ? 'cursor-pointer z-20' : 'cursor-default pointer-events-none'
      } ${isFinished ? 'opacity-70' : 'opacity-100'}`}
      style={{
        left: `${xPercent}%`,
        top: `${yPercent}%`
      }}
      animate={{
        x: `calc(-50% + ${offsetX}px)`,
        y: `calc(-50% + ${offsetY}px)`,
        scale: isEligible ? [scale, scale * 1.08, scale] : scale
      }}
      transition={{
        x: { type: 'spring', damping: 22, stiffness: 240 },
        y: { type: 'spring', damping: 22, stiffness: 240 },
        scale: isEligible
          ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
          : { duration: 0.2 }
      }}
      whileHover={isEligible ? { y: `calc(-50% + ${offsetY - 8}px)`, scale: scale * 1.2 } : undefined}
      whileTap={isEligible ? { scale: scale * 0.92 } : undefined}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={isEligible ? onClick : undefined}
      aria-label={`${color} token ${tokenIndex + 1}`}
    >
      {/* Soft Contact Shadow that shrinks during jump */}
      <motion.div
        className="absolute -bottom-1.5 left-[10%] w-[80%] h-2 rounded-full bg-black/70 blur-[1px] pointer-events-none"
        animate={{
          scale: isHopping ? 0.45 : 1,
          opacity: isHopping ? 0.2 : 0.7
        }}
        transition={{ duration: 0.16 }}
      />

      {/* 3D Turned Wood Pawn Silhouette (Base Rim + Neck Collar + Glossy Head) */}
      <motion.div
        className="relative w-full h-full rounded-[45%] border-2 border-white/80 shadow-lg flex items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle at 35% 25%, ${colorConfig.light} 0%, ${colorConfig.primary} 60%, #000 100%)`,
          boxShadow: isEligible
            ? `0 0 18px ${colorConfig.glow}, 0 0 0 2px #f59e0b, inset 0 2px 4px rgba(255,255,255,0.9)`
            : 'inset 0 2px 4px rgba(255,255,255,0.8), 0 5px 10px rgba(0,0,0,0.5)'
        }}
        animate={
          isHopping
            ? {
                y: [0, -22, 0],
                scaleX: [1, 0.92, 1.15, 1],
                scaleY: [1, 1.25, 0.88, 1]
              }
            : {}
        }
        transition={{ duration: 0.18, ease: 'easeInOut' }}
      >
        {/* Specular Varnish Highlights */}
        <div className="absolute top-0.5 left-1 w-2.5 h-1.5 rounded-full bg-white/80 blur-[0.5px]" />

        {/* Solid Brass Collar Accent */}
        <div className="absolute bottom-1 w-[70%] h-1 rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 opacity-90 shadow-sm" />

        {/* Crown / Number Head Badge */}
        <span className="relative text-[10px] font-display font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
          {tokenIndex + 1}
        </span>
      </motion.div>
    </motion.button>
  );
};
