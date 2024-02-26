import Image from "next/image"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { contacts } from "@/config/me"
import { footerLinks } from "@/config/site"
import { LucideIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-5 py-11 md:flex-row">
          <h1 className="font-serif text-lg font-medium">@roopaish</h1>
          <ul className="flex items-center justify-between gap-4">
            {footerLinks.map(({ link, name }) => (
              <Link href={link} key={link} className="text-sm font-semibold">
                {name}
              </Link>
            ))}
          </ul>
          <ul className="flex items-center justify-between gap-4">
            {contacts.map(({ href, icon, title }) => {
              const Icon = Icons[icon] as LucideIcon
              return (
                <li key={href}>
                  <a href={href} target={"_blank"}>
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-8 md:flex-row">
          <div>&copy; {new Date().getFullYear()} Roopaish</div>
          <div>
            <Image
              src="/cat.svg"
              alt="Cat"
              width={200}
              height={200}
              className="h-full w-full max-w-32 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
