import type { Metadata } from "next"

import "./globals.css"
import { sans, serif } from "@/fonts"
import Banner from "@/components/Banner"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Frontend Mentor | Workit Landing Page",
  description: "Data tailored to your needs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col bg-white px-4 pb-16 pt-8 font-sans text-body sm:px-10 md:px-10 lg:pt-14 xl:px-[165px]">
        <Banner />
        {/* <div className="absolute left-0 top-[392px] -z-20 h-[1070.71px] w-screen bg-off-white sm:top-[403px] sm:h-[920.73px] md:top-[504px] md:h-[930px]" /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
