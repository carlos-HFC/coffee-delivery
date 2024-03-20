/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          dark: "#4b2995",
          DEFAULT: "#8047f8",
          light: "#ebe5f9",
        },
        yellow: {
          dark: "#c47f17",
          DEFAULT: "#dbac2c",
          light: "#f1e9c9",
        },
        base: {
          title: "#272221",
          subtitle: "#403937",
          text: "#574f4d",
          label: "#8d8686",
          hover: "#d7d5d5",
          button: "#e6e5e5",
          input: "#ededed",
          card: "#f3f2f2",
          background: "#fafafa",
        },
      },
      fontFamily: {
        baloo: ["'Baloo 2'"],
        roboto: ["Roboto"],
      },
      backgroundImage: {
        banner: "url(/banner.png)",
      },
    },
  },
  plugins: [],
}
