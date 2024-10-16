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
        'bg-primary-dark': "#303030",
        'bg-primary-light': "#eaeaea",
        'bg-secondary-dark': "#202020",
        'bg-secondary-light': "#bfbfbf",
        'component-primary-dark': "#df2144",
        'component-primary-light': "#1b81d5",
        'component-secondary-dark': "#a81d37",
        'component-secondary-light': "#155d99",
        'text-primary-dark': "#eaeaea",
        'text-primary-light': "#303030",
        'text-secondary-dark': "#bfbfbf",
        'text-secondary-light': "#202020",
      },
    },
  },
  plugins: [],
};
export default config;
