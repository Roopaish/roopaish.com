import { type Metadata } from "next"
import { Source_Serif_4 } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

import Footer from "./footer"
import Header from "./header"

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
})

const monaSans = localFont({
  src: [
    {
      path: "./fonts/MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MonaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/MonaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/MonaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/MonaSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
})

export const metadata: Metadata = {
  title: "Roopaish",
  description: "Full-stack developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${sourceSerif.variable} scroll-pt-28`}
    >
      <body className={`font-sans`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>
        <Header />
        <div className="pb-24">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
