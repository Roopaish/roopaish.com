"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { categories } from "@site/content"

export default function Categories() {
  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <div className="w-full">
      <h3 className="mb-2 flex items-center justify-between gap-2 text-base font-medium">
        All Categories
        <Button
          className={cn(
            !!searchParams.get("category")
              ? "opacity-1"
              : "pointer-events-none opacity-0",
            "transition-opacity"
          )}
          onClick={() => router.push("/blog")}
          size={"icon"}
          aria-label="Clear Filter"
        >
          <Icons.X />
        </Button>
      </h3>
      {}
      <Separator orientation="horizontal" className="bg-slate-400" />
      <ul className="mt-4 text-sm text-slate-200">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/blog?category=${c.slug}`}
              className="mb-1 block hover:underline"
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
