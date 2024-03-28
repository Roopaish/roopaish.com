import rehypePrettyCode from "rehype-pretty-code"
import { defineConfig, s } from "velite"

const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

const count = s
  .object({ total: s.number(), blog: s.number() })
  .default({ total: 0, blog: 0 })

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
  })
  .default({})

export default defineConfig({
  root: "src/content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    tags: {
      name: "Tag",
      pattern: "tags/index.yml",
      schema: s
        .object({
          name: s.string().max(20),
          slug: s.slug("global", ["admin", "login"]),
          cover: s.image().optional(),
          description: s.string().max(999).optional(),
          count,
        })
        .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
    },
    pages: {
      name: "Page",
      pattern: "pages/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug("global", ["admin", "login"]),
          body: s.mdx(),
        })
        .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
    },
    categories: {
      name: "Category",
      pattern: "categories/*.yml",
      schema: s
        .object({
          name: s.string().max(20),
          slug: s.slug("global", ["admin", "login"]),
          cover: s.image().optional(),
          description: s.string().max(999).optional(),
          meta: s
            .object({
              title: s.string().max(200).optional(),
              description: s.string().max(999).optional(),
            })
            .optional(),
          count,
        })
        .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
    },
    blogs: {
      name: "Blog",
      pattern: "blog/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug("blog"),
          date: s.isodate(),
          updated: s.isodate().optional(),
          cover: s.string().optional(),
          video: s.file().optional(),
          description: s.string().max(999).optional(),
          draft: s.boolean().default(false),
          featured: s.boolean().default(false),
          categories: s.array(s.string()).default(["Engineering"]),
          tags: s.array(s.string()).default([]),
          meta: meta,
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.mdx(),
        })
        .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
    },
  },
  markdown: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "catppuccin-macchiato",
        },
      ],
    ],
  },
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "catppuccin-macchiato",
        },
      ],
    ],
  },
  prepare: ({ categories, tags, blogs }) => {
    const docs = blogs.filter(
      (i) => process.env.NODE_ENV !== "production" || !i.draft
    )

    const categoriesFromDoc = Array.from(
      new Set(docs.map((item) => item.categories).flat())
    ).filter((i) => categories.find((j) => j.name === i) == null)
    categories.push(
      ...categoriesFromDoc.map((name) => ({
        name,
        slug: slugify(name),
        permalink: "",
        count: { total: 0, blog: 0 },
      }))
    )
    categories.forEach((i) => {
      i.count.blog = blogs.filter((j) => j.categories.includes(i.name)).length
      i.count.total = i.count.blog
      i.permalink = `/${i.slug}`
    })

    const tagsFromDoc = Array.from(
      new Set(docs.map((item) => item.tags).flat())
    ).filter((i) => tags.find((j) => j.name === i) == null)
    tags.push(
      ...tagsFromDoc.map((name) => ({
        name,
        slug: slugify(name),
        permalink: "",
        count: { total: 0, blog: 0 },
      }))
    )
    tags.forEach((i) => {
      i.count.blog = blogs.filter((j) => j.tags.includes(i.name)).length
      i.count.total = i.count.blog
      i.permalink = `/${i.slug}`
    })

    blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    // return false // return false to prevent velite from writing data to disk
  },
})
