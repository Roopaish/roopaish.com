import { getYearsOfExperience } from "@/lib/utils"

export default function Home() {
  return (
    <main className="container">
      <div className="-mx-8 min-h-[500px] bg-[url(/green/green-woods.jpg)] bg-cover bg-no-repeat lg:mx-0">
        <div className="h-full w-full">
          <h1 className="pt-32 text-4xl font-medium">Rupesh Budhathoki</h1>
          <p>Fullstack developer with {getYearsOfExperience()} of experience</p>
          <p className="mt-10">
            I love to develop web apps and mobile apps using Typescript, React
            and things build around them.
            <br />
            And I love nature.
          </p>

          <div className="mb-5 mt-40 text-lg font-medium">
            Explore blogs written by me
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {Array.from("*".repeat(20)).map((a, index) => (
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
