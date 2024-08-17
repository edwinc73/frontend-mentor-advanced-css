/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray-100": "#A1A1A1",
        "dark-gray-00": "#454545",
      },
    },
  },
  plugins: [],
};
