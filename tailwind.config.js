/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#03080F',
        'ink-2': '#070F1A',
        'ink-3': '#0C1829',
        steel: '#5B8DB5',
        'steel-2': '#234d7a',
        blue: '#2B7CC1',
        'blue-2': '#3d8fd4',
        sky: '#89CEFF',
        paper: '#F5F7FA',
        'paper-2': '#EBF0F7',
        'paper-3': '#DCE6F2',
        mist: '#7A9EC0',
        slate: '#C2D8EE',
        dim: '#3A5470',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.25em',
        'wide2': '0.12em',
      },
      animation: {
        'line-grow': 'lineGrow 1.2s ease-out forwards',
        'count-up': 'countUp 0.4s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        lineGrow: { from: { scaleX: 0 }, to: { scaleX: 1 } },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        cursorBlink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
    },
  },
  plugins: [],
}
