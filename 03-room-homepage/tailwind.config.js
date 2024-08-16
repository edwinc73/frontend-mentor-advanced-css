/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      darkGray100: "hsl(0, 0%, 63%)",
      darkGray200: "hsl(0, 0%, 27%)",
    },
  },
  plugins: [],
};
