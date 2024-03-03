import { blogs } from "@site/content"

async function getAllBlogs(slug: string) {
  return blogs.find((blog) => blog.slug === slug)
}

export default async function Blog() {
  return (
    <div className="mt-24 pt-6 md:pt-44">
      <div className="container">
        <h1 className="font-serif text-3xl font-bold md:text-5xl">
          The Roopaish Blog
        </h1>
        <div className="mt-10 md:mt-16"></div>
      </div>
    </div>
  )
}
