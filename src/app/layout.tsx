import type { Metadata } from "next";

import "./globals.css";
import { sans } from "@/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frontend Mentor | Workit Landing Page",
  description: "Data tailored to your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.className} flex min-h-screen flex-col bg-white px-4 md:pt-14 pt-8 sm:px-10 md:px-[160px]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
