import BlogCard from "@/components/blog-card"
import { blogs } from "@site/content"

export default async function Blog() {
  return (
    <div className="mt-24 pt-6 md:pt-44">
      <div className="container">
        <h1 className="font-serif text-3xl font-bold md:text-5xl">
          The Roopaish Blog
        </h1>
        <div className="mt-10 grid md:mt-16 md:grid-cols-6">
          <div className="col-span-6 md:col-span-4">
            {blogs?.map((b, i) => (
              <BlogCard key={i} expand={i === 0 ? true : false} {...b} />
            ))}
          </div>
          <div className="col-span-6 md:col-span-2"></div>
        </div>
      </div>
    </div>
  )
}
