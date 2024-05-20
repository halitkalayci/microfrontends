module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx',],
  theme: {
    extend: {},
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: 'css'
      }
    ]
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
