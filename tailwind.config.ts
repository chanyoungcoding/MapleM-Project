import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('/background_2.png')"
      },
      height: {
        '300': '300px',
      },
      colors: {
        "maple-green": "#00B507",
        "maple-dark": "#292525",
        "maple-gray": "#D9D9D9",
      }
    },
  },
  plugins: [],
};
export default config;
