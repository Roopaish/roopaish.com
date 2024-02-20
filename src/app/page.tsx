import Image from "next/image"
import { getYearsOfExperience } from "@/lib/utils"

export default function Home() {
  return (
    <main className="container">
      <div className="relative">
        <figure className="absolute left-0 right-0 top-0 -mx-8 h-[500px] lg:mx-0  lg:h-full">
          <Image
            src="/green/green-woods.jpg"
            alt="Green woods"
            height={600}
            width={1200}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="relative h-full w-full">
          <h1 className="pt-20 text-4xl font-medium lg:pt-32">
            Rupesh Budhathoki
          </h1>
          <p>Fullstack developer with {getYearsOfExperience()} of experience</p>
          <p className="mt-10">
            I love to develop web apps and mobile apps using Typescript, React
            and things built around them.
            <br />
            And I love nature.
          </p>
          <div className="mb-5 mt-40 text-lg font-medium">
            Explore blogs written by me
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {Array.from("*".repeat(5)).map((a, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-[5px] border border-white px-4 py-1 transition-all hover:border-primary hover:bg-green-900"
              >
                {" "}
                Category{index}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
