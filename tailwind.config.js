/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#ECEFF3",
        paperDim: "#DFE3E9",
        card: "#FFFFFF",
        ink: "#171B23",
        inkSoft: "#4B5566",
        inkFaint: "#8993A4",
        line: "#C7CDD6",
        lineStrong: "#AEB6C2",
        anthropic: "#B5502C",
        anthropicDim: "#F2E2DA",
        moonshot: "#1D6F63",
        moonshotDim: "#DCEAE7",
        gold: "#A8832A",
        goldDim: "#F1E7D2",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
