import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"

interface FeatureBlockProps {
  imageSide: "left" | "right"
  eyebrow?: string
  logo?: { src: string; alt: string; width: number; height: number }
  headline: string
  body: string
  cta?: { label: string; href: string }
  image?: { src: string; alt: string; width: number; height: number }
}

export function FeatureBlock({
  imageSide,
  eyebrow,
  logo,
  headline,
  body,
  cta,
  image,
}: FeatureBlockProps) {
  return (
    <section className="bg-surface overflow-hidden">
      <Container className="py-16 lg:py-0">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0 lg:min-h-[560px]">
          {/* Image, always first on mobile */}
          <div
            className={`order-1 relative min-h-[300px] lg:min-h-full -mx-6 lg:mx-0 ${
              imageSide === "right" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            ) : (
              /* PLACEHOLDER: replace with real photography */
              <div className="absolute inset-0 flex items-center justify-center bg-surface-alt">
                <p className="text-small text-ink-subtle text-center px-4">
                  Feature image, 960×560 [PLACEHOLDER]
                </p>
              </div>
            )}
          </div>

          {/* Text */}
          <div
            className={`order-2 flex flex-col justify-center ${
              imageSide === "right"
                ? "lg:order-1 lg:pr-16 xl:pr-24"
                : "lg:order-2 lg:pl-16 xl:pl-24"
            }`}
          >
            <FadeIn>
              {logo ? (
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-10 w-auto object-contain mb-4" />
              ) : eyebrow ? (
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
                  {eyebrow}
                </p>
              ) : null}
              <h2 className="text-h1 font-heading font-bold text-ink">{headline}</h2>
              <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">{body}</p>
              {cta && (
                <Link
                  href={cta.href}
                  className="mt-8 inline-flex items-center gap-2 text-body font-semibold text-accent underline underline-offset-4 transition-opacity hover:opacity-70 focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm"
                >
                  {cta.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  )
}
