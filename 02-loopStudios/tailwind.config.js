/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      primeGray: "hsl(0, 0%, 55%",
      primeDarkGray: "hsl(0, 0%, 41%)",
    },
  },
  plugins: [],
};
