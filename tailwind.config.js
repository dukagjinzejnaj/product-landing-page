/* import { vModelCheckbox } from 'vue'; */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'kohle': '#2f3132',
      'cemento': '#697172',
      'acier': '#c3c6c8',
      'grigio': '#e1e2e3',
      'marin': '#f4f4f4',
      'azzuro': '#00b8fc',
      'ciano': '#00ead0',
      'kirsche': '#ff2947',
      'lila': '#814efa',
      'electrico': '#dcfd00',
      'helios': '#ff7f2c',
    },
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: '0', 'margin-left': '-100px'},
          '100%': { opacity: '1', 'margin-left': '0px' }
        }
      },
      animation: {
        'show-content': 'show 1s',
      }
    }
  },
  plugins: [],
}

