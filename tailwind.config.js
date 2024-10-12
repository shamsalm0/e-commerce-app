/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./resources/**/*.blade.php",
    './resources/js/**/*.jsx', // Include your React components
    './resources/js/**/*.js',   // Include your JavaScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}