/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        lightgray: "#d4d4d8",
        gray: {
          "100": "#1f2937",
          "200": "#27272a",
          "300": "#18181b",
          "400": "#222831",
        },
        whitesmoke: {
          "100": "#f3f4f6",
          "200": "#eee",
        },
        darkorchid: "#a855f7",
        "orangey-pink": "#ff5e5b",
        aquamarine: "#a7f3d0",
        seagreen: "#059669",
        darkslategray: {
          "100": "#393e46",
          "200": "#064e3b",
        },
        lightseagreen: "#00adb5",
        darkcyan: "#008a91",
        dimgray: "#566173",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
        inter: "Inter",
        "space-grotesk": "'Space Grotesk'",
      },
      borderRadius: {
        "13xl": "32px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
      "32xl": "51px",
      "3xl": "22px",
      "77xl": "96px",
      "48xl": "67px",
      "19xl": "38px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
