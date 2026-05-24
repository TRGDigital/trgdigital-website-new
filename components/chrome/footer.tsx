import Link from "next/link"
import { Mail, Phone } from "lucide-react"

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Systems", href: "/systems" },
  { label: "Marketing", href: "/marketing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const SYSTEM_LINKS = [
  { label: "CareStream", href: "/systems/carestream" },
  { label: "CareAssura", href: "/systems/careassura" },
  { label: "Custom Builds", href: "/systems/custom" },
]

export function Footer() {
  return (
    <footer className="bg-surface-dark text-ink-inverse">
      <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-20">
        {/* Main columns */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-24">
          {/* Col 1, Brand */}
          <div>
            <Link
              href="/"
              aria-label="TRG Digital home"
              className="inline-block font-heading text-xl font-bold text-ink-inverse focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            >
              {/* PLACEHOLDER: swap for TRG Digital logo SVG */}
              <span className="font-bold">TRG</span>{" "}
              <span className="font-light">Digital</span>
            </Link>
            <p className="mt-4 text-small text-ink-inverse/70 leading-relaxed max-w-[20ch]">
              CareTech software, websites, and bespoke builds for the UK care sector.
            </p>
            {/* PLACEHOLDER: company registration number */}
            <p className="mt-6 text-small text-ink-inverse/50">
              Company reg: [PLACEHOLDER]
            </p>
          </div>

          {/* Col 2, Site links */}
          <nav aria-label="Site navigation">
            <p className="text-small font-semibold uppercase tracking-widest text-ink-inverse/50 mb-6">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-small text-ink-inverse/80 transition-colors hover:text-ink-inverse focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3, Systems */}
          <nav aria-label="Our systems">
            <p className="text-small font-semibold uppercase tracking-widest text-ink-inverse/50 mb-6">
              Our Systems
            </p>
            <ul className="flex flex-col gap-3">
              {SYSTEM_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-small text-ink-inverse/80 transition-colors hover:text-ink-inverse focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4, Contact */}
          <div>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-inverse/50 mb-6">
              Get in touch
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                {/* PLACEHOLDER: real email address */}
                <a
                  href="mailto:hello@trgdigital.example"
                  className="flex items-center gap-2 text-small text-ink-inverse/80 transition-colors hover:text-ink-inverse focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm"
                >
                  <Mail size={14} aria-hidden="true" />
                  hello@trgdigital.example
                </a>
              </li>
              <li>
                {/* PLACEHOLDER: real phone number */}
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-2 text-small text-ink-inverse/80 transition-colors hover:text-ink-inverse focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm"
                >
                  <Phone size={14} aria-hidden="true" />
                  +44 (0) 1234 567 890
                </a>
              </li>
              <li>
                {/* PLACEHOLDER: real LinkedIn URL */}
                <a
                  href="https://www.linkedin.com/company/trgdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TRG Digital on LinkedIn (opens in new tab)"
                  className="flex items-center gap-2 text-small text-ink-inverse/80 transition-colors hover:text-ink-inverse focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm"
                >
                  <LinkedInIcon size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-ink-inverse/50">
            © {new Date().getFullYear()} TRG Digital. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/privacy"
              className="text-small text-ink-inverse/50 transition-colors hover:text-ink-inverse focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-small text-ink-inverse/50 transition-colors hover:text-ink-inverse focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm"
            >
              Cookies
            </Link>
            {/* PLACEHOLDER: ICO registration number */}
            <span className="text-small text-ink-inverse/50">ICO: [PLACEHOLDER]</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
