module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {},
    // colors: {
    //   'sand': '#EEECEC'
    // }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  darkMode: 'class'
};
