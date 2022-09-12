/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        sm: '20px',
        base: '22px',
        '6xl': '60px',
        '7xl': '70px',
      },
      colors: {
        'slate-300': '#D5E0F2',
      },
    },
  },
  plugins: [],
}
