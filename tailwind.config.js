/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: {
            opacity: 0,
            transform: "translateY(-3rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        mealsAppear: {
          from: {
            opacity: 0,
            transform: "translateY(3rem)",
          },

          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        bump: {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9)",
          },
          "30%": {
            transform: "scale(1.1)",
          },
          "50% ": {
            transform: "scale(1.15)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        bump: "bump 300ms ease-out ",
        mealsAppear: "mealsAppear 1s ease-out forwards",
        slideDown: "slideDown 300ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
