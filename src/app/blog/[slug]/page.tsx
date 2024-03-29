import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXContent } from "@/components/mdx-content"
import { blogs } from "@site/content"

type Props = {
  params: {
    slug: string
  }
}

function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug)
}

export function generateMetadata({ params }: Props): Metadata {
  const blog = getBlogBySlug(params.slug)
  if (blog == null) return {}
  return { title: blog.title }
}

export function generateStaticParams(): Props["params"][] {
  return blogs.map((blog) => ({ slug: blog.slug }))
}

export default function BlogPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug)

  if (blog == null) notFound()

  return (
    <article className="container prose prose-invert max-w-5xl overflow-hidden pt-40 md:mt-24">
      <div>
        <h1 className="not-prose mb-2 text-2xl font-bold md:text-4xl">
          {blog.title}
        </h1>
        <p className="not-prose text-base font-medium uppercase text-slate-400 md:text-lg">
          {new Date(blog.date).toUTCString()}
        </p>
      </div>
      {blog.cover && (
        <Image
          src={blog?.cover}
          alt={blog.title}
          className="aspect-video rounded object-cover"
          width={1600}
          height={900}
        />
      )}
      <hr />
      <MDXContent code={blog.content} />
    </article>
  )
}
