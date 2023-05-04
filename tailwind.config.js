/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,,ts,scss}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': {
        100: '#F8FCD4',
        200: '#F0F9AA',
        300: '#E0EF7C',
        400: '#CCE059',
        500: '#B1CC29',
        600: '#94AF1D',
        700: '#799214',
        800: '#5F760D',
        900: '#4C6107',
      },
      'basic': {
        100: '#FFFFFF',
        200: '#FBFCF7',
        300: '#F5F7ED',
        400: '#F0F2E4',
        500: '#DCE0C5',
        600: '#ADB38F',
        700: '#4E592E',
        800: '#3C4522',
        900: '#303819',
        1000: '#293015',
        1100: '#1F2610',
      },
      'warning': {
        100: '#FDFDCF',
        200: '#FCFCA0',
        300: '#F6F66F',
        400: '#EDED4B',
        500: '#E2E214',
        600: '#C2C20E',
        700: '#A2A20A',
        800: '#838306',
        900: '#6C6C03',
      },
      'info': {
        100: '#DBECFE',
        200: '#B8D7FE',
        300: '#94BFFE',
        400: '#7AAAFD',
        500: '#4E88FC',
        600: '#3968D8',
        700: '#274CB5',
        800: '#183492',
        900: '#0E2378',
      },
      'success': {
        100: '#EEFCDB',
        200: '#D9FAB8',
        300: '#BBF091',
        400: '#9CE171',
        500: '#71CE46',
        600: '#52B133',
        700: '#389423',
        800: '#217716',
        900: '#12620D',
      },
      'txt': {
        'default': '#4C6107',
        'alternate': '#FFFFFF',
        'accent': '#94AF1D',
        'hint': '#C5CD98',
        'disabled': '#ADB38F',
      }
    },
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")],
};
