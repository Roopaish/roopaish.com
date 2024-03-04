import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { blogs } from "@site/content"

import { AspectRatio } from "./ui/aspect-ratio"

export default function BlogCard({
  expand = false,
  title,
  date,
  excerpt,
  slug,
  cover,
}: (typeof blogs)[0] & { expand?: boolean }) {
  return (
    <Link href={`/blog/${slug}`} className="flex gap-8 py-7">
      {cover && (
        <div className="w-full">
          <AspectRatio ratio={1} className="overflow-hidden rounded-sm">
            <Image
              src={cover}
              alt={title}
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
      )}
      <div>
        <p className={cn("font-medium uppercase text-slate-400")}>
          Feb 26, 2024
        </p>
        <h2
          className={cn(
            "mb-2 mt-1 font-medium",
            expand ? "text-4xl" : "text-2xl"
          )}
        >
          {title}
        </h2>
        <p className={cn("text-xl", expand ? "text-white" : "text-slate-300")}>
          {excerpt}
        </p>
      </div>
    </Link>
  )
}
