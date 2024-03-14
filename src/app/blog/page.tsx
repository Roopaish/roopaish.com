import BlogCard from "@/components/blog-card"
import { blogs } from "@site/content"

export default async function Blog() {
  return (
    <div className="mt-32 pt-6 md:pt-44">
      <div className="container">
        <h1 className="font-sans text-3xl font-bold md:text-5xl">
          Read:
          <br />
          The Tech blog
        </h1>
        <div className="mt-16">
          <div className="">
            {blogs?.map((b, i) => (
              <BlogCard key={i} expand={i === 0 ? true : false} {...b} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
