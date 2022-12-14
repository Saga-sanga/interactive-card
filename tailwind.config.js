/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xxs': '.625rem'
    },
    extend: {
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
        "violet-gradient": "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
        "red-error": "hsl(0, 100%, 66%)"
      }
    },
    maxWidth: {
        '1440': '1440px'
      }
  },
  plugins: [],
}
