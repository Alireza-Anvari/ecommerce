/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =withMT( {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkColor: '#1c1f1f',
        whiteColor:"#f3f3f3",
        primaryColor:"#03c5ff",
        // colors: {
        //   darkColor: '#1c1f1f',
        //   primaryColor:"#03c5ff",
        //   whiteColor:"#white",
        // },
      },
    },
  },
  plugins: [],
});
