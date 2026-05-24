"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Systems", href: "/systems" },
  { label: "Marketing", href: "/marketing" },
  { label: "Blog", href: "/blog" },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ")

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Focus trap + Escape key
  useEffect(() => {
    if (!isOpen) return

    const container = containerRef.current
    if (!container) return

    const focusable = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS))

    focusable()[0]?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
        triggerRef.current?.focus()
        return
      }

      if (e.key !== "Tab") return

      const items = focusable()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, triggerRef])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      // inert removes the menu from the tab order and AT tree when hidden
      inert={!isOpen ? true : undefined}
      className={`fixed inset-0 z-50 flex flex-col bg-surface-dark transition-opacity duration-200 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div ref={containerRef} className="flex h-full flex-col px-6 py-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="font-heading text-xl font-bold text-ink-inverse focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            {/* PLACEHOLDER: swap for TRG Digital logo SVG */}
            <span className="font-bold">TRG</span> Digital
          </Link>
          <button
            onClick={() => {
              onClose()
              triggerRef.current?.focus()
            }}
            aria-label="Close navigation menu"
            className="rounded-md p-2 text-ink-inverse transition-colors hover:bg-white/10 focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="mt-12 flex flex-col gap-2">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              aria-current={isActive(href, pathname) ? "page" : undefined}
              className="text-display-2 font-heading font-bold text-ink-inverse opacity-90 transition-opacity hover:opacity-100 focus:outline-2 focus:outline-offset-4 focus:outline-accent aria-[current=page]:opacity-100 aria-[current=page]:underline aria-[current=page]:underline-offset-4"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="mt-auto pb-8">
          <Link
            href="/contact"
            onClick={onClose}
            aria-current={isActive("/contact", pathname) ? "page" : undefined}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-body font-semibold text-ink-inverse transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
