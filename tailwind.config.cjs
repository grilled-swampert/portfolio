const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['afacad-regular', ...fontFamily.sans],
        afacadBold: ['afacad-bold', ...fontFamily.sans],
        dynapuff: ['dynapuff-regular', ...fontFamily.sans],
        poppins: ['poppins-regular', ...fontFamily.sans],
        poppinsBold: ['poppins-bold', ...fontFamily.sans],
        quattrocento: ['quattrocento-regular', ...fontFamily.serif],
        tenon: ['tenon', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
