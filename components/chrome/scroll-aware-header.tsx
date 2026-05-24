"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { MobileMenu } from "./mobile-menu"

const NAV_LINKS = [
  { label: "About TRG Digital", href: "/about" },
  { label: "Our Systems", href: "/systems" },
  { label: "Our Marketing Solutions", href: "/marketing" },
  { label: "Blog", href: "/blog" },
]

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")
}

export function ScrollAwareHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  // On the home page the hero bleeds behind the header — use white text until scrolled
  const isDarkHero = pathname === "/" && !isScrolled

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handler, { passive: true })
    handler()
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "py-3 bg-surface/90 backdrop-blur-md border-b border-border shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-6 lg:px-20">
          {/* Logo */}
          <Link
            href="/"
            aria-label="TRG Digital home"
            className={`font-heading text-xl font-bold focus:outline-2 focus:outline-offset-2 focus:outline-accent transition-colors ${isDarkHero ? "text-ink-inverse" : "text-ink"}`}
          >
            {/* PLACEHOLDER: swap for TRG Digital logo SVG */}
            <span className="font-bold">TRG</span>{" "}
            <span className="font-light">Digital</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href, pathname) ? "page" : undefined}
                className={`text-body font-medium transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm ${
                  isDarkHero
                    ? "text-ink-inverse/80 hover:text-ink-inverse aria-[current=page]:text-ink-inverse aria-[current=page]:font-semibold"
                    : "text-ink-muted hover:text-ink aria-[current=page]:text-ink aria-[current=page]:font-semibold"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              aria-current={isActive("/contact", pathname) ? "page" : undefined}
              className={`hidden md:inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-body font-semibold transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent ${
                isDarkHero
                  ? "bg-ink-inverse/20 text-ink-inverse hover:bg-ink-inverse/30 border border-ink-inverse/40"
                  : "bg-accent text-ink-inverse hover:bg-accent-hover"
              }`}
            >
              Contact Us
            </Link>

            <button
              ref={hamburgerRef}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className={`md:hidden rounded-md p-2 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent ${isDarkHero ? "text-ink-inverse hover:bg-white/10" : "text-ink hover:bg-surface-alt"}`}
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        triggerRef={hamburgerRef}
      />
    </>
  )
}
