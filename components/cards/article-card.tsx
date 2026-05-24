import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ArticleCardProps {
  coverImage?: { src: string; alt: string }
  tag: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  href: string
  featured?: boolean
}

export function ArticleCard({
  coverImage,
  tag,
  title,
  excerpt,
  date,
  readingTime,
  href,
  featured = false,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-lg border border-border bg-surface overflow-hidden transition-[transform,shadow] duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-accent ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Cover image */}
      <div
        className={`relative bg-surface-alt ${
          featured ? "lg:w-1/2 min-h-[240px] lg:min-h-full" : "h-48"
        }`}
      >
        {coverImage ? (
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            className="object-cover"
          />
        ) : (
          /* PLACEHOLDER: cover image */
          <div className="absolute inset-0 bg-surface-alt" />
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-3 p-6 ${featured ? "lg:w-1/2 lg:p-10" : ""}`}>
        <p className="text-small font-semibold uppercase tracking-widest text-accent">
          {tag}
        </p>
        <h3 className={`font-heading font-bold text-ink leading-snug ${featured ? "text-h2" : "text-h3"}`}>
          {title}
        </h3>
        <p className="text-body text-ink-muted line-clamp-3">{excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
          <p className="text-small text-ink-subtle">
            {date} · {readingTime}
          </p>
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="text-ink-subtle opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  )
}
