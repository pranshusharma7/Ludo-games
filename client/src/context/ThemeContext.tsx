import React, { createContext, useContext, useState, useEffect } from 'react';
import { BoardThemeId, BOARD_THEMES } from '@royal-ludo/shared';

interface ThemeContextType {
  themeId: BoardThemeId;
  setThemeId: (id: BoardThemeId) => void;
  theme: typeof BOARD_THEMES['candy'];
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeId] = useState<BoardThemeId>(() => {
    return (localStorage.getItem('ludo_theme') as BoardThemeId) || 'wood';
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('ludo_dark') !== 'false';
  });

  useEffect(() => {
    localStorage.setItem('ludo_theme', themeId);
    if (themeId === 'neon' || themeId === 'wood') {
      setIsDarkMode(true);
    }
  }, [themeId]);

  useEffect(() => {
    localStorage.setItem('ludo_dark', String(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const theme = BOARD_THEMES[themeId];

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId, theme, isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

