import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-cormorant)"],
        secondary: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};

export default config;