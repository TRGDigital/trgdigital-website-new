import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata = buildMetadata({
  title: "Marketing for care providers",
  description: "Marketing that fills beds, builds reputation, and respects regulation, built exclusively for UK care providers.",
  path: "/marketing",
})

const SERVICES = [
  { title: "Website design & build", body: "Care-sector websites built for families, regulators, and recruitment, not just aesthetics. CQC-compliant language and structure by default." },
  { title: "SEO for care providers", body: "Local search that puts you in front of families at the moment they need you. We understand the specific search behaviour around care decisions." },
  { title: "Brand & identity", body: "A brand that reflects the quality of your care, professional, trustworthy, and distinct from the tired stock-photo world of generic care marketing." },
  { title: "Content & social", body: "Content that humanises your home, supports recruitment, and keeps families informed, produced with an understanding of what you can and can't say." },
  { title: "Local search (GBP)", body: "Google Business Profile management and local citation building so you appear where families are actually looking, in the map, not just organic results." },
  { title: "Reputation management", body: "Structured processes for gathering and responding to reviews, managing your CQC rating narrative, and building long-term social proof." },
]

const PROCESS = [
  { step: "01", title: "Audit", body: "We assess your current marketing position, website, search visibility, reviews, and brand, before recommending anything." },
  { step: "02", title: "Strategy", body: "A clear plan aligned to your occupancy goals, target market, and regulatory constraints." },
  { step: "03", title: "Execution", body: "Implementation by specialists who understand care, not a general-purpose agency learning on your budget." },
  { step: "04", title: "Reporting", body: "Transparent reporting on what's working, what isn't, and what we're doing about it. No vanity metrics." },
]

export default function MarketingPage() {
  return (
    <>
      {/* 1, Hero */}
      <Hero
        variant="type"
        eyebrow="Marketing solutions"
        headline="Marketing that fills beds, builds reputation, | and respects regulation."
        subheadline="Built exclusively for UK care providers, because a generalist agency doesn't understand your world."
      />

      {/* 2, Services grid */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              What we offer
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              Marketing services for care providers
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 60}>
                <div className="rounded-lg border border-border bg-surface p-8 h-full">
                  <h3 className="text-h3 font-heading font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-body text-ink-muted leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3, Care-sector specialism */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <div className="grid gap-16 lg:grid-cols-2 items-start">
              <div>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
                  Why it matters
                </p>
                <h2 className="text-h1 font-heading font-bold text-ink">
                  Why a generalist agency isn't enough
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-body-lg text-ink-muted leading-relaxed">
                  A generalist agency doesn't understand why you can't publish testimonials with
                  resident names, or why ad copy needs to avoid implied health claims. They don't
                  know that families searching for care are often in crisis, and that your marketing
                  needs to lead with empathy, not sales language.
                </p>
                <p className="text-body-lg text-ink-muted leading-relaxed">
                  They won't know to check your CQC rating narrative before they write about your
                  quality of care, or how GDPR applies to the photos you publish of residents and
                  staff. We do, because we only work in this sector.
                </p>
                <p className="text-body-lg text-ink-muted leading-relaxed">
                  That specialism means faster delivery, fewer revisions, and marketing that works
                  in the real context of a regulated care service.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 4, Process */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              How an engagement runs
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-16">Our process</h2>
          </FadeIn>
          <div className="grid gap-0 divide-y divide-border">
            {PROCESS.map((p, i) => (
              <FadeIn key={p.step} delay={i * 60}>
                <div className="grid gap-8 py-10 sm:grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr]">
                  <p className="text-display-2 font-heading font-bold text-accent/30 leading-none">
                    {p.step}
                  </p>
                  <div>
                    <h3 className="text-h2 font-heading font-bold text-ink mb-3">{p.title}</h3>
                    <p className="text-body-lg text-ink-muted leading-relaxed max-w-2xl">{p.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5, Featured work */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              Featured work
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              What we've done for care providers
            </h2>
          </FadeIn>
          {/* PLACEHOLDER: real case studies from TRG */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { client: "[PLACEHOLDER] Care home group", outcome: "[PLACEHOLDER] Marketing outcome. Real case study pending from TRG.", href: "/contact" },
              { client: "[PLACEHOLDER] Nursing home", outcome: "[PLACEHOLDER] Marketing outcome. Real case study pending from TRG.", href: "/contact" },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 80}>
                <CaseStudyCard {...c} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6, CTA band */}
      <CtaBand
        headline="Ready to improve your care marketing?"
        ctaLabel="Talk to us"
        ctaHref="/contact"
      />
    </>
  )
}
