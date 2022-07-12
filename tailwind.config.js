/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}', // 用到tailwind的地方
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
