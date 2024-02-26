import Link from "next/link"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { favTechs } from "@/config/me"
import { getYearsOfExperience } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

import FeaturedProjects from "./featured-projects"

export default function Home() {
  return (
    <>
      <main className="container mt-24 py-20">
        <h1 className="mx-auto mt-10 max-w-4xl text-center font-serif text-5xl md:mt-20 md:text-7xl">
          Fullstack developer with {getYearsOfExperience()} of experience
        </h1>
        <p className="mx-auto mt-10 text-center text-lg md:text-xl">
          I love developing web and mobile apps using TypeScript, React, Node
          and things built around them. <br />
          And I love exploring, both programming stuffs and nature 🌱.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Link href="/blogs">
            <Button className="rounded-full" variant={"outline"}>
              Read Blogs
            </Button>
          </Link>
          <Link href="/#projects">
            <Button className="rounded-full">View Projects</Button>
          </Link>
        </div>
      </main>
      <div className="relative mt-20 flex overflow-x-hidden">
        <h2 className="sr-only">
          Programming Language and Frameworks I love to use
        </h2>
        <div className="flex animate-marquee">
          {favTechs.map(({ icon, title }) => {
            const Icon = Icons[icon] as LucideIcon
            return (
              <div
                key={title}
                className="mx-4 flex w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-white/[0.2] p-4"
              >
                <Icon className="h-10 w-10" />
                <p className="mt-4 text-sm font-semibold text-slate-300">
                  {title}
                </p>
              </div>
            )
          })}
        </div>
        <div className="absolute top-0 flex animate-marquee2">
          {favTechs.map(({ icon, title }) => {
            const Icon = Icons[icon] as LucideIcon
            return (
              <div
                key={title}
                className="mx-4 flex w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-white/[0.2] p-4"
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
