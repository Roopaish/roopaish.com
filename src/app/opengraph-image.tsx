/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "@Roopaish"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="flex flex-col items-center justify-center w-full h-full bg-black text-white">
        <div tw="font-serif">@Roopaish</div>
        <div tw="font-serif mx-auto max-w-4xl text-center mt-20 text-7xl">
          Fullstack developer with 2.5+ of experience
        </div>
        <div tw="mx-auto mt-10 text-center text-xl max-w-5xl mx-auto">
          I love developing web and mobile apps using TypeScript, React, Node
          and things built around them. And I love exploring, both programming
          stuffs and nature.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
