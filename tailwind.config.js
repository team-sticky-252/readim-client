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
        primary: "#54CABC",
      },
      fontFamily: {
        sans: ['"Pretendard"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        default: "url('./assets/background.png')",
      },
      gridTemplateColumns: {
        10: "repeat(4, minmax(0, 10rem))",
        sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
      },
      maxHeight: {
        "screen-margin-24": "calc(100vh - 8rem)",
      },
      width: {
        88: "22rem",
        140: "35rem",
        200: "50rem",
      },
      minWidth: {
        160: "40rem",
      },
      keyframes: {
        "slide-top": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "slide-top":
          "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
