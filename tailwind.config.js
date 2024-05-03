/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      container:{
        padding:{
          DEFAULT: '30px',
          lg:'0',
        },
      },
    screens: {
      sm: '320px',
      md: '481px',
      lg: '769px',
      xl: '1025px'
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0'
      },
      backgroundImage: {
        hero: "url('')"
      },
    },
  },
  plugins: [],
}