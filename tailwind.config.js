const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
