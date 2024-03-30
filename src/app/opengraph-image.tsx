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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://avatars.githubusercontent.com/u/54392112?v=4"
          width={100}
          height={100}
          alt="Avatar"
        />
        <div tw="fonhttps://nextjs.org/docs/messages/no-img-elementt-serif text-5xl">
          @roopaish
        </div>
        <div tw="font-serif mx-auto max-w-4xl text-center mt-10 text-7xl">
          the full-stack developer
        </div>
        <div tw="mx-auto text-center text-2xl max-w-5xl mx-auto">
          Hi 👋, I am Rupesh Budhathoki. I can build you a website, or a mobile
          app.
        </div>
      </div>
    ),
    {
      ...size,
      emoji: "fluent",
    }
  )
}
