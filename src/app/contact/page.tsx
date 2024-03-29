import { Metadata } from "next"
import Link from "next/link"
import { Icons, IconType } from "@/components/icons"
import { contacts, email } from "@/config/me"
import { LucideIcon } from "lucide-react"

import ContactForm from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Roopaish",
  description: "",
}

export default function Contact() {
  return (
    <main id="contact" className="container mx-auto mt-32 pt-6 md:pt-44">
      <h1>
        <span className="font-display block text-base font-semibold">
          Contact me
        </span>
        <span className="sr-only"> - </span>
        <span className="font-display mt-6 block max-w-5xl text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
          Let&apos;s work together
        </span>
      </h1>

      <div className="mt-6 max-w-3xl text-xl">
        <p>I can&apos;t wait to hear from you.</p>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-24 sm:mt-32 lg:grid-cols-2">
        <section className="lg:order-last">
          <ContactForm />
        </section>

        <section>
          <div className="relative">
            <h2 className="font-display text-base font-semibold">Email me</h2>

            <a href={`mailto:${email}`} target="_blank">
              {email}
            </a>
          </div>

          <div className="relative mt-16 pt-16 before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-neutral-50 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-neutral-100/10">
            <h2 className="font-display text-base font-semibold">
              Find me here
            </h2>
            <ul role="list" className="mt-6 flex flex-wrap gap-x-10 gap-y-10">
              {contacts.map(({ icon, href, title }) => {
                const Icon = Icons[icon as IconType] as LucideIcon

                return (
                  <li key={href}>
                    <Link
                      aria-label={title}
                      className="transition hover:text-neutral-400"
                      href={href}
                      target="_blank"
                    >
                      {<Icon className="h-6 w-6" />}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
