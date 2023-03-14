/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    lineHeight: {
      normal: '1.5rem',
    },
    backgroundImage: {
      'hero-lg': "url('/styles/bb.jfif')",
      
  },
    extend: {},
    extend: {
      fontFamily: {
        heading: ['Lexend', 'inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#191a1c',
        white: '#fafafd',
      },
    },
  },
  plugins: [],
};
