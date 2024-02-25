/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./HTML/**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        'arimo': ['Arimo'],
        'rubik': ['Rubik'],
        'robotomono': ['Roboto Mono'],
        'figtree': ['Figtree'],
        'spacegrotesk': ['Space Grotesk'],
        'worksans': ['Work Sans'],
      },

      animation: {
        nav: 'nav 0.5s ease-in forwards',
      },

      keyframes: {
        nav: {
          '0%': {
              left:'0',
              width:'0'
            },
            '50%': {
              left:'0',
              width:'100%'
            },
            '100%': {
              left:'0',
              width:'100%'
            }
        }
      }

    },
  },
  plugins: [],
}

