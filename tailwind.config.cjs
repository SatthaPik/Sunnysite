/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/img/image-header.jpg')",
        'sec-three-left': "url('./src/assets/img/image-graphic-design.jpg')",
        'sec-three-right': "url('./src/assets/img/image-photography.jpg')",
        
    },


  },


  
  plugins: [],
  }
}