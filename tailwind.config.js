/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grayish-blue": "hsl(237, 18%, 59%)",
        "soft-red": "hsl(345, 95%, 68%)",
        "dark-desat-blue": "hsl(236, 21%, 26%)",
        "very-dark-blue": "hsl(235, 16%, 14%)",
        "very-black-blue": "hsl(234, 17%, 12%)",
        "dark-purple": "hsl(257, 19.44%, 14.12%)",
      },
      fontFamily: {
        "red-hat": ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
