import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { TeamMemberCard } from "@/components/cards/team-member-card"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata = buildMetadata({
  title: "About",
  description: "We exist because care operators deserve software that truly understands their world.",
  path: "/about",
})

// PLACEHOLDER: replace with real team data from TRG
const TEAM = [
  { name: "Team Member", role: "Role [PLACEHOLDER]", bio: "Bio pending from TRG Digital.", linkedin: undefined },
  { name: "Team Member", role: "Role [PLACEHOLDER]", bio: "Bio pending from TRG Digital.", linkedin: undefined },
  { name: "Team Member", role: "Role [PLACEHOLDER]", bio: "Bio pending from TRG Digital.", linkedin: undefined },
  { name: "Team Member", role: "Role [PLACEHOLDER]", bio: "Bio pending from TRG Digital.", linkedin: undefined },
]

const VALUES = [
  { title: "Care first", body: "Every product decision is tested against one question: does this make life easier for someone delivering or receiving care?" },
  { title: "Honest about limits", body: "We tell clients when something isn't the right fit for their needs, even when it means recommending a competitor." },
  { title: "Regulation as a given", body: "CQC compliance, GDPR, and data security aren't checkbox exercises. They're baked into how we design and build." },
  { title: "Long-term thinking", body: "We build relationships, not projects. Most of our clients have been with us for years." },
]

const APPROACH_STEPS = [
  { step: "01", title: "Discovery", body: "We spend time with your team, in your environment, understanding the workflows that matter before we write a line of code." },
  { step: "02", title: "Design", body: "Prototypes and user testing with the people who'll actually use the product, not just stakeholders in a meeting room." },
  { step: "03", title: "Build", body: "Iterative delivery. You see working software early and often, not a big reveal at the end." },
  { step: "04", title: "Support", body: "We stay involved after launch, training, iteration, and a direct line to the team who built your system." },
]

export default function AboutPage() {
  return (
    <>
      {/* 1, Hero */}
      {/* PLACEHOLDER: sign-off headline with TRG */}
      <Hero
        variant="type"
        eyebrow="About TRG Digital"
        headline="We exist because care operators deserve software that understands their world."
      />

      {/* 2, Origin / story */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-6">
                  Our story
                </p>
                {/* PLACEHOLDER: real origin story from TRG, do not invent */}
                <p className="text-body-lg text-ink leading-relaxed">
                  [PLACEHOLDER, TRG Digital origin story pending. Who founded the studio, what
                  experience in care drove that decision, and what the company set out to fix.]
                </p>
                <p className="text-body-lg text-ink-muted leading-relaxed mt-6">
                  [PLACEHOLDER, second paragraph covering how the company has grown and what
                  the current focus areas are.]
                </p>
              </div>
              <div className="space-y-6">
                {/* PLACEHOLDER: key facts / numbers, no invented metrics */}
                {["[PLACEHOLDER] Key fact about TRG Digital", "[PLACEHOLDER] Key fact about TRG Digital", "[PLACEHOLDER] Key fact about TRG Digital"].map((fact, i) => (
                  <div key={i} className="border-l-2 border-accent pl-6">
                    <p className="text-body text-ink-muted">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 3, Team */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              The team
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              The people behind the software
            </h2>
          </FadeIn>
          {/* PLACEHOLDER: real team headshots and bios from TRG */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <FadeIn key={i} delay={i * 60}>
                <TeamMemberCard {...member} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4, Values */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              What we stand for
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">Our principles</h2>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 80}>
                <div className="rounded-lg border border-border bg-surface p-8">
                  <h3 className="text-h3 font-heading font-bold text-ink mb-3">{v.title}</h3>
                  <p className="text-body text-ink-muted leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5, Approach */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              How we work
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-16">Our approach</h2>
          </FadeIn>
          <div className="grid gap-0 divide-y divide-border">
            {APPROACH_STEPS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 60}>
                <div className="grid gap-8 py-10 sm:grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr]">
                  <p className="text-display-2 font-heading font-bold text-accent/30 leading-none">
                    {s.step}
                  </p>
                  <div>
                    <h3 className="text-h2 font-heading font-bold text-ink mb-3">{s.title}</h3>
                    <p className="text-body-lg text-ink-muted leading-relaxed max-w-2xl">{s.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6, CTA band */}
      <CtaBand
        headline="Want to know more? Talk to us."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />
    </>
  )
}
