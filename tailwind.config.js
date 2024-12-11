/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ms': '300px',
        
        'ms1': '360px',

        'sm': '400px',
        
        'md': '768px',
   
        'lg': '1024px',
  
        'xl': '1280px',

        'xl2': '1300px',

        '2xl': '1536px',
      },

      colors: {
        customGreen: 'rgba(23, 175, 38, 1)',
        customDarkGreen: 'rgba(5, 66, 44, 1)',
        customLightGreen: 'rgba(23, 175, 38, 1)',
        customgray: 'rgba(113, 115, 120, 1)',
       }

    },
  }, 
  plugins: [],
}