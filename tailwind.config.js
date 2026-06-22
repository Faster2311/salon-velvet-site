/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme from salon_007 + soft pink support tones (client wish: ніжний рожевий + бежевий)
        bg: '#f6f4f4',
        cream: '#fbf6ef',
        paper: '#ffffff',
        ink: '#1a1620',
        mute: '#6f636a',
        line: '#ecdfdb',
        line2: '#e0d3cd',
        rose: {
          DEFAULT: '#a8456b',
          50:  '#fcf3f4',
          100: '#f9e4e9',
          200: '#f3c7d2',
          300: '#e9a3b6',
          400: '#dc7a93',
          500: '#a8456b',
          600: '#8e3458',
          700: '#6e2742',
          800: '#4d1b2d',
          900: '#2d0f1a',
        },
        beige: {
          DEFAULT: '#d4a574',
          50:  '#fbf6ee',
          100: '#f4e7d3',
          200: '#ebd1a8',
          300: '#dfb87f',
          400: '#d4a574',
          500: '#b9854c',
          600: '#956734',
          700: '#6f4b24',
          800: '#4a3018',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
        accent: ['"Sacramento"', 'cursive'],
      },
      letterSpacing: { wider2: '0.2em' },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(168, 69, 107, 0.25)',
        card: '0 8px 24px -16px rgba(78, 38, 56, 0.18)',
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
      },
      animation: { floaty: 'floaty 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};
