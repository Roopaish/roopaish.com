import type { MetadataRoute } from "next"
import { blogs } from "@site/content"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return blogs.map((blog) => ({
    url: `https://roopaish.com/blog/${blog.slug}`,
    lastModified: blog.updated,
    changeFrequency: "yearly",
    priority: 0.8,
  }))
}
