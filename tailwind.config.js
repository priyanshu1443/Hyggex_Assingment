

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Lato: ['Lato', 'sans-serif']
      },
      backgroundImage: {
        Gradient1: "linear-gradient(223deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)"
      }
    },
  },
  plugins: [],
}

