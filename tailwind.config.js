/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
