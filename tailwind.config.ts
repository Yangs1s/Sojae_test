import type { Config } from "tailwindcss";
import colors from "./app/css/colors";

const px_100 = Object.fromEntries(
  Array.from({ length: 100 }, (_, i) => [i, `${i}px`])
);

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      borderRadius: px_100,
      fontSize: {
        h1: "32px",
        h2: "28px",
        h3: "24px",
        title1: "20px",
        title2: "18px",
        title3: "16px",
        body1: "15px",
        body2: "14px",
        label1: "13px",
        label2: "12px",
      },
    },
    screens: {
      web: "1280px",
      tablet: "512px",
      mobile: "320px",
    },
  },
  plugins: [],
} satisfies Config;
