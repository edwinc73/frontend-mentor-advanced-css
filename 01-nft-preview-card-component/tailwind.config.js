/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(139, 172, 218)",
        secondary: "rgb(0, 255, 247)",
        darkMain: "rgb(13, 25, 43)",
        darkCard: "rgb(20, 37, 61),",
        darkLine: "rgb(47, 65, 91)",
      },
    },
  },
  plugins: [],
};
