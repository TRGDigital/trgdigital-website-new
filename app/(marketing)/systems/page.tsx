import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata = buildMetadata({
  title: "Our Systems",
  description: "Proprietary CareTech platforms built for the way care actually runs.",
  path: "/systems",
})

// PLACEHOLDER: real integration logos from TRG
const INTEGRATIONS = [
  "eMAR", "Rostering", "Finance", "GP Connect", "NHS Spine", "CQC Portal",
]

export default function SystemsPage() {
  return (
    <>
      {/* 1, Hero */}
      <Hero
        variant="type"
        eyebrow="Our systems"
        headline="Software built for the way care actually runs."
        subheadline="Four proprietary platforms and a custom-build capability, all designed exclusively for the UK care sector."
      />

      {/* 2, CareStream block */}
      {/* PLACEHOLDER: real CareStream copy, logo, screenshot */}
      <Section variant="alt">
        <FeatureBlock
          imageSide="left"
          logo={{ src: "/carestream-logo.png", alt: "CareStream AI", width: 434, height: 130 }}
          headline="The care management platform built around your staff."
          body="[PLACEHOLDER, CareStream product description. What it does, who it's for, and the key problems it solves. Real copy pending from TRG Digital.]"
          cta={{ label: "Explore CareStream", href: "/systems/carestream" }}
          image={{ src: "/images/hero-carestream.jpg", alt: "Caregiver supporting a patient", width: 960, height: 560 }}
        />
      </Section>

      {/* 3, CareAssura block */}
      {/* PLACEHOLDER: real CareAssura copy, logo, screenshot */}
      <Section variant="default">
        <FeatureBlock
          imageSide="right"
          logo={{ src: "/careassura-logo.png", alt: "CareAssura", width: 449, height: 266 }}
          headline="Get found by families who need you."
          body="[PLACEHOLDER, CareAssura product description. What it does, who it's for, and the key problems it solves. Real copy pending from TRG Digital.]"
          cta={{ label: "Explore CareAssura", href: "/systems/careassura" }}
          image={{ src: "/images/hero-careassura.jpg", alt: "Team collaborating on care planning", width: 960, height: 560 }}
        />
      </Section>

      {/* 3b, CareRota block */}
      <Section variant="alt">
        <FeatureBlock
          imageSide="left"
          eyebrow="CareRota"
          headline="The rota, attendance, and payroll platform that pays what was worked."
          body="CareRota links dynamic rota management, time-and-attendance, and payroll into one system — so UK care homes stop paying for hours that weren't worked, catch compliance issues before the rota goes live, and close the gap between planning and reality."
          cta={{ label: "Explore CareRota", href: "/systems/care-rota" }}
          image={{ src: "/images/feature-team.jpg", alt: "Care team at work", width: 960, height: 560 }}
        />
      </Section>

      {/* 4, [PRODUCT NAME] block */}
      <Section variant="default">
        <FeatureBlock
          imageSide="right"
          eyebrow="[PRODUCT NAME]"
          headline="Fill empty beds on demand, not on hope."
          body="[PRODUCT NAME] connects your home directly to families actively searching for care in your area. Turn your listing on when you have beds to fill and off when you're full — paying only for the enquiries you receive. Every lead arrives pre-qualified with the family's care needs, urgency, and budget, so your team knows before they pick up the phone."
          cta={{ label: "Explore [PRODUCT NAME]", href: "/systems/on-demand-enquiry" }}
        />
      </Section>

      {/* 5, Custom builds block */}
      <Section variant="alt">
        <FeatureBlock
          imageSide="left"
          eyebrow="Custom builds"
          headline="When off-the-shelf doesn't fit."
          body="Some care operations have workflows so specific that no existing product covers them. When that's the case, we build the system from scratch, scoped to your processes, integrated with your existing tools."
          cta={{ label: "Learn about custom builds", href: "/systems/custom" }}
          image={{ src: "/images/feature-team.jpg", alt: "Development team at work", width: 960, height: 560 }}
        />
      </Section>

      {/* 5, Integrations / compliance */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
                  Compliance & integrations
                </p>
                <h2 className="text-h1 font-heading font-bold text-ink mb-6">
                  Built to work with the systems you already use
                </h2>
                {/* PLACEHOLDER: real compliance/integration copy */}
                <p className="text-body-lg text-ink-muted leading-relaxed">
                  [PLACEHOLDER, Copy covering GDPR alignment, CQC-aware design principles,
                  and the key third-party integrations TRG Digital supports. Real copy pending from TRG.]
                </p>
              </div>
              <div>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-6">
                  Integrations
                </p>
                {/* PLACEHOLDER: real integration logos */}
                <div className="grid grid-cols-3 gap-4">
                  {INTEGRATIONS.map((name) => (
                    <div
                      key={name}
                      className="flex h-16 items-center justify-center rounded-md border border-border bg-surface-alt px-4"
                    >
                      <p className="text-small font-medium text-ink-muted">{name}</p>
                    </div>
                  ))}
                </div>
                <p className="text-small text-ink-muted mt-3">
                  {/* PLACEHOLDER */}Integration logos pending from TRG.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 6, CTA band */}
      <CtaBand
        headline="Not sure which system fits?"
        ctaLabel="Talk to us"
        ctaHref="/contact"
      />
    </>
  )
}
