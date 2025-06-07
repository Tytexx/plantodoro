/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amaranth: ['"Amaranth"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        jersey: ['"jersey 15"', 'cursive'],
      },
    },
  },
  plugins: [],
};
