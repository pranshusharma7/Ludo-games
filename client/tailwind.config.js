/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        ludo: {
          coral: '#ff6b6b',
          sunny: '#ffd166',
          mint: '#06d6a0',
          sky: '#118ab2',
          midnight: '#073b4c',
        }
      },
      boxShadow: {
        'glow-coral': '0 0 25px rgba(255, 107, 107, 0.6)',
        'glow-sunny': '0 0 25px rgba(255, 209, 102, 0.6)',
        'glow-mint': '0 0 25px rgba(6, 214, 160, 0.6)',
        'glow-sky': '0 0 25px rgba(17, 138, 178, 0.6)',
        'glow-gold': '0 0 25px rgba(245, 158, 11, 0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 1.8s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

