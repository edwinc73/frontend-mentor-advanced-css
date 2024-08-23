/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        barlowCondense: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
      colors: {
        blueDark: "rgb(11, 13, 23)",
        blueLight: "rgb(208, 214, 249)",
      },
    },
    spacing: {
      0: "0rem",
      25: "0.125rem",
      50: "0.25rem",
      100: "0.5rem",
      150: "0.75rem",
      200: "1rem",
      300: "1.5rem",
      400: "2rem",
      500: "2.5rem",
      600: "3rem",
      800: "4rem",
      1000: "5rem",
      1200: "6rem",
      1600: "8rem",
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.125rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "3.5rem",
      "5xl": "6.25rem",
      "6xl": "9rem",
    },

    letterSpacing: {
      normal: "0",
      wide: ".125em",
      wider: ".25em",
    },
  },
  plugins: [],
};
