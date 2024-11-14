/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "ui-sans-serif", "system-ui"],
      },
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        gray: {
          500: "hsl(0, 0%, 42%)",
          950: "hsl(0, 0%, 7%)",
        },
      },
    },
  },
  plugins: [],
};
