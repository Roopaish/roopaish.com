import Link from "next/link"
import { headerLinks } from "@/config/site"

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 py-4 md:py-6">
      <div className="container text-center">
        <nav>
          <Link href="/" className="mb-4 block font-sofadi text-xl font-medium">
            u/roopaish
          </Link>
          <ul className="flex items-center justify-center gap-4">
            {headerLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
