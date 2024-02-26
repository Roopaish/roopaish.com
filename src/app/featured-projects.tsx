"use client"

import Image from "next/image"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { featuredProjects } from "@/config/me"

export default function FeaturedProjects() {
  return (
    <section className="container mt-32" id="projects">
      <h2 className="mb-12 text-center text-4xl md:text-5xl">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featuredProjects.map(
          ({ title, description, href, img, skills, github }) => (
            <div key={title} className="w-full">
              <AspectRatio className="mb-2" ratio={1.33}>
                <figure
                  onClick={() => {
                    window.open(href)
                  }}
                  className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[4px] border border-white/[0.2]"
                >
                  <Image
                    src={img}
                    alt={title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#020617] to-transparent p-4 opacity-100 transition-opacity group-hover:opacity-0">
                    <p className="text-sm font-medium">{description}</p>
                    <p className="ml-1 mt-2 text-sm text-slate-400">
                      {skills.join(", ")}
                    </p>
                  </div>
                </figure>
              </AspectRatio>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{title}</p>
                {github && (
                  <Link href={github}>
                    <Icons.Github className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          )
        )}
      </div>
      <div className="text-right">
        <Button
          className="group mt-8 rounded-full"
          variant={"outline"}
          onClick={() => {
            window.open("https://github.com/Roopaish")
          }}
        >
          Find more on github{" "}
          <Icons.MoveRight className="ml-2 h-6 pr-2 transition-all group-hover:pl-2 group-hover:pr-0" />
        </Button>
      </div>
    </section>
  )
}
