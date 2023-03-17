/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
