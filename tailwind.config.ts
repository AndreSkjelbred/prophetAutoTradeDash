const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const config = {
  mode: "jit",
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        std: "100px",
      },
      borderWidth: {
        6: "6px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        teal: "#00818d",
        primary: "#2C405A",
        "custom-green": "rgb(121,251,146)",
        "project-primary": "rgb(182, 172, 247)",
        "project-primary-dark": "#996BFF",
        "project-primary-darker": "rgb(54, 53, 77)",
        "project-primary-darkest": "rgb(14, 17, 26)",
        "custom-gray": "#606c8b",
        "light-custom-gray": "#424242",
        "dark-custom-gray": "#333333",
        bubblemaps: "rgba(222,33,153,0.95)",
        gray: {
          400: "rgb(188, 188, 188)",
          700: "#464646",
          800: "rgb(15, 15, 15)",
          900: "rgb(0, 1, 5)",
        },
      },
      fontFamily: { sans: ['"Questrial"', ...defaultTheme.fontFamily.sans] },
      fontSize: {
        "2xs": "10px",
        xl: "20px",
        "2xl": "28px",
      },
      spacing: {
        0.5: "2px",
        2.5: "10px",
        3: "12px",
        3.25: "13px",
        3.5: "14px",
        3.75: "15px",
        4: "16px",
        4.75: "19px",
        5: "20px",
        6: "24px",
        6.5: "26px",
        7.5: "30px",
        10: "40px",
        17: "68px",
        18: "72px",
        19: "76px",
        25: "100px",
        30: "120px",
        54: "218px",
        59: "236px",
        62: "248px",
        66: "264px",
        87: "348px",
        88: "352px",
        115: "460px",
        122: "488px",
        130: "520px",
        center: "25vh",
      },
      width: {
        4.5: "18px",
        6.5: "26px",
        19: "76px",
        38: "152px",
        40: "160px",
        80: "332px",
        86: "344px",
        88: "352px",
        92: "368px",
        115: "460px",
        134: "548px",
        188: "750px",
        "2xl": "650px",
      },
      height: {
        0.75: "3px",
        4.5: "18px",
        6.5: "26px",
        8.5: "34px",
        10.5: "42px",
        13.25: "53px",
        33: "132px",
      },
      maxWidth: {
        xs: "340px",
        "2xl": "650px",
        "6xl": "1254px",
        86: "344px",
        87: "348px",
        92: "368px",
        115: "460px",
        122: "488px",
        130: "520px",
        134: "548px",
        360: "1440px",
      },
      minWidth: {
        34: "136px",
        36: "144px",
        40: "160px",
        48: "192px",
        52: "208px",
        56: "224px",
      },
      scale: {
        200: "2",
        15: "0.15",
        10: "0.1",
      },
      opacity: {
        15: "15%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
export default config;