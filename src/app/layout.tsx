import type { Metadata } from "next"

import "./globals.css"
import { sans, serif } from "@/fonts"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Head from "next/head"

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
      <body className="flex min-h-screen flex-col bg-white px-4 pb-16 pt-8 font-sans text-body sm:px-10 md:px-10 lg:pt-14 2xl:px-[165px]">
        <div className="absolute -left-1 top-0 -z-10 hidden h-[730px] w-screen items-center justify-center 2xl:flex">
          <Image
            src={"/images/banner-2xl.svg"}
            className="h-full object-cover object-center w-screen"
            height={730}
            width={2560}
            alt=""
            priority
          />
        </div>
        <div className="absolute left-0 top-0 -z-10 hidden h-[730px] w-screen items-center justify-center xl:flex">
          <Image
            src={"/images/banner-xl.svg"}
            className="h-full object-cover object-center"
            height={730}
            width={2048}
            alt=""
            priority
          />
        </div>
        <div className="absolute left-0 top-0 -z-10 hidden h-[730px] w-screen items-center justify-center lg:flex">
          <Image
            src={"/images/banner-lg.svg"}
            className="h-full object-cover object-center"
            height={730}
            width={1440}
            alt=""
            priority
          />
        </div>
        <div className="absolute left-0 top-0 -z-10 hidden h-[540px] w-screen items-center justify-center md:flex">
          <Image
            src={"/images/banner-md.svg"}
            className="h-full object-cover object-center"
            height={540}
            width={1024}
            alt=""
            priority
          />
        </div>
        <div className="absolute left-0 top-0 -z-10 hidden h-[540] w-screen items-center justify-center sm:flex">
          <Image
            src={"/images/banner-sm.svg"}
            className="h-full object-cover object-center"
            height={540}
            width={768}
            alt=""
            priority
          />
        </div>
        <div className="absolute left-0 top-0 -z-10 flex h-[481px] w-screen items-center justify-center sm:hidden">
          <Image
            src={"/images/banner-mobile.svg"}
            className="h-full object-cover object-center"
            height={481}
            width={640}
            alt=""
            priority
          />
        </div>
        <div className="absolute left-0 top-[392px] -z-20 h-[1070.71px] w-screen bg-off-white sm:top-[403px] sm:h-[920.73px] md:top-[504px] md:h-[930px]" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
