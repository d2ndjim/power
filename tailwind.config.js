/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "small-circle": 'url("/Ellipse 13.png")',
        "big-circle": 'url("/Ellipse 12g.png")',
        "map-image": 'url("/frame-18.png")',
        "big-map": 'url("/frame-17.png")',
        "at-home": 'url("/at-home.png")',
        "on-the-go": 'url("/on-the-go.png")',
      },
      colors: {
        "custom-blue": "#1570ef",
        default: "#fafafa",
      },
      Icons: {
        "open-icon": 'url("/open-icon.png")',
        "close-icon": 'url("/close-icon.png)',
      },
    },
  },
  plugins: [],
});
