"use client"

import { useEffect, useState } from "react"
import { getDominantColor } from "@/lib/get-dominant-color"

export default function DominantColor() {
  const [color, setColor] = useState<number[]>([])

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const dominantColor = await getDominantColor()
        setColor(dominantColor)
      } catch (error) {
        console.error("Error fetching dominant color:", error)
      }
    }

    fetchColor()
  }, [])

  return (
    <>
      <div
        className="absolute left-0 right-0 top-0 m-4 mt-2 h-[40%] max-h-[800px] rounded-xl transition-colors duration-1000 sm:h-2/4 md:mt-4 md:h-[60%] lg:h-[70%]"
        style={{
          background:
            color.length === 3
              ? `rgb(${color[0]}, ${color[1]}, ${color[2]})`
              : "transparent",
        }}
      ></div>
    </>
  )
}
