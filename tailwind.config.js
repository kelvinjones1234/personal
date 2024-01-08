/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/src/assets/images/1.jpg')",
      },
      fontFamily: {
        'krona': ['"Krona One"'],
        'poppins': ['"Poppins"'],
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        one: "#f0825d",
        two: "#f7f7f7",
        three: "#95A1F9",
        four: "#907163",
        five: "#379683",
        six: "#f75b23"
      },
    },
  },
  plugins: [],
};
