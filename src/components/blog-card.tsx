import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { blogs } from "@site/content"

import { AspectRatio } from "./ui/aspect-ratio"

export default function BlogCard({
  expand = false,
  title,
  date,
  slug,
  cover,
  description,
  excerpt,
}: (typeof blogs)[0] & { expand?: boolean }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="relative block min-h-56 w-full max-w-4xl gap-8 border-b border-b-slate-700 py-8"
    >
      <header>
        <p
          className={cn(
            "mb-[5px] text-sm font-medium uppercase text-slate-400 md:mb-[10px] md:ml-56",
            expand && "md:ml-0"
          )}
        >
          {new Date(date).toUTCString()}
        </p>
        <h2
          className={cn(
            "mb-2 mt-1 text-xl font-medium",
            expand ? "md:text-4xl" : "md:ml-56 md:text-2xl"
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            "my-[10px] w-full overflow-hidden rounded",
            expand ? "" : "top-8 md:absolute md:my-0 md:h-52 md:max-w-52"
          )}
        >
          <AspectRatio ratio={4 / 3}>
            <Image
              src={cover ?? "/cat.svg"}
              alt={title}
              width={expand ? 800 : 400}
              height={expand ? 600 : 300}
              className="h-full w-full rounded object-cover"
            />
          </AspectRatio>
        </div>
      </header>
      <p
        className={cn(
          "mb-4 mt-[5px] text-base md:text-xl",
          expand ? "text-white" : "text-slate-400 md:ml-56"
        )}
      >
        {excerpt}
      </p>
      <p className="sr-only">{description}</p>
    </Link>
  )
}
