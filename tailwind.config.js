/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      padding: ['hover'],
    }
  },
  variants: {
    extend: {
      maxHeight: ['focus'],
    }
  },
}

