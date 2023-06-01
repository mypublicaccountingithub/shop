/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          main : "#212121",
          light : "#454545"
        },
        secondary : {
          light : "#fff",
          dark : "#8e8e8e"
        }
      }
    },
  },
  plugins: [],
  corePlugins : {
    preflight : false
  },
  important : true
}

