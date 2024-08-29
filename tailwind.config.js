/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Lato': "'Lato',sans-serif",
        'Rubik': "'Rubik',sans-serif",
      },
      colors: {
        black: "#010101",
        orange: "#ff9748",
        orange_red: "#ff4c24",
        gray: "#5f5f5f",
        light_gray: "#d6d0cb",
        bg_creamy:"#fff8f2",
      },
      boxShadow: {
        
      "3xl": "0px 0px 16px 6px #8080801F",
      // "4xl": "0px 0px 16px 6px #8080801F;",
      //   "5xl": "0px 4px 4px 0px #00000040",
      //   "6xl": "0px 5px 18px 0px #00000061",
      //   "7xl": "8px 8px 0px 0px #df4741",
      //   "8xl": "8px 8px 0px 0px #0F2440",
      },
      backgroundImage: {
        "hero_bg": "url(../assets/images/png/hero-bg.png)",
        "team_bg": "url(../assets/images/png/team-bg.png)",
      },
      backgroundSize: {
        "full": "100% 100%",
        "cover": "cover",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
        '4xl': '1800px',
        '5xl': '1920px',
      },

      container: {
        center: true,
        screen: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1240px",
        },
        padding: {
          DEFAULT: "24px",
        },


      },
    },
  },
  plugins: [],

};

