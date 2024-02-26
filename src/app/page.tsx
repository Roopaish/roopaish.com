import { Button } from "@/components/ui/button"
import { getYearsOfExperience } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <main className="container pb-[1000px] pt-20">
        <h1 className="mx-auto mt-10 max-w-4xl text-center font-serif text-5xl md:mt-20 md:text-7xl">
          Fullstack developer with {getYearsOfExperience()} of experience
        </h1>
        <p className="mx-auto mt-10 text-center text-lg md:text-xl">
          I love developing web and mobile apps using TypeScript, React, Node
          and things built around them. <br />
          And I love exploring, both programming stuffs and nature 🌱.
        </p>
        <div className="mt-8 text-center">
          <Button className="rounded-full">View Projects</Button>
        </div>
      </main>
    </>
  )
}
