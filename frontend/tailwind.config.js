/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    
    extend: {
      scale:{
       110:'0.9',
       111:'1.5'
      },

      spacing: {
      //   '127':'7rem',
      //  '128':'10rem',
       
      '40px': '60px',
      '60px':'80px',
      '85px':'81px',
      '90px':'90px',
     

       '127':'9rem',
       '128':'12rem',
      
       //image
       '123':'35.25rem',
        '124':'80rem'
      },

     
    },
  },
  plugins: [ require('tailwindcss-border-gradients'),],
}