const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      },
      fontFamily: {
        'serif': ['Lora', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        'primary': {
          50: '#fcf7e8',
          100: '#faeed1',
          200: '#f4dda4',
          300: '#efcd76',
          400: '#eabc48',
          500: '#e4ab1b',
          600: '#b78915',
          700: '#896710',
          800: '#5b440b',
          900: '#2e2205',
          950: '#171103',
          DEFAULT: '#f3d996'
        },
        'secondary': {
          50: '#fbf6e9',
          100: '#f7edd4',
          200: '#efdba9',
          300: '#e7c97e',
          400: '#dfb753',
          500: '#d7a628',
          600: '#ac8420',
          700: '#816318',
          800: '#564210',
          900: '#2b2108',
          950: '#161104',
          DEFAULT: '#f7edd4'
        },
        'accent': {
          50: '#eef0f7',
          100: '#dce2ef',
          200: '#bac4de',
          300: '#97a7ce',
          400: '#7489be',
          500: '#526cad',
          600: '#41568b',
          700: '#314168',
          800: '#212b45',
          900: '#101623',
          950: '#080b11',
          DEFAULT: '#4b63a0'
        },
      },
    },
  },
  plugins: [],
}

