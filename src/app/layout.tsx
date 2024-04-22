import Image from "next/image"
import type { Metadata } from "next"

import Banner from "@/components/Banner"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { sans, serif } from "@/fonts"

import "./globals.css"

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
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} overflow-x-hidden`}
    >
      <body className="relative flex min-h-screen flex-col  overflow-x-hidden bg-white px-4 pb-16 pt-8 font-sans text-body sm:px-10 md:pt-20 xl:px-[165px]">
        <Image
          src={"/images/bg-pattern-1.svg"}
          alt=""
          height={317}
          width={341}
          className="absolute -left-[257px] top-[80px] hidden sm:-left-[227px] sm:flex md:top-[160px] lg:-left-[138px]"
        />
        <Image
          src={"/images/bg-pattern-2.svg"}
          alt=""
          height={174}
          width={181}
          className="absolute top-[254px] hidden sm:-right-[93px] sm:flex md:top-[314px] lg:-right-[48px]"
        />
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
