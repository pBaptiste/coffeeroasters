import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkCyan: "#0E8784",
        darkGreyBlue: "#333D4B",
        paleOrange: "#FDD6BA",
        lightCream: "#FEFCF7",
        grey: "#83888F",
      },
      backgroundImage: {
        customGradient:
          "linear-gradient(180deg, rgba(254, 252, 247, 0.50) 0%, #FEFCF7 55.94%)",
      },
    },
  },
  plugins: [],
};
export default config;
