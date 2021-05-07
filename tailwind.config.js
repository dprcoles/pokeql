const purgeEnabled = process.env.NODE_ENV === 'production'

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
