import { useEffect, useRef, useState, useCallback } from 'react';

export const useAudio = () => {
  const ctxRef = useRef<AudioContext | null>(null);
  const bgmIntervalRef = useRef<any>(null);

  const [isMuted, setIsMuted] = useState<boolean>(() => {
    return localStorage.getItem('ludo_muted') === 'true';
  });

  const [isBgmPlaying, setIsBgmPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.7);

  const initContext = useCallback(() => {
    if (!ctxRef.current && (window.AudioContext || (window as any).webkitAudioContext)) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      ctxRef.current = new AudioCtx();
    }
    if (ctxRef.current && ctxRef.current.state === 'suspended') {
      ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      localStorage.setItem('ludo_muted', String(next));
      if (next && bgmIntervalRef.current) {
        clearInterval(bgmIntervalRef.current);
        bgmIntervalRef.current = null;
        setIsBgmPlaying(false);
      }
      return next;
    });
  }, []);

  const playDiceRoll = useCallback(() => {
    if (isMuted) return;
    const ctx = initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    for (let i = 0; i < 6; i++) {
      const delay = i * 0.065 + Math.random() * 0.02;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180 + Math.random() * 90, now + delay);
      osc.frequency.exponentialRampToValueAtTime(50, now + delay + 0.05);

      gain.gain.setValueAtTime((0.3 - i * 0.04) * volume, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + delay);
      osc.stop(now + delay + 0.06);
    }
  }, [isMuted, volume, initContext]);

  const playTokenHop = useCallback((pitchVariance = 0) => {
    if (isMuted) return;
    const ctx = initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const baseFreq = 420 + pitchVariance * 30 + (Math.random() - 0.5) * 40;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.08);

    gain.gain.setValueAtTime(0.25 * volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }, [isMuted, volume, initContext]);

  const playDeploy = useCallback(() => {
    if (isMuted) return;
    const ctx = initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(680, now + 0.22);

    gain.gain.setValueAtTime(0.25 * volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.32);
  }, [isMuted, volume, initContext]);

  const playCapture = useCallback(() => {
    if (isMuted) return;
    const ctx = initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(340, now);
    osc.frequency.exponentialRampToValueAtTime(75, now + 0.22);

    gain.gain.setValueAtTime(0.35 * volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.26);
  }, [isMuted, volume, initContext]);

  const playSafeChime = useCallback(() => {
    if (isMuted) return;
    const ctx = initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [880, 1320].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.2 * volume, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.4);
    });
  }, [isMuted, volume, initContext]);

  const playVictory = useCallback(() => {
    if (isMuted) return;
    const ctx = initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25, 392.00, 523.25];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const start = now + idx * 0.14;
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.28 * volume, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.32);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.35);
    });
  }, [isMuted, volume, initContext]);

  // Gentle procedural chill BGM synthesizer
  const toggleBGM = useCallback(() => {
    if (isBgmPlaying) {
      if (bgmIntervalRef.current) {
        clearInterval(bgmIntervalRef.current);
        bgmIntervalRef.current = null;
      }
      setIsBgmPlaying(false);
      return;
    }

    if (isMuted) return;
    const ctx = initContext();
    if (!ctx) return;

    setIsBgmPlaying(true);

    const chords = [
      [261.63, 329.63, 392.00], // C major
      [220.00, 261.63, 329.63], // A minor
      [174.61, 220.00, 261.63], // F major
      [196.00, 246.94, 293.66], // G major
    ];

    let chordIdx = 0;

    const playChord = () => {
      if (!ctx || ctx.state === 'closed') return;
      const now = ctx.currentTime;
      const currentChord = chords[chordIdx % chords.length];
      chordIdx++;

      currentChord.forEach(freq => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * 1.5, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.035 * volume, now + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 2.3);
      });
    };

    playChord();
    bgmIntervalRef.current = setInterval(playChord, 2400);
  }, [isBgmPlaying, isMuted, volume, initContext]);

  useEffect(() => {
    return () => {
      if (bgmIntervalRef.current) {
        clearInterval(bgmIntervalRef.current);
      }
    };
  }, []);

  return {
    isMuted,
    toggleMute,
    isBgmPlaying,
    toggleBGM,
    volume,
    setVolume,
    playDiceRoll,
    playTokenHop,
    playDeploy,
    playCapture,
    playSafeChime,
    playVictory
  };
};

