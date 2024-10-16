import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': `
          radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
          radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
          radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
          radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
          radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
          radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
          radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)
        `,
      },
      colors: {
        'primary-dark': "#303030",
        'primary-light': "#eaeaea",
        'secondary-dark': "#202020",
        'secondary-light': "#bfbfbf",
        'primary-red': "#df2144",
        'primary-blue': "#1b81d5",
        'secondary-red': "#a81d37",
        'secondary-blue': "#155d99",
        
      },
    },
  },
  plugins: [],
};
export default config;
