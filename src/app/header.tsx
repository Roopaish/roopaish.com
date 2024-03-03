"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { headerLinks } from "@/config/site"
import { cn } from "@/lib/utils"

export default function Header() {
  const ref = useRef<HTMLElement | null>(null)
  const [showHeader, setShowHeader] = useState(true)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < prevScrollY.current) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }

      prevScrollY.current = currentScrollY
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      ref={ref}
      className={cn(
        showHeader ? "top-10" : "-top-20",
        "fixed inset-x-0 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border transition-all delay-150 duration-500",
        "border-white/[0.2] bg-black py-2 pl-8 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      )}
    >
      {headerLinks.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative flex items-center space-x-1 text-neutral-50 hover:text-neutral-300"
          )}
        >
          <span className="block">{navItem.icon}</span>
          <span className="text-sm">{navItem.name}</span>
        </Link>
      ))}
      <Link
        href="/contact"
        className="group relative rounded-full border border-neutral-200 border-white/[0.2] px-4 py-2 text-sm font-medium text-white"
      >
        <span>Contact</span>
        <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all group-hover:w-full" />
      </Link>
    </header>
  )
}
