module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './remote/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
