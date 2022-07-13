/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}', // 用到tailwind的地方
  ],
  theme: {
    extend: {},
    // width: {
    //   40: '40px',
    //   50: '50px',
    //   60: '60px',
    //   100: '100px',
    // },
    maxWidth: {
      300: '300px',
    },
    boxShadow: {
      box: '0 1px 4px rgb(0 21 41 / 8%)',
    },
  },
  plugins: [],
};
