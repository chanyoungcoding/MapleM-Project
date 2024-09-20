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
        "character-background-image": "url('/background_3.png')",
        "ability-background-image": "url('/background_5.png')"
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
        "maple-purple": "#6D62A1",
        "maple-sky": "#5393CA"
      },
      boxShadow: {
        'custom': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
  },
  plugins: [],
};
export default config;
