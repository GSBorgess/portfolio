import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#087CFA",
        "secondary-color": "#006FF5",
        "bg-main": "#0B0C0C",
        "bg-secondary": "#101111",
        "text-main": "#F5F5F5",
        "text-secondary": "#B5B5B5",
        border: "#292B2D",
        chip: "#161718",
      },
      fontFamily: {
        title: ["Antonio", "ui-sans-serif", "system-ui", "sans-serif"],
        text: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
