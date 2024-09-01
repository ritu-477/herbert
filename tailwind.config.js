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

