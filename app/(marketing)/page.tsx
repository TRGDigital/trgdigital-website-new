import type { Metadata } from "next"
import Image from "next/image"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Marquee } from "@/components/sections/marquee"
import { SystemCard } from "@/components/cards/system-card"
import { ArticleCard } from "@/components/cards/article-card"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"
import { getAllPosts, formatDate } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "TRG Digital: CareTech software for the UK care sector",
  description:
    "CareTech software, websites, and bespoke builds for the UK care sector.",
}

const SYSTEMS = [
  {
    name: "CareStream",
    tagline: "Care management platform",
    description:
      "A single platform for care notes, medication, staffing, and compliance, built around how your team actually works.",
    href: "/systems/carestream",
    logo: "/carestream-logo.png",
  },
  {
    name: "CareAssura",
    tagline: "Care home directory",
    description:
      "Get found by families searching for care. Detailed profiles, reviews, and local SEO managed from one dashboard.",
    href: "/systems/careassura",
    logo: "/careassura-logo.png",
  },
  {
    name: "Custom Builds",
    tagline: "Bespoke care software",
    description:
      "When an off-the-shelf system doesn't fit your workflows, we build the one that does.",
    href: "/systems/custom",
  },
]

const CLIENTS = [
  { name: "Sea Harbour Nursing Home", logo: "/images/clients/sea-harbour.png" },
  { name: "Charlotte House Nursing Home", logo: "/images/clients/charlotte-house.png" },
  { name: "Gateway Care Home", logo: "/images/clients/gateway.png" },
  { name: "Oakhall Nursing Home", logo: "/images/clients/oakhall.png" },
  { name: "Sunninghill Care Home", logo: "/images/clients/sunninghill.png" },
  { name: "Laureate Court Care Home", logo: "/images/clients/laureate-court.png" },
  { name: "Queen Elizabeth Care Centre", logo: "/images/clients/queen-elizabeth.png" },
]

const PILLARS = [
  {
    title: "Care-sector specialism",
    body: "We only work in care. Every decision we make is shaped by regulatory requirements and the realities of running a care service day to day.",
  },
  {
    title: "In-house build team",
    body: "No outsourcing. Our engineers, designers, and care specialists work together so nothing gets lost in translation.",
  },
  {
    title: "CQC-aware design",
    body: "Our systems are built with CQC inspection readiness in mind, compliance is a core feature, not a bolt-on.",
  },
  {
    title: "Ongoing partnership",
    body: "We don't disappear after launch. We train your staff, iterate on feedback, and stay alongside you as your needs evolve.",
  },
]

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3)
  return (
    <>
      {/* 1, Hero */}
      <Hero
        variant="media"
        eyebrow="TRG Digital"
        headline="Stop firefighting paperwork. | Start caring."
        subheadline="CareTech software, websites, and bespoke builds for UK care providers."
        primaryCta={{ label: "See our systems", href: "/systems" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
        backgroundImage={{ src: "/images/hero-home.jpg", alt: "Carer and elderly resident in a care home lounge" }}
        bleedIntoNav
      />

      {/* 2, Positioning block */}
      <Section variant="default">
        <Container>
          <FadeIn>
            {/* PLACEHOLDER: sign-off positioning statement with TRG */}
            <p className="text-display-2 font-heading font-bold text-ink max-w-4xl">
              We build software for the way care actually runs, not the way a spreadsheet thinks it does.
            </p>
            <p className="text-body-lg text-ink-muted mt-8 max-w-2xl">
              TRG Digital is a UK CareTech studio. We work exclusively with care-home operators,
              nursing homes, and home-care agencies, building the systems, websites, and tools they
              need to deliver better care.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* 3, Systems showcase */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              Our systems
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              Proprietary platforms built for care
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SYSTEMS.map((s, i) => (
              <FadeIn key={s.name} delay={i * 80}>
                <SystemCard {...s} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4, Client logo marquee */}
      <Marquee heading="Some of our clients">
        {CLIENTS.map((client) => (
          <Image
            key={client.name}
            src={client.logo}
            alt={client.name}
            width={180}
            height={60}
            className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </Marquee>

      {/* 5, Case study teasers */}
      {/* PLACEHOLDER: real case studies pending from TRG */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              Case studies
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              Results that speak for themselves
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { client: "Midlands Care Group", outcome: "[PLACEHOLDER] Outcome of TRG Digital engagement. Real copy pending from TRG.", href: "/systems" },
              { client: "Sunrise Home Care", outcome: "[PLACEHOLDER] Outcome of TRG Digital engagement. Real copy pending from TRG.", href: "/systems" },
              { client: "Hartfield Nursing", outcome: "[PLACEHOLDER] Outcome of TRG Digital engagement. Real copy pending from TRG.", href: "/systems" },
            ].map((c, i) => (
              <FadeIn key={c.client} delay={i * 80}>
                <CaseStudyCard {...c} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6, Why TRG */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              Why TRG Digital
            </p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">
              Built different, because care is different
            </h2>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div className="rounded-lg border border-border bg-surface p-8">
                  <h3 className="text-h3 font-heading font-bold text-ink mb-3">{p.title}</h3>
                  <p className="text-body text-ink-muted leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7, Latest insights */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
                  Insights
                </p>
                <h2 className="text-h1 font-heading font-bold text-ink">
                  Latest from the blog
                </h2>
              </div>
              <a
                href="/blog"
                className="hidden sm:inline text-body font-semibold text-accent underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                View all →
              </a>
            </div>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 80}>
                <ArticleCard
                  tag={post.tags[0] ?? "Insights"}
                  title={post.title}
                  excerpt={post.description}
                  date={formatDate(post.publishedAt)}
                  readingTime={post.readingTime}
                  href={`/blog/${post.slug}`}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8, CTA band */}
      <CtaBand
        headline="Ready to make your care operation more efficient?"
        ctaLabel="Talk to us"
        ctaHref="/contact"
      />
    </>
  )
}
