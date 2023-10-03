/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#79AC78",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#B0D9B1",
        headingColor: "#181A1E",
        textColor: "#4E545F",
      },

      boxShadow: {
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
}
