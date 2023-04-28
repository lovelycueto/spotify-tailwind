/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue:'#1d75de',
        dark:'#000000',
        light:'#ffffff',
        green:'#1db954',
        darkgreen:'#056952',
        tcolor:'#C5F0C9',
      }
    },
    // container:{
    //   center:true,
    //   padding:'15px',
    //   // max-width:'140rem';
    // },
  },
  plugins: [],
}

