/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "10/100": "10%",
        "82-screen": "82vh",
        "90-screen": "90vh",
        "80-screen": "80vh",
        "70-screen": "70vh",
        "60-screen": "60vh",
        "50-screen": "50vh",
        "40-screen": "40vh",
        "30-screen": "30vh",
        "20-screen": "20vh",
        "10-screen": "10vh",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        Sarabun: ['Sarabun', "sans-serif"]
      },
      colors: {
 
        mainColor : "#9dddcc",
        darkMain : "#1cb99a",
        blue2 : "#2f4169",
        orange2:"#fe9902",
        sky:"#d8e8f5",
        lightGray:"#f7f7f7",
        sorfRed:"#e4606d",
        sorfGreen:'#cff4d3'

      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
}

