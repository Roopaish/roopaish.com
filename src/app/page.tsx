import Link from "next/link"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { favTechs } from "@/config/me"
import { blogs } from "@site/content"
import { LucideIcon } from "lucide-react"

import FeaturedProjects from "./featured-projects"

export default function Home() {
  return (
    <>
      <main className="container mt-10 py-20 md:mt-24">
        <Link href={`/blog/${blogs[0].slug}`}>
          <div className="mx-auto mt-16 max-w-md animate-color-cycle rounded-full px-4 py-[10px] font-serif text-base font-medium leading-none text-black">
            <span className="line-clamp-1">
              New blog &#10140; {blogs[0].title}
            </span>
          </div>
        </Link>

        <h1 className="no-bg mx-auto mt-10 max-w-4xl text-center font-serif text-5xl md:text-7xl">
          {/* Rupesh Budhathoki */}
          {/* <div className="s sm:-mt-2 [&_code]:overflow-hidden [&_code]:text-[5.6vw] sm:[&_code]:text-4xl lg:[&_code]:text-6xl [&_pre]:!bg-transparent">
            <MDXContent code={fullstackDevTextAsCode} />
          </div> */}
          the full-stack developer
        </h1>
        <p className="mx-auto mt-10 max-w-4xl text-center text-lg md:text-xl">
          Hi 👋, I am Rupesh Budhathoki. I can build you a website, or a mobile
          app.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Link href="/blog">
            <Button className="rounded-full" variant={"outline"}>
              Read Blogs
            </Button>
          </Link>
          <Link href="/#projects">
            <Button className="rounded-full">View Projects</Button>
          </Link>
        </div>
      </main>
      <div className="group relative mt-10 flex overflow-x-hidden md:mt-20">
        <h2 className="sr-only">
          Programming Language and Frameworks I love to use
        </h2>
        <div className="flex animate-marquee group-hover:paused">
          {favTechs.map(({ icon, title }) => {
            const Icon = Icons[icon] as LucideIcon
            return (
              <div
                key={title}
                className="mx-2 flex w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-white/[0.2] p-4 md:mx-4"
              >
                <Icon className="h-10 w-10" />
                <p className="mt-4 text-sm font-semibold text-slate-300">
                  {title}
                </p>
              </div>
            )
          })}
        </div>
        <div className="absolute top-0 flex animate-marquee2 group-hover:paused">
          {favTechs.map(({ icon, title }) => {
            const Icon = Icons[icon] as LucideIcon
            return (
              <div
                key={title}
                className="mx-2 flex w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-white/[0.2] p-4 md:mx-4"
              >
                <Icon className="h-10 w-10" />
                <p className="mt-4 text-sm font-semibold text-slate-300">
                  {title}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <FeaturedProjects />
    </>
  )
}
