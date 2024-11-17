/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      animation: {
        "slide-left-to-right": "slideLTR 1s ease-in-out forwards",
      },
      keyframes: {
        slideLTR: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(30%)" },
        },
      },
    },
  },

  plugins: [],
};
