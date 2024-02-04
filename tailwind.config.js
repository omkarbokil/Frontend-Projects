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
      }
    },
  },
  plugins: [],
}

