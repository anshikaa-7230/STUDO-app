/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FAFAFC',
        studo: {
          dark: '#24243A',
          secondary: '#737386',
          muted: '#A0A0B2',
          border: '#E8E8EE',
          card: '#FFFFFF',
          lavender: '#E9E1FF',
          'lavender-dark': '#6941C6',
          babyBlue: '#DCEEFF',
          'babyBlue-dark': '#026AA2',
          peach: '#FFE6DC',
          'peach-dark': '#B54708',
          mintGreen: '#DDF3E7',
          'mintGreen-dark': '#067647',
          butterYellow: '#FFF0C9',
          'butterYellow-dark': '#B54708',
          softPink: '#F8DFED',
          'softPink-dark': '#C11574',
        },
        cosmic: {
          bg: '#080B16',
          surface: '#0F1528',
          elevated: '#171F38',
          border: 'rgba(255, 255, 255, 0.1)',
          cyan: '#06B6D4',
          electric: '#38BDF8',
          violet: '#8B5CF6',
          purple: '#A855F7',
          accent: '#00F0FF',
        },
        aurora: {
          bg: '#FAFAFC',
          surface: '#FFFFFF',
          elevated: '#F4F4F8',
          border: '#E8E8EE',
          lavender: '#E9E1FF',
          pink: '#F8DFED',
          peach: '#FFE6DC',
          mint: '#DDF3E7',
          yellow: '#FFF0C9',
          blue: '#DCEEFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(36, 36, 58, 0.04), 0 1px 3px rgba(36, 36, 58, 0.03)',
        'card': '0 4px 20px rgba(36, 36, 58, 0.06)',
        'card-hover': '0 10px 30px rgba(36, 36, 58, 0.09)',
        'popover': '0 10px 25px -5px rgba(36, 36, 58, 0.1), 0 8px 10px -6px rgba(36, 36, 58, 0.05)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
        'glow-violet': '0 0 25px rgba(139, 92, 246, 0.35)',
        'glow-gold': '0 0 25px rgba(245, 158, 11, 0.35)',
        'glow-pink': '0 0 25px rgba(244, 114, 182, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
