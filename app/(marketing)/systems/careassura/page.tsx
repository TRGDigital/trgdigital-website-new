// PLACEHOLDER: all content on this page pending from TRG Digital
// Structure mirrors CareStream, see docs/03-pages.md §3.3.2
import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata = buildMetadata({
  title: "CareAssura",
  description: "[PLACEHOLDER] CareAssura meta description pending from TRG Digital.",
  path: "/systems/careassura",
})

const FEATURES = [
  { icon: "🏠", title: "Care home profiles", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "⭐", title: "Review management", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "🔍", title: "Local SEO", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "📸", title: "Photo & video", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "📈", title: "Enquiry analytics", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "📱", title: "Provider dashboard", description: "[PLACEHOLDER] Feature description pending." },
]

const OUTCOMES = [
  { value: "[X]%", label: "[PLACEHOLDER] Outcome metric" },
  { value: "[X]×", label: "[PLACEHOLDER] Outcome metric" },
  { value: "[X]k+", label: "[PLACEHOLDER] Outcome metric" },
]

export default function CareAssuraPage() {
  return (
    <>
      {/* 1, Hero */}
      {/* PLACEHOLDER: real CareAssura wordmark, value prop, screenshot */}
      <Hero
        variant="image"
        logo={{ src: "/careassura-logo.png", alt: "CareAssura", width: 449, height: 266 }}
        headline="[PLACEHOLDER] CareAssura headline value proposition."
        subheadline="[PLACEHOLDER] One-sentence description of what CareAssura does and for whom."
        primaryCta={{ label: "Claim your profile", href: "/contact?subject=careassura" }}
        imageSide="right"
        image={{ src: "/images/hero-careassura.jpg", alt: "Team collaborating on care planning", width: 1400, height: 933 }}
      />

      {/* 2, Problem statement */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
                The problem
              </p>
              {/* PLACEHOLDER */}
              <p className="text-h2 font-heading font-bold text-ink">
                [PLACEHOLDER] The challenge families face when searching for care, and what CareAssura does about it. Pending from TRG.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 3, Feature grid */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              Everything families need to find you
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 60}>
                <div className="rounded-lg border border-border bg-surface p-6">
                  <p className="text-2xl mb-4" aria-hidden="true">{f.icon}</p>
                  <h3 className="text-h3 font-heading font-bold text-ink mb-2">{f.title}</h3>
                  <p className="text-body text-ink-muted">{f.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4, Detailed features */}
      {/* PLACEHOLDER */}
      <FeatureBlock imageSide="left" eyebrow="Profiles" headline="[PLACEHOLDER] Detailed feature headline" body="[PLACEHOLDER] Feature description. Pending from TRG Digital." image={{ src: "/images/feature-careassura.jpg", alt: "Nurse in care setting", width: 960, height: 560 }} />
      <FeatureBlock imageSide="right" eyebrow="Reviews" headline="[PLACEHOLDER] Detailed feature headline" body="[PLACEHOLDER] Feature description. Pending from TRG Digital." image={{ src: "/images/feature-digital.jpg", alt: "Analytics dashboard", width: 960, height: 560 }} />
      <FeatureBlock imageSide="left" eyebrow="Analytics" headline="[PLACEHOLDER] Detailed feature headline" body="[PLACEHOLDER] Feature description. Pending from TRG Digital." image={{ src: "/images/feature-care.jpg", alt: "Caregiver with patient", width: 960, height: 560 }} />

      {/* 5, Outcomes */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <h2 className="text-h1 font-heading font-bold text-ink mb-16 max-w-2xl">
              {/* PLACEHOLDER */}Measured results for care providers
            </h2>
          </FadeIn>
          {/* PLACEHOLDER: real metrics, no invented numbers */}
          <div className="grid gap-8 sm:grid-cols-3">
            {OUTCOMES.map((o, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="border-t-2 border-accent pt-6">
                  <p className="text-display-1 font-heading font-bold text-accent">{o.value}</p>
                  <p className="text-body-lg text-ink-muted mt-2">{o.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6, Who it's for */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Who it's for</p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">Built for every care provider</h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {["Care homes", "Nursing homes", "Home-care agencies"].map((segment, i) => (
              <FadeIn key={segment} delay={i * 80}>
                <div className="rounded-lg border border-border bg-surface p-8">
                  <h3 className="text-h3 font-heading font-bold text-ink mb-3">{segment}</h3>
                  <p className="text-body text-ink-muted">[PLACEHOLDER] Pending from TRG.</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7, Testimonial */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              {/* PLACEHOLDER */}
              <blockquote className="text-h2 font-heading font-bold text-ink leading-snug">
                "[PLACEHOLDER] Real testimonial from a CareAssura client. Pending from TRG Digital."
              </blockquote>
              <p className="text-body text-ink-muted mt-6">[PLACEHOLDER] Name, Role, Organisation</p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 8, CTA band */}
      <CtaBand
        headline="See CareAssura in action"
        ctaLabel="Claim your profile"
        ctaHref="/contact?subject=careassura"
      />
    </>
  )
}
