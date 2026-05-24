import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/primitives/container"

interface CtaBandProps {
  headline: string
  ctaLabel: string
  ctaHref: string
}

export function CtaBand({ headline, ctaLabel, ctaHref }: CtaBandProps) {
  return (
    <section className="bg-surface-dark py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-h1 font-heading font-bold text-ink-inverse max-w-2xl">
            {headline}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-ink-inverse px-7 py-4 text-body font-semibold text-ink transition-opacity hover:opacity-90 focus:outline-2 focus:outline-offset-2 focus:outline-ink-inverse"
          >
            {ctaLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
