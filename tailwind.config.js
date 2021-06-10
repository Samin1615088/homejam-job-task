module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#0259EB",
          pink: "#DD4CAC",
          yellow: {
            light: "#E5C558",
            hard: "#E5AF56"
          },
          ebony_black: "#0A0B1A",
        },
        secondary: {
          coffee: "#682F26",
        }
      },
      fontFamily: {
        libre: ['Libre Baskerville', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        quattrocento: ['Quattrocento', 'serif'],
        rubik: ['Rubik', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
