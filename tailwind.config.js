/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '300px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {},
  },
  variants: {
    backgroundColor: ['active', 'responsive', 'focus']
  },
  plugins: [],
}

