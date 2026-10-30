import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX, Music, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAudio } from '../../hooks/useAudio';
import { BOARD_THEMES, BoardThemeId } from '@royal-ludo/shared';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { themeId, setThemeId, isDarkMode, setIsDarkMode } = useTheme();
  const { isMuted, toggleMute, isBgmPlaying, toggleBGM, volume, setVolume } = useAudio();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-sm p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-white/20"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              ⚙️ Game Settings
            </h3>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Theme Selector */}
          <div className="mb-5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 block">
              Board Theme
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(BOARD_THEMES) as BoardThemeId[]).map(id => {
                const item = BOARD_THEMES[id];
                const isSelected = themeId === id;
                return (
                  <button
                    key={id}
                    onClick={() => setThemeId(id)}
                    className={`p-2.5 rounded-xl text-left border text-xs font-bold transition flex flex-col gap-0.5 ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-[9px] font-normal text-slate-500 dark:text-slate-400 truncate">
                      {item.tagline}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sound & Music Controls */}
          <div className="space-y-3 mb-5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Audio & Haptics
            </label>

            {/* SFX Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
              <span className="flex items-center gap-2">
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                Sound Effects (SFX)
              </span>
              <button
                onClick={toggleMute}
                className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                  isMuted ? 'bg-slate-300 text-slate-700' : 'bg-emerald-500 text-white'
                }`}
              >
                {isMuted ? 'Muted' : 'Enabled'}
              </button>
            </div>

            {/* BGM Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
              <span className="flex items-center gap-2">
                <Music size={16} />
                Procedural Lo-Fi BGM
              </span>
              <button
                onClick={toggleBGM}
                className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                  isBgmPlaying ? 'bg-emerald-500 text-white' : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {isBgmPlaying ? 'Playing' : 'Off'}
              </button>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
              <span className="flex items-center gap-2">
                {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                Dark Mode
              </span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              >
                {isDarkMode ? 'Dark' : 'Light'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

