import { Manrope } from "next/font/google"
import localFont from "next/font/local"

export const serif = localFont({
  src: "./Fraunces_144pt-SemiBold.ttf",
  display: "swap",
  variable: "--font-serif",
})

export const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
})
