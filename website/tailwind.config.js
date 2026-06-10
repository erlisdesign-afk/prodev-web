import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ProDev Brand Palette
        indigo: {
          DEFAULT: '#3D20A0',
          light:   '#EEE9F9',
          mid:     '#C4B3F0',
          dark:    '#2A1470',
          50:  '#EEE9F9',
          100: '#D8CEFF',
          400: '#8B6AE8',
          500: '#5B38C8',
          600: '#3D20A0',
          700: '#2A1470',
          900: '#150A3A',
        },
        emerald: {
          DEFAULT: '#2DC97E',
          light:   '#E3F9EE',
          mid:     '#8FE4BC',
          dark:    '#1A9158',
        },
        amber: {
          DEFAULT: '#F0A030',
          light:   '#FEF3E2',
          mid:     '#F8CC88',
          dark:    '#B87318',
        },
        navy:      '#1E2440',
        dark:      '#1A1A1A',
        charcoal:  '#2D2D2D',
        slate:     '#3A3D4D',
        'gray-mid':'#6B7280',
        'off-white':'#F8F8F8',
        // Site-specific tokens
        bg:        '#090910',
        'bg-card': '#0F0F1A',
        'bg-elevated': '#14141F',
        border:    '#1E1E2E',
        'border-subtle': '#16162A',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3D20A0 0%, #2DC97E 100%)',
        'gradient-hero':  'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(61,32,160,0.25) 0%, transparent 70%)',
        'gradient-glow-green': 'radial-gradient(ellipse 60% 50% at 30% 60%, rgba(45,201,126,0.12) 0%, transparent 70%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':       'float 6s ease-in-out infinite',
        'spin-slow':   'spin 20s linear infinite',
        // Aurora
        aurora: 'aurora 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        // Aurora keyframe
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to:   { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
      boxShadow: {
        'glow-indigo': '0 0 60px rgba(61,32,160,0.35)',
        'glow-green':  '0 0 40px rgba(45,201,126,0.25)',
        'card':        '0 1px 0 rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.5)',
        'card-hover':  '0 1px 0 rgba(255,255,255,0.06), 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(61,32,160,0.3)',
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Adds all Tailwind colors as CSS variables — required by the Aurora animation
// e.g. var(--blue-500), var(--indigo-300), var(--transparent), var(--white), var(--black)
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ':root': newVars,
  });
}
