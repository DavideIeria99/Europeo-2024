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
        "euroPrimary": "#143CDA",
        "euroSecondary": "#213690",
        "euroTerziary": "#000D40"
      }
    },
  },
  plugins: [],
};
export default config;
