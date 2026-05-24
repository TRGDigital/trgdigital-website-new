import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface SystemCardProps {
  name: string
  tagline: string
  description: string
  href: string
  logo?: string
}

export function SystemCard({ name, tagline, description, href, logo }: SystemCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-lg border border-border bg-surface p-8 transition-[transform,shadow] duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {logo ? (
            <Image src={logo} alt={name} width={160} height={40} className="h-9 w-auto object-contain mb-1" />
          ) : (
            <p className="text-h3 font-heading font-bold text-ink">{name}</p>
          )}
          <p className="text-small font-medium text-accent mt-1">{tagline}</p>
        </div>
        <ArrowRight
          size={18}
          aria-hidden="true"
          className="shrink-0 text-ink-subtle opacity-0 transition-opacity duration-200 group-hover:opacity-100 mt-1"
        />
      </div>
      <p className="text-body text-ink-muted leading-relaxed">{description}</p>
    </Link>
  )
}
