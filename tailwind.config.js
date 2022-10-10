/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'th':'280px',
      'xs': '360px',
      'bx':'414px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        "dark-blue": "#303B4C",
        "light-blue": "#B9C7CC",
        "prime-g": "#748F99",
      },
      fontFamily: {
        epi: "'Epilogue', sans-serif"
      },
    },
  },
  plugins: [],
}
