import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
};
export default config;
