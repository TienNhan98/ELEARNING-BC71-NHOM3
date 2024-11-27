/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
      keyframes: {
        slideInOut: {
          "0%": { width: "0%" },
          "50%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        "slide-in-out": "slideInOut 5s ease-in-out forwards infinite", // Thời gian tùy chỉnh
      },
    },
  },

  plugins: [],
};
