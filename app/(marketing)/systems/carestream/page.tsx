// PLACEHOLDER: all content on this page pending from TRG Digital
import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata = buildMetadata({
  title: "CareStream",
  description: "[PLACEHOLDER] CareStream meta description pending from TRG Digital.",
  path: "/systems/carestream",
})

// PLACEHOLDER: real features from TRG
const FEATURES = [
  { icon: "📋", title: "Digital care notes", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "💊", title: "Medication management", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "👥", title: "Staff rostering", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "📊", title: "Compliance reporting", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "📱", title: "Mobile-first design", description: "[PLACEHOLDER] Feature description pending." },
  { icon: "🔗", title: "System integrations", description: "[PLACEHOLDER] Feature description pending." },
]

// PLACEHOLDER: real outcomes from TRG
const OUTCOMES = [
  { value: "[X]%", label: "[PLACEHOLDER] Outcome metric" },
  { value: "[X]h", label: "[PLACEHOLDER] Outcome metric" },
  { value: "[X]%", label: "[PLACEHOLDER] Outcome metric" },
]

export default function CareStreamPage() {
  return (
    <>
      {/* 1, Hero */}
      {/* PLACEHOLDER: real CareStream wordmark, value prop, product screenshot */}
      <Hero
        variant="image"
        logo={{ src: "/carestream-logo.png", alt: "CareStream AI", width: 434, height: 130 }}
        headline="[PLACEHOLDER] CareStream headline value proposition."
        subheadline="[PLACEHOLDER] One-sentence description of what CareStream does and for whom."
        primaryCta={{ label: "Book a demo", href: "/contact?subject=carestream" }}
        imageSide="right"
        image={{ src: "/images/hero-carestream.jpg", alt: "Caregiver supporting a patient", width: 1400, height: 933 }}
      />

      {/* 2, Problem statement */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
                The problem
              </p>
              {/* PLACEHOLDER: real problem statement from TRG */}
              <p className="text-h2 font-heading font-bold text-ink">
                [PLACEHOLDER] The operational pain CareStream solves, in one paragraph. Pending from TRG Digital.
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
              Everything your team needs, in one place
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
      {/* PLACEHOLDER: real feature details, screenshots */}
      <FeatureBlock
        imageSide="left"
        eyebrow="Care notes"
        headline="[PLACEHOLDER] Detailed feature headline"
        body="[PLACEHOLDER] Two-paragraph feature description. Real copy and screenshot pending from TRG Digital."
        image={{ src: "/images/feature-care.jpg", alt: "Caregiver with patient", width: 960, height: 560 }}
      />
      <FeatureBlock
        imageSide="right"
        eyebrow="Compliance"
        headline="[PLACEHOLDER] Detailed feature headline"
        body="[PLACEHOLDER] Two-paragraph feature description. Real copy and screenshot pending from TRG Digital."
        image={{ src: "/images/feature-compliance.jpg", alt: "Healthcare professional", width: 960, height: 560 }}
      />
      <FeatureBlock
        imageSide="left"
        eyebrow="Reporting"
        headline="[PLACEHOLDER] Detailed feature headline"
        body="[PLACEHOLDER] Two-paragraph feature description. Real copy and screenshot pending from TRG Digital."
        image={{ src: "/images/feature-digital.jpg", alt: "Analytics dashboard", width: 960, height: 560 }}
      />

      {/* 5, Outcomes */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <h2 className="text-h1 font-heading font-bold text-ink mb-16 max-w-2xl">
              {/* PLACEHOLDER */}Measured results for care providers
            </h2>
          </FadeIn>
          {/* PLACEHOLDER: real metrics from TRG, no invented numbers */}
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
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              Who it's for
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              Built for every type of care setting
            </h2>
          </FadeIn>
          {/* PLACEHOLDER: real segment descriptions */}
          <div className="grid gap-6 sm:grid-cols-3">
            {["Care homes", "Nursing homes", "Care groups"].map((segment, i) => (
              <FadeIn key={segment} delay={i * 80}>
                <div className="rounded-lg border border-border bg-surface p-8">
                  <h3 className="text-h3 font-heading font-bold text-ink mb-3">{segment}</h3>
                  <p className="text-body text-ink-muted">
                    [PLACEHOLDER] Description of how CareStream serves {segment.toLowerCase()}. Pending from TRG.
                  </p>
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
              {/* PLACEHOLDER: real testimonial from TRG */}
              <blockquote className="text-h2 font-heading font-bold text-ink leading-snug">
                "[PLACEHOLDER] Real testimonial quote from a CareStream client. Pending from TRG Digital."
              </blockquote>
              <p className="text-body text-ink-muted mt-6">
                [PLACEHOLDER] Name, Role, Organisation
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 8, CTA band */}
      <CtaBand
        headline="See CareStream in action"
        ctaLabel="Book a demo"
        ctaHref="/contact?subject=carestream"
      />
    </>
  )
}
