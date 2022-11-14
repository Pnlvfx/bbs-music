/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bbaby: {
          default: '#121212',
          brighter: '#181818',
          text: '#D4D4D4',
          text_darker: '#606163',
          blue: '#24A0ED',
          border: '#323334'
        },
      },
    },
  },
  plugins: [],
};
