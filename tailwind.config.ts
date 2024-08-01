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
        'main-image': "url('/background_2.png')",
        "detail-image": "url('/background_1.png')",
        "character-background-image": "url('/background_3.png')"
      },
      height: {
        '300': '300px',
      },
      colors: {
        "maple-green": "#00B507",
        "maple-dark": "#292525",
        "maple-gray": "#D9D9D9",
        "maple-darkblue": "#2A303E",
        "maple-lightblue": "#6587E0",
      }
    },
  },
  plugins: [],
};
export default config;
