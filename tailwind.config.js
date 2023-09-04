/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
        screens:{
          'sm': '580px',   
          'md': '768px',  
          'lg': '1024px',  
          'xl': '1280px',  
        },
        colors:{
          'color1': "hsl(180, 8%, 52%)",
          'color2': "hsl(180, 14%, 20%)",
          'color3': "hsl(180, 31%, 95%)",
          'color4': "hsl(180, 29%, 50%)",
        },
        fontFamily:{
          'heading1': 'League Spartan',  
    
        },
    },
  },
  plugins: [],
}