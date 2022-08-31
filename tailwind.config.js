/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/*.{html,js}",
    "./src/index.html"
  ],

  theme: {



    container : {
      center : true
    },

    fontFamily : {
      'montserrat' : 'Montserrat'
    },

    extend: {

      screens : {
        'xl' : '1140px'
      },

      colors : {
        'escuro' : '#333333',
        'destaque' : '#EE6066',
        'salmao' : '#DDC3C4',
        'claro' : '#EFE7E4',
        'cinza-claro' : '#EEEEEE',
        'branco' : '#FFFFFF',

      },

    },
  },

  plugins: [],
}