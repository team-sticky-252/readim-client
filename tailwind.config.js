import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            code: {
              "code::before": {
                content: '""',
              },
              "code::after": {
                content: '""',
              },
            },
          },
        },
      },
      colors: {
        "light-gray": "#FBFBFB",
        gray: "#AFADAD",
        "medium-gray": "#E5E5E5",
        "pastel-purple": "#D2C2F4",
        "blush-pink": "#FFA2CD",
        "sunset-orange": "#FFBB9A",
      },
      fontFamily: {
        sans: ['"Pretendard"', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        10: "repeat(4, minmax(0, 10rem))",
        sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
      },
      height: {
        50: "12.5rem",
        140: "35rem",
      },
      maxHeight: {
        "screen-margin-24": "calc(100vh - 8rem)",
      },
      width: {
        48: "12rem",
        90: "22.5rem",
        118: "29.5rem",
        136: "34rem",
        200: "50rem",
        216: "54rem",
      },
      minWidth: {
        160: "40rem",
      },
      zIndex: {
        1: 1,
      },
      scale: {
        115: "1.15",
      },
      screens: {
        "max-mobile": { max: "430px" },
      },
      keyframes: {
        "slide-top": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-out-bottom": {
          "0%": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(50px)",
            opacity: 0,
          },
        },
        "scale-in-center": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-out-left": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-1000px)",
            opacity: "0",
          },
        },
        "bg-pan-left": {
          "0%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      animation: {
        "slide-top":
          "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "fade-out": "fade-out 0.3s ease-out both",
        "fade-out-bottom": "fade-out-bottom 0.3s linear both",
        "scale-in-center":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        "slide-in-left":
          "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-out-left":
          "slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "bg-pan-left": "bg-pan-left 8s both",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function customUtilities({ addUtilities }) {
      addUtilities(
        {
          ".code-block": {
            "background-color": "#252526",
          },
          ".code-inline": {
            margin: "0 0.2rem",
            padding: "0.2rem 0.5rem",
            "font-size": "0.8rem",
            "line-height": "1.25rem",
            "border-radius": "0.3rem",
            content: "none",
            color: "#FF6347",
            "background-color": "#E5E5E5",
          },
          ".code-doc-type": {
            color: "#b587d5",
          },
          ".code-tag-name": {
            color: "#e36d73",
          },
          ".code-html-symbol": {
            color: "#86d9fb",
          },
          ".code-js-symbol": {
            color: "#d0b613",
          },
          ".code-js-func": {
            color: "#7397df",
          },
          ".code-js-string": {
            color: "#b1d282",
          },
        },
        ["responsive", "hover"],
      );
    }),
  ],
};
