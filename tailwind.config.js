/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ms': '320px',
        
        'ms1': '360px',
        
        'pro': '375px',

        'ms2': '390px',

        'sm': '410px',
        
        'md': '768px',

        'md1': '800px',

        'md2': '884px',
   
        'lg': '1024px',
  
        'xl': '1280px',

        'xl2': '1440px',

        '2xl': '1536px',
      },

      colors: {
        customGreen: 'rgba(23, 175, 38, 1)',
        customDarkGreen: 'rgba(5, 66, 44, 1)',
        customLightGreen: 'rgba(23, 175, 38, 1)',
        customgray: 'rgba(113, 115, 120, 1)',
        mintCream: 'rgba(242, 246, 244, 1)',
        lightGray: 'rgba(157, 158, 162, 1)', 
        whitishGray: 'rgba(206, 207, 213, 0.4)',  
        mintGray: 'rgba(244, 244, 244, 1)',  
        whitishbrown: 'rgba(195, 210, 204, 1)',  
        customDark: 'rgba(14,23,25,1)',  
       },
      

    },
  }, 
  plugins: [],
}