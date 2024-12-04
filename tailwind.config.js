/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Manrope:"Manrope, sans-serif",
      }
    },
  },
  plugins: [
    daisyui,
  ],
}