/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          medium: "#252525",
          normal: "#4E4D49",
          lightShade: "#818589",
          dark: "#FFC000",
          light: "#1B1B1B",
        },
        primaryYellow: "#FFC000",
      },
      // backgroundImage:{
      //   'landing-image': "url('/assets/images/landing.png')",
      // }
    },
    keyframes: {
      reveal: {
        "0%": { transform: "translateY(100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
    },
    animation: {
      reveal: "reveal 1s ease-out forwards",
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-animated"),
  ],
};
