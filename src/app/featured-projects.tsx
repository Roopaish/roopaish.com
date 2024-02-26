"use client"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
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
            <div
              key={title}
              className="w-full cursor-pointer"
              onClick={() => {
                window.open(href)
              }}
            >
              <AspectRatio className="mb-2" ratio={1.33}>
                <figure className="group relative h-full w-full overflow-hidden rounded-[4px] border border-white/[0.2]">
                  <Image
                    src={img}
                    alt={title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#020617] to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium">{description}</p>
                    <p className="ml-1 mt-2 text-sm text-slate-400">
                      {skills.join(", ")}
                    </p>
                  </div>
                </figure>
              </AspectRatio>
              <p className="text-sm font-medium">{title}</p>
            </div>
          )
        )}
      </div>
    </section>
  )
}
