import { useCallback } from 'react';

export const useHaptics = () => {
  const vibrate = useCallback((pattern: number | number[]) => {
    if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }, []);

  return {
    hapticRoll: () => vibrate([15, 30, 20]),
    hapticStep: () => vibrate(10),
    hapticCapture: () => vibrate([50, 40, 80]),
    hapticVictory: () => vibrate([60, 40, 60, 40, 100]),
    hapticButton: () => vibrate(8)
  };
};

