import type { Metadata } from "next"
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
    <article className="container prose-2xl mt-24 pt-40">
      <h1>{blog.title}</h1>
      <hr />
      <MDXContent code={blog.content} />
    </article>
  )
}
