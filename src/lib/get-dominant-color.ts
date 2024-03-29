// @ts-ignore
import ColorThief from "colorthief/dist/color-thief.mjs"

export function getDominantColor(): Promise<number[]> {
  return new Promise((resolve, reject) => {
    const colorThief = new ColorThief()
    const img = document.querySelector("img")

    if (!img) {
      reject("No image found")
      return
    }

    if (img.complete) {
      resolve(colorThief.getColor(img))
    } else {
      img.addEventListener("load", function () {
        resolve(colorThief.getColor(img))
      })
    }
  })
}
