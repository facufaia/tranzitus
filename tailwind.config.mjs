import("tailwindcss");

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#f4f1ff",
          100: "#ebe6ff",
          200: "#d9d0ff",
          300: "#bdabff",
          400: "#9e7bff",
          500: "#8146ff",
          600: "#7321ff",
          700: "#6610f2",
          800: "#540ccb",
          900: "#470ca6",
          950: "#290471",
        },
        secondary: {
          50: "#ebfef6",
          100: "#cefde8",
          200: "#a2f8d6",
          300: "#66efc2",
          400: "#20c997",
          500: "#05c492",
          600: "#009f77",
          700: "#007f63",
          800: "#00654f",
          900: "#015343",
          950: "#002f26",
        },
        tertiary: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdba9",
          300: "#ffc072",
          400: "#fe9b39",
          500: "#fd7e14",
          600: "#ee6108",
          700: "#c54909",
          800: "#9c3910",
          900: "#7e3110",
          950: "#441606",
        },
        darkbg: {
          700: "#0f172a",
          800: "#0E1324",
          900: "#0C111F",
        },
      },
    },
  },
  plugins: [],
};
