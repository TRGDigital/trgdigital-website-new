import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/primitives/container"

interface CtaProps {
  label: string
  href: string
}

interface HeroProps {
  variant: "media" | "image" | "type"
  eyebrow?: string
  logo?: { src: string; alt: string; width: number; height: number }
  headline: string
  subheadline?: string
  primaryCta?: CtaProps
  secondaryCta?: CtaProps
  bleedIntoNav?: boolean
  // media variant
  video?: { src: string; poster: string }
  backgroundImage?: { src: string; alt: string }
  // image variant
  image?: { src: string; alt: string; width: number; height: number }
  imageSide?: "left" | "right"
}

function HeadlineBreaks({ text }: { text: string }) {
  const parts = text.split("|")
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part.trim()}
          {i < parts.length - 1 && <br />}
        </span>
      ))}
    </>
  )
}

function CtaGroup({
  primary,
  secondary,
  dark = false,
}: {
  primary?: CtaProps
  secondary?: CtaProps
  dark?: boolean
}) {
  if (!primary && !secondary) return null
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8 animate-hero-enter [animation-delay:300ms]">
      {primary && (
        <Link
          href={primary.href}
          className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-body font-semibold transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent ${
            dark
              ? "bg-ink-inverse text-ink hover:bg-ink-inverse/90"
              : "bg-accent text-ink-inverse hover:bg-accent-hover"
          }`}
        >
          {primary.label}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      )}
      {secondary && (
        <Link
          href={secondary.href}
          className={`text-body font-semibold underline underline-offset-4 transition-opacity hover:opacity-70 focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm ${
            dark ? "text-ink-inverse" : "text-ink"
          }`}
        >
          {secondary.label}
        </Link>
      )}
    </div>
  )
}

export function Hero({
  variant,
  eyebrow,
  logo,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  bleedIntoNav = false,
  video,
  backgroundImage,
  image,
  imageSide = "right",
}: HeroProps) {
  if (variant === "media") {
    return (
      <div className="relative flex min-h-[85vh] items-end overflow-hidden bg-surface-dark">
        {/* Background video */}
        {video && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-hidden="true"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        )}
        {/* Background still image */}
        {backgroundImage && !video && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {/* Gradient overlay — bottom-up for content legibility, top-down for nav legibility when bleeding */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        {bleedIntoNav && <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />}
        {/* Content */}
        <Container className="relative z-10 pb-16 lg:pb-24 pt-32">
          {eyebrow && (
            <p className="text-small font-semibold uppercase tracking-widest text-ink-inverse/70 mb-4 animate-hero-enter">
              {eyebrow}
            </p>
          )}
          <h1 className="text-display-1 font-heading font-bold text-ink-inverse max-w-3xl animate-hero-enter [animation-delay:100ms]">
            <HeadlineBreaks text={headline} />
          </h1>
          {subheadline && (
            <p className="text-body-lg text-ink-inverse/80 mt-6 max-w-xl animate-hero-enter [animation-delay:200ms]">
              {subheadline}
            </p>
          )}
          <CtaGroup primary={primaryCta} secondary={secondaryCta} dark />
        </Container>
      </div>
    )
  }

  if (variant === "image") {
    return (
      <div className="grid min-h-[70vh] lg:grid-cols-2">
        {/* Text column */}
        <div
          className={`order-2 flex flex-col justify-center px-6 py-16 lg:px-20 lg:py-24 ${
            imageSide === "right" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {logo ? (
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-12 w-auto object-contain mb-6 animate-hero-enter" priority />
          ) : eyebrow ? (
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4 animate-hero-enter">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-display-2 font-heading font-bold text-ink animate-hero-enter [animation-delay:100ms]">
            <HeadlineBreaks text={headline} />
          </h1>
          {subheadline && (
            <p className="text-body-lg text-ink-muted mt-6 max-w-lg animate-hero-enter [animation-delay:200ms]">
              {subheadline}
            </p>
          )}
          <CtaGroup primary={primaryCta} secondary={secondaryCta} />
        </div>
        {/* Image column, always renders first on mobile */}
        <div
          className={`order-1 relative min-h-[40vh] bg-surface-alt ${
            imageSide === "right" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
          ) : (
            /* PLACEHOLDER: replace with real photography */
            <div className="absolute inset-0 flex items-center justify-center bg-surface-alt">
              <p className="text-small text-ink-subtle">Image, 1200×800 [PLACEHOLDER]</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  // variant === "type"
  return (
    <div className="bg-surface py-24 lg:py-40">
      <Container>
        {eyebrow && (
          <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-6 animate-hero-enter">
            {eyebrow}
          </p>
        )}
        <h1 className="text-display-1 font-heading font-bold text-ink max-w-4xl animate-hero-enter [animation-delay:100ms]">
          <HeadlineBreaks text={headline} />
        </h1>
        {subheadline && (
          <p className="text-body-lg text-ink-muted mt-8 max-w-2xl animate-hero-enter [animation-delay:200ms]">
            {subheadline}
          </p>
        )}
        <CtaGroup primary={primaryCta} secondary={secondaryCta} />
      </Container>
    </div>
  )
}
