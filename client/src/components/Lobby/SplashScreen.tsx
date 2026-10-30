import React from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onEnter: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
      {/* Slow Floating Ambient Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 -left-20 w-80 h-80 rounded-full bg-rose-400/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none"
      />

      {/* Main Logo & Animated Dice */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative z-10 flex flex-col items-center max-w-sm"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-400 via-rose-400 to-sky-400 p-1 shadow-2xl mb-4"
        >
          <div className="w-full h-full rounded-[22px] bg-slate-900 flex items-center justify-center text-5xl shadow-inner">
            🎲
          </div>
        </motion.div>

        <span className="text-[11px] font-serif font-black tracking-[0.25em] text-amber-400 uppercase mb-1">
          ✦ REAL-TIME 3D MULTIPLAYER ✦
        </span>

        <h1 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight">
          Royal <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Ludo</span>
        </h1>

        <p className="text-xs sm:text-sm text-amber-100/70 mt-2 mb-8 leading-relaxed">
          Roll the hand-carved 3D ivory dice across a luxury walnut board. Play with friends via shareable link or challenge live opponents worldwide.
        </p>

        {/* Enter Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-base tracking-wider shadow-2xl shadow-amber-500/30 flex items-center justify-center gap-3 transition border border-amber-300/80"
        >
          <span>ENTER THE PARLOR</span>
          <span>➔</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

