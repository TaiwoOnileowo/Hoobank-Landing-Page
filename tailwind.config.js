
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    
    keyframes:{
      glowing:{
        '0':{
          backgroundPosition: '0 0'
        },
        '50%':{
          backgroundPosition: '400% 0'
        },
        '100%':{
          backgroundPosition: '0 0'
        }
        },
     animation :{
      glowing: 'glowing 20s linear infinite'
     }
      }
  },
  plugins: [],
};

