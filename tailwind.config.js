/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        "madimi-one": ["Madimi One", "cursive"],
      },
      colors: {
        "gray-custom": "#545b5d",
      },
    },
  },
  plugins: [],
};
