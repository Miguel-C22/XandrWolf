/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#174A43',
      },
      keyframes: {
        slideRight: {
          '0%': { marginLeft: '-400%' },
          '100%': { marginLeft: '0%' },
        },
        slideLeft: {
          '0%': { marginLeft: '300%' },
          '100%': { marginLeft: '0%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideRight: 'slideRight 1s ease-out',
        slideLeft: 'slideLeft 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
      },   
    },
  },
  daisyui: {
    themes: [],
 },
  plugins: [require('daisyui'),],
}

