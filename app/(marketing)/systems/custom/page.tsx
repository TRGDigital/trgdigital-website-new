import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { FadeIn } from "@/components/ui/fade-in"
import { TalkToUsButton } from "@/components/ui/talk-to-us-button"

export const metadata = buildMetadata({
  title: "Custom Builds",
  description: "When the system you need doesn't exist yet, we build it, scoped to your workflows, integrated with your existing tools.",
  path: "/systems/custom",
})

const SCENARIOS = [
  { title: "Unusual workflows", body: "Your care model doesn't fit standard software assumptions, e.g. specialist dementia care, extra-care housing, or multi-site group operations with complex reporting." },
  { title: "Multi-system integrations", body: "You need several existing tools to talk to each other, and no off-the-shelf middleware covers your specific combination." },
  { title: "Legacy migration", body: "You're running critical processes on aging software and need a safe, phased path to something modern, without disrupting day-to-day care." },
  { title: "Group-level consolidation", body: "You run multiple homes and need a single platform that surfaces data across the group, not fragmented per site." },
]

const CAPABILITIES = [
  "Web applications", "Mobile apps", "API integrations", "AI & automation",
  "Dashboards & reporting", "Data migration", "Legacy modernisation", "Bespoke tools",
]

const PHASES = [
  { step: "01", title: "Discovery", body: "We spend time understanding your workflows, data, and constraints before proposing anything. No assumptions." },
  { step: "02", title: "Prototype", body: "A working prototype in your hands early, so you can validate the approach before significant build effort is committed." },
  { step: "03", title: "Build", body: "Iterative delivery with regular demos. You see real progress every two weeks, not a big reveal at the end." },
  { step: "04", title: "Launch", body: "Structured go-live with staff training, data migration, and a monitored cutover, not a switch-flip and fingers crossed." },
  { step: "05", title: "Support", body: "Ongoing support, iteration, and a direct line to the team who built it. We don't hand over and disappear." },
]

export default function CustomBuildsPage() {
  return (
    <>
      {/* 1, Hero */}
      <Hero
        variant="type"
        eyebrow="Custom builds"
        headline="When the system you need | doesn't exist yet."
        subheadline="Some care operations have workflows too specific for any off-the-shelf product. When that's the case, we build it."
        primaryCta={{ label: "Start a conversation", href: "/contact?subject=custom-build" }}
      />

      {/* 2, When custom makes sense */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              Is custom right for you?
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              When custom makes sense
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {SCENARIOS.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div className="rounded-lg border border-border bg-surface p-8 h-full">
                  <h3 className="text-h3 font-heading font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-body text-ink-muted leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10">
              <TalkToUsButton subject="Custom build" />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 3, Engagement model */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              How it works
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-16">Our engagement model</h2>
          </FadeIn>
          <div className="grid gap-0 divide-y divide-border">
            {PHASES.map((p, i) => (
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

      {/* 4, Capabilities */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              What we build
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-10">Capabilities</h2>
            <div className="flex flex-wrap gap-3">
              {CAPABILITIES.map((cap) => (
                <span
                  key={cap}
                  className="rounded-full border border-border bg-surface px-5 py-2 text-body font-medium text-ink"
                >
                  {cap}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 5, Example builds */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              Example builds
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              What we've built for care operators
            </h2>
          </FadeIn>
          {/* PLACEHOLDER: real anonymised examples from TRG */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { client: "[PLACEHOLDER] Care group", outcome: "[PLACEHOLDER] Description of the custom build and the outcome for the client. Real example pending from TRG.", href: "/contact" },
              { client: "[PLACEHOLDER] Nursing home", outcome: "[PLACEHOLDER] Description of the custom build and the outcome for the client. Real example pending from TRG.", href: "/contact" },
              { client: "[PLACEHOLDER] Home-care agency", outcome: "[PLACEHOLDER] Description of the custom build and the outcome for the client. Real example pending from TRG.", href: "/contact" },
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
        headline="Tell us about your problem."
        ctaLabel="Start a conversation"
        ctaHref="/contact?subject=custom-build"
      />
    </>
  )
}
