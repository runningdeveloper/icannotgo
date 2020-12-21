const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
       },
       animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
       },
      colors:{
        orange: colors.orange,
        teal: colors.teal
      },
      fontFamily: {
        'display': ['Russo One', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
