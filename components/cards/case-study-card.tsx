import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface CaseStudyCardProps {
  client: string
  outcome: string
  href: string
}

export function CaseStudyCard({ client, outcome, href }: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between gap-8 rounded-lg border border-border bg-surface p-8 transition-[transform,shadow] duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-accent min-h-[200px]"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-h3 font-heading font-bold text-ink">{client}</p>
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="shrink-0 text-ink-subtle opacity-0 transition-opacity duration-200 group-hover:opacity-100 mt-1"
        />
      </div>
      <p className="text-body-lg text-ink-muted">{outcome}</p>
    </Link>
  )
}
