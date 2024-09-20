/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        cartoon: 'url("/icons/cursor-pointer.svg") 10 5, pointer',
      },
      fontFamily: {
        montserrat: ['"Montserrat Alternates"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lidren: ["Lidren", "sans-serif"],
        sangha: ["SanghaKali-Regular", "sans-serif"],
      },
      textShadow: {
        neon: "0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF",
      },
      keyframes: {
        pulsateFwd: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        scaleUpDown: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
        neon: {
          "0%, 78%": { color: "inherit", textShadow: "inherit" },
          "79%": { color: "#0b3960" },
          "80%": { textShadow: "none" },
          "81%": { color: "inherit", textShadow: "inherit" },
          "82%": { color: "#0b3960", textShadow: "none" },
          "83%": { color: "inherit", textShadow: "inherit" },
          "92%": { color: "#0b3960", textShadow: "none" },
          "92.5%": { color: "inherit", textShadow: "inherit" },
        },
      },
      animation: {
        scaleCycle: "scaleUpDown 60s infinite ease-in-out",
        pulsateFwd: "pulsateFwd 1s ease-in-out infinite both",
        neon: "neon 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
