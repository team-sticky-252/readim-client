/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#FBFBFB",
        gray: "#AFADAD",
      },
      fontFamily: {
        pre: ["Pretendard"],
      },
    },
  },
  plugins: [],
};
