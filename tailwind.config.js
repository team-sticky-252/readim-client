import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#FBFBFB",
        gray: "#AFADAD",
        "medium-gray": "#E5E5E5",
      },
      fontFamily: {
        sans: ['"Pretendard"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        default: "url('./assets/background.png')",
      },
      gridTemplateColumns: {
        10: "repeat(4, minmax(0, 10rem))",
      },
    },
  },
  plugins: [],
};
