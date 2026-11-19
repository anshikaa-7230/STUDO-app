/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
