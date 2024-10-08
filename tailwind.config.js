/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        '1200': '12%',
      },
      fontFamily: {
        chakraPetch:["Chakra Petch", "sans-serif"],
        openSans:["Open Sans", "sans-serif"],
        lato:["Lato", "sans-serif"],
        inter:["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}

