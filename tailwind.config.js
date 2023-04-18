/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    lineHeight: {
      normal: '1.5rem',
    },
    backgroundImage: {
      'hero-lg': "url('/styles/bb.jfif')",
    },
    extend: {
      screens: {
        mdsm: '910px',
      },
      fontFamily: {
        heading: ['Lexend', 'inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        title: ['Quicksand', 'sans-serif'],
        big: ['Segoe UI Emoji'],
      },
      colors: {
        black: {
          50: '#f6f6f7',
          100: '#e1e3e6',
          200: '#c3c7cc',
          300: '#9da4ab',
          400: '#797f88',
          500: '#5e646e',
          600: '#4a4e57',
          700: '#3e4047',
          800: '#34363b',
          DEFAULT: '#191a1c',
        },
        white: '#fafafd',
      },
    },
  },
  plugins: [],
};
