/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "colors-neutral-white": "#fff",
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
        dimgray: {
          "100": "#6b6b6b",
          "200": "#566173",
        },
        gainsboro: "#e4e4e4",
        "divider-light-1px-60": "rgba(228, 228, 228, 0.6)",
        "colors-neutral-gray-3": "#999",
        "colors-neutral-black": "#151522",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
        inter: "Inter",
        "space-grotesk": "'Space Grotesk'",
        abeezee: "ABeeZee",
      },
      borderRadius: {
        "13xl": "32px",
        "8xs": "5px",
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
      "2xs": "11px",
      base: "16px",
      smi: "13px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
