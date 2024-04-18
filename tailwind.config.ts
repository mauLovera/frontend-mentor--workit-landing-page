import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "hsl(273, 85%, 13%)",
      accent: "hsl(150, 100%, 63%)",
      neutral: "hsl(271, 12%, 34%)",
      "off-white": "hsl(274, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      "heading-lg": ["80px", "80px"],
      "heading-md": ["56px", "64px"],
      "heading-sm": ["32px", "40px"],
      body: ["18px", "32px"],
    },
    backgroundImage: {
      "banner-dark-mobile": "url('/images/banner-dark-mobile.svg')",
      "banner-dark-tablet": "url('/images/banner-dark-tablet.svg')",
      "banner-dark-desktop": "url('/images/banner-dark-desktop.svg')",
      "banner-light-mobile": "url('/images/banner-light-mobile.svg')",
      "banner-light-tablet": "url('/images/banner-light-tablet.svg')",
      "banner-light-desktop": "url('/images/banner-light-desktop.svg')",
    },
  },
  plugins: [],
}
export default config
