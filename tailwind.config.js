/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kokoro': ['Kokoro', 'sans-serif'],
        'kumar': ['Kumar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

