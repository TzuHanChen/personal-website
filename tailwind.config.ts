import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '144': '36rem',
        '192': '48rem',
        '240': '60rem',
        '270': '67.5rem'
      }
    },
  },
  plugins: [],
};
export default config;
