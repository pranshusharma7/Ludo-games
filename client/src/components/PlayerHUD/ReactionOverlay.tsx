import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmojiReaction, QUICK_EMOJIS } from '@royal-ludo/shared';

interface ReactionOverlayProps {
  reactions: EmojiReaction[];
  onSendReaction: (emoji: string) => void;
}

export const ReactionOverlay: React.FC<ReactionOverlayProps> = ({
  reactions,
  onSendReaction
}) => {
  return (
    <div className="relative w-full">
      {/* Floating Animated Emojis in Sky */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {reactions.slice(-6).map(reaction => (
            <motion.div
              key={reaction.id}
              initial={{ y: window.innerHeight * 0.7, x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 200, opacity: 0, scale: 0.5 }}
              animate={{ y: window.innerHeight * 0.35, opacity: [0, 1, 1, 0], scale: [0.5, 1.5, 1.2, 0.8] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: 'easeOut' }}
              className="absolute text-4xl filter drop-shadow-lg"
            >
              {reaction.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Quick Reaction Emoji Bar */}
      <div className="flex items-center justify-center gap-1.5 p-1.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
        {QUICK_EMOJIS.map(emoji => (
          <motion.button
            key={emoji}
            type="button"
            whileHover={{ scale: 1.25, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSendReaction(emoji)}
            className="w-8 h-8 flex items-center justify-center text-lg rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
          >
            {emoji}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

