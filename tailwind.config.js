/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Manrope: "Manrope, sans-serif",
      },
      colors: {
        Pink: "#ff6392",
      }
    },
   
  },
  plugins: [daisyui, flowbite.plugin()],
};
