/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          medium: "#252525",
          normal: "#4E4D49",
          lightShade:'#818589',
          dark: "#FFC000",
          light:"#1B1B1B"
        },
        primaryYellow: "#FFC000",
      },
      // backgroundImage:{
      //   'landing-image': "url('/assets/images/landing.png')",
      // }
    },
  },
  plugins: [],
};
