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
      "heading-4xl": ["80px", "80px"],
      "heading-3xl": ["70px", "70px"],
      "heading-2xl": ["60px", "60px"],
      "heading-xl": ["56px", "64px"],
      "heading-lg": ["50px", "50px"],
      "heading-md": ["48px", "56px"],
      "heading-sm-tall": ["32px", "48px"],
      "heading-sm": ["32px", "40px"],
      "heading-xs": ["28px", "36px"],
      "list-number": ["24px", "40px"],
      "list-number-sm": ["20px", "36px"],
      button: ["18px", { lineHeight: "32px", letterSpacing: "-0.18px" }],
      "button-sm": ["16px", { lineHeight: "32px", letterSpacing: "-0.18px" }],
      body: ["18px", "32px"],
      "body-sm": ["16px", "28px"],
    },
    extend: {
      screens: {
        "2xl": "2048px",
        xl: "1439px",
        lg: "1025px",
        md: "769px",
        sm: "701px",
        xs: "425px",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
    },
  },
  plugins: [],
}
export default config
