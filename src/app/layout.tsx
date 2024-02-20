import type { Metadata } from "next"
import { Inter, Sofadi_One } from "next/font/google"

import "./globals.css"

import Header from "./header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const sofadiOne = Sofadi_One({
  variable: "--font-sofadi",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Roopaish",
  description: "Web developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sofadiOne.className}, ${inter.className}, font-sans`}>
        <Header />
        <div className="mt-24">{children}</div>
      </body>
    </html>
  )
}
