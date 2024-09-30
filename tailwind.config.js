/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Raleway', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        vanguard: ['Vanguard', 'sans-serif'],
        roboto: ['Roboto Mono'],
      },

      colors: {
        dark: '#f8f8f8',
        secondary: '#171718',
        primary: '#f8f8f8',
        nav: '#e8275d',
      },
    },

    // container: {
    //   center: true,
    //   padding: '2rem',
    //   screens: {
    //     '2xl': '1400px',
    //   },
    // },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '2px #171718',
          '-moz-text-stroke': '2px #171718',
          'text-stroke': '2px #171718',
          '-webkit-text-fill-color': '#f8f8f8',
          '-moz-text-fill-color': '#f8f8f8',
          'text-fill-color': '#f8f8f8',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
