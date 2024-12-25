import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F2F0EF",
        secondary: "#245F73",
        brown: "#733E24",
        font: "#BBBDBC",
      },
    },
  },
  plugins: [],
} satisfies Config;
