/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#233155',
        'gold':'#ca8f26',
        'brown':'rgb(211 211 211)',
        'secondary': '#dcbf34'
      },
      backgroundImage:{
        'gradient-radial': 'linear-gradient(#233155 0%, #233155ad 43%, #23315517 90%, #ffffff00 100%);',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
