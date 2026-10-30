import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Share2, X } from 'lucide-react';

interface ShareRoomModalProps {
  roomCode: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareRoomModal: React.FC<ShareRoomModalProps> = ({
  roomCode,
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareUrl = `${window.location.origin}?room=${roomCode}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `🎲 Join my Royal Ludo match! Room Code: ${roomCode}\nPlay directly in browser: ${shareUrl}`
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-sm p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-white/20 text-center"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X size={18} />
          </button>

          <span className="text-4xl mb-2 block">👑</span>
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
            Invite Your Friends
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5">
            Share this room code or direct link to start playing immediately.
          </p>

          {/* 6-Char Room Code Box */}
          <div className="flex items-center justify-center gap-2 p-3 bg-slate-100 dark:bg-slate-800/80 rounded-2xl mb-4 border border-dashed border-slate-300 dark:border-slate-700">
            <span className="font-mono text-2xl font-black tracking-widest text-amber-500">
              {roomCode}
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Copy Link Button */}
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 font-bold rounded-2xl transition shadow-md"
            >
              {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              <span>{copied ? 'Link Copied!' : 'Copy Invite Link'}</span>
            </button>

            {/* WhatsApp Share Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-2xl transition shadow-md"
            >
              <Share2 size={18} />
              <span>Share via WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

