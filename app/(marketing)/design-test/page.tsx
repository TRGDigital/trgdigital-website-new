// DEV ONLY, delete before launch
import { Container } from "@/components/primitives/container"
import { Section } from "@/components/primitives/section"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Marquee } from "@/components/sections/marquee"
import { SystemCard } from "@/components/cards/system-card"
import { ArticleCard } from "@/components/cards/article-card"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { TeamMemberCard } from "@/components/cards/team-member-card"

const colours = [
  { token: "--color-surface", label: "surface", bg: "bg-surface", border: true },
  { token: "--color-surface-alt", label: "surface-alt", bg: "bg-surface-alt", border: true },
  { token: "--color-surface-dark", label: "surface-dark", bg: "bg-surface-dark", border: false },
  { token: "--color-ink", label: "ink", bg: "bg-ink", border: false },
  { token: "--color-ink-muted", label: "ink-muted", bg: "bg-ink-muted", border: false },
  { token: "--color-ink-subtle", label: "ink-subtle", bg: "bg-ink-subtle", border: false },
  { token: "--color-accent", label: "accent", bg: "bg-accent", border: false },
  { token: "--color-accent-hover", label: "accent-hover", bg: "bg-accent-hover", border: false },
  { token: "--color-border", label: "border", bg: "bg-border", border: true },
]

export default function DesignTestPage() {
  return (
    <div className="bg-surface">
      {/* ── Index ──────────────────────────────────────────────── */}
      <Container className="py-12">
        <h1 className="text-h1 font-heading font-bold mb-2">Design System, Visual QA</h1>
        <p className="text-small text-ink-muted mb-8">Dev-only route. Delete before launch.</p>
        <nav aria-label="Jump to section" className="flex flex-wrap gap-3">
          {[
            "typography","colour","sections","hero-type","hero-image","hero-media",
            "cta-band","feature-block","marquee","system-cards","article-cards",
            "case-study-cards","team-cards",
          ].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-small text-accent underline underline-offset-2 hover:opacity-70"
            >
              {id}
            </a>
          ))}
        </nav>
      </Container>

      {/* ── Typography ─────────────────────────────────────────── */}
      <Container className="py-12" id="typography">
        <h2 className="text-h2 font-bold mb-8 pb-4 border-b border-border">Typography</h2>
        <div className="space-y-8">
          {[
            { cls: "text-display-1", label: "display-1, 48px→96px / lh 1.05", sample: "Stop firefighting paperwork." },
            { cls: "text-display-2", label: "display-2, 36px→64px / lh 1.05", sample: "Software built for care." },
            { cls: "text-h1",        label: "h1, 32px→48px / lh 1.2",          sample: "Our proprietary systems" },
            { cls: "text-h2",        label: "h2, 24px→36px / lh 1.2",          sample: "CareStream overview" },
            { cls: "text-h3",        label: "h3, 20px→24px / lh 1.2",          sample: "Feature highlight" },
            { cls: "text-body-lg",   label: "body-lg, 18px→20px / lh 1.6",     sample: "TRG Digital builds software for the UK care sector. Every product shaped by real-world care operations." },
            { cls: "text-body",      label: "body, 16px→17px / lh 1.6",         sample: "Our team has deep roots in care operations." },
            { cls: "text-small",     label: "small, 14px / lh 1.5",             sample: "Published 12 April 2026 · 5 min read · CQC & Compliance" },
          ].map(({ cls, label, sample }) => (
            <div key={cls}>
              <p className="text-small text-ink-muted mb-1 font-mono">{label}</p>
              <p className={`${cls} font-heading font-bold`}>{sample}</p>
            </div>
          ))}
          <div>
            <p className="text-small text-ink-muted mb-1 font-mono">font-mono</p>
            <p className="font-mono text-body">const careHome = await getCareHome(id)</p>
          </div>
        </div>
      </Container>

      <div className="h-px bg-border" />

      {/* ── Colour ─────────────────────────────────────────────── */}
      <Container className="py-12" id="colour">
        <h2 className="text-h2 font-bold mb-8 pb-4 border-b border-border">Colour</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
          {colours.map(({ token, label, bg, border }) => (
            <div key={token} className={`overflow-hidden rounded-md ${border ? "border border-border" : ""}`}>
              <div className={`${bg} h-16`} />
              <div className="pt-2">
                <p className="text-small font-mono font-medium text-ink">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="h-px bg-border" />

      {/* ── Section variants ───────────────────────────────────── */}
      <div id="sections">
        <Container className="py-8">
          <h2 className="text-h2 font-bold mb-2">Section variants</h2>
        </Container>
        <Section variant="default">
          <Container>
            <p className="text-h3 font-semibold">default, bg-surface</p>
          </Container>
        </Section>
        <Section variant="alt">
          <Container>
            <p className="text-h3 font-semibold">alt, bg-surface-alt</p>
          </Container>
        </Section>
        <Section variant="dark">
          <Container>
            <p className="text-h3 font-semibold">dark, bg-surface-dark</p>
          </Container>
        </Section>
      </div>

      {/* ── Hero: type ─────────────────────────────────────────── */}
      <div id="hero-type">
        <Container className="py-8">
          <h2 className="text-h2 font-bold mb-2">Hero, type variant</h2>
        </Container>
        <Hero
          variant="type"
          eyebrow="About TRG Digital"
          headline="Software built for | the way care actually runs."
          subheadline="We specialise in CQC-aware technology for residential care homes, nursing homes, and home-care agencies across the UK."
          primaryCta={{ label: "Our systems", href: "/systems" }}
          secondaryCta={{ label: "Talk to us", href: "/contact" }}
        />
      </div>

      {/* ── Hero: image ────────────────────────────────────────── */}
      <div id="hero-image">
        <Container className="py-8">
          <h2 className="text-h2 font-bold mb-2">Hero, image variant</h2>
        </Container>
        <Hero
          variant="image"
          eyebrow="CareStream"
          headline="Care management | reimagined."
          subheadline="Reduce paperwork, improve compliance, and give staff more time with residents."
          primaryCta={{ label: "Book a demo", href: "/contact?subject=carestream" }}
          imageSide="right"
        />
      </div>

      {/* ── Hero: media ────────────────────────────────────────── */}
      <div id="hero-media">
        <Container className="py-8">
          <h2 className="text-h2 font-bold mb-2">Hero, media variant (no video: shows dark bg)</h2>
        </Container>
        <Hero
          variant="media"
          eyebrow="TRG Digital"
          headline="Stop firefighting paperwork. | Start caring."
          subheadline="CareTech software, websites, and bespoke builds for the UK care sector."
          primaryCta={{ label: "See our systems", href: "/systems" }}
          secondaryCta={{ label: "Talk to us", href: "/contact" }}
        />
      </div>

      {/* ── CtaBand ────────────────────────────────────────────── */}
      <div id="cta-band">
        <Container className="py-8">
          <h2 className="text-h2 font-bold mb-2">CtaBand</h2>
        </Container>
        <CtaBand
          headline="Ready to make your care operation more efficient?"
          ctaLabel="Talk to us"
          ctaHref="/contact"
        />
      </div>

      {/* ── FeatureBlock ───────────────────────────────────────── */}
      <div id="feature-block">
        <Container className="py-8">
          <h2 className="text-h2 font-bold mb-2">FeatureBlock</h2>
        </Container>
        <FeatureBlock
          imageSide="left"
          eyebrow="CareStream"
          headline="Built around how your staff actually work."
          body="CareStream replaces disconnected spreadsheets and paper-based records with a single, CQC-aware platform. From daily care notes to medication administration, everything your team needs is one tap away."
          cta={{ label: "Learn about CareStream", href: "/systems/carestream" }}
        />
        <div className="h-px bg-border" />
        <FeatureBlock
          imageSide="right"
          eyebrow="CareAssura"
          headline="Your care home, found by the families who need it."
          body="CareAssura puts your care home in front of families actively searching for a place. A detailed profile, real reviews, and local SEO, all managed from one dashboard."
          cta={{ label: "Learn about CareAssura", href: "/systems/careassura" }}
        />
      </div>

      {/* ── Marquee ────────────────────────────────────────────── */}
      <div id="marquee">
        <Container className="py-8">
          <h2 className="text-h2 font-bold mb-2">Marquee</h2>
        </Container>
        <Marquee>
          {[
            "Residential care homes",
            "Nursing homes",
            "Home-care agencies",
            "Care groups",
            "Specialist care",
            "Supported living",
          ].map((item) => (
            <span key={item} className="text-h3 font-heading font-bold text-ink whitespace-nowrap">
              {item}
            </span>
          ))}
        </Marquee>
      </div>

      {/* ── SystemCard ─────────────────────────────────────────── */}
      <Section variant="alt" id="system-cards">
        <Container>
          <h2 className="text-h2 font-bold mb-8">SystemCard</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SystemCard
              name="CareStream"
              tagline="Care management platform"
              description="A single platform for care notes, medication, staffing, and compliance, built for CQC inspection readiness."
              href="/systems/carestream"
            />
            <SystemCard
              name="CareAssura"
              tagline="Care home directory"
              description="Get found by families searching for care. Detailed profiles, reviews, and local SEO from one dashboard."
              href="/systems/careassura"
            />
            <SystemCard
              name="Custom Builds"
              tagline="Bespoke care software"
              description="When the system you need doesn't exist yet, we build it. Scoped to your workflows, integrated with your existing tools."
              href="/systems/custom"
            />
          </div>
        </Container>
      </Section>

      {/* ── ArticleCard ────────────────────────────────────────── */}
      <Section id="article-cards">
        <Container>
          <h2 className="text-h2 font-bold mb-8">ArticleCard</h2>
          <p className="text-small text-ink-muted mb-6">Featured (large):</p>
          <div className="mb-8">
            <ArticleCard
              tag="CQC & Compliance"
              title="Preparing for your next CQC inspection: a digital readiness checklist"
              excerpt="What to digitise, what to document, and what to leave alone before inspection day."
              date="12 Apr 2026"
              readingTime="5 min read"
              href="/blog/cqc-prep-checklist"
              featured
            />
          </div>
          <p className="text-small text-ink-muted mb-6">Grid (standard):</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { tag: "Care Tech", title: "How eMAR is changing medication management in care homes", excerpt: "Electronic medication administration records are reducing errors and saving time across the sector.", date: "3 May 2026", readingTime: "4 min read", href: "/blog/emar-rollout" },
              { tag: "Operations", title: "Five things every care home manager wishes they'd automated sooner", excerpt: "From rotas to incident reporting, these are the tasks that eat the most time.", date: "18 Apr 2026", readingTime: "6 min read", href: "/blog/automation" },
              { tag: "AI in Care", title: "What AI can and can't do in a regulated care environment", excerpt: "Honest, practical guidance on where AI helps and where it creates compliance risk.", date: "2 Apr 2026", readingTime: "7 min read", href: "/blog/ai-in-care" },
            ].map((post) => (
              <ArticleCard key={post.href} {...post} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CaseStudyCard ──────────────────────────────────────── */}
      <Section variant="alt" id="case-study-cards">
        <Container>
          <h2 className="text-h2 font-bold mb-8">CaseStudyCard</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { client: "Midlands Care Group", outcome: "Reduced medication errors by consolidating five disparate systems into CareStream.", href: "/case-studies/midlands" },
              { client: "Sunrise Home Care", outcome: "Doubled organic enquiries within six months of launching a CareAssura profile.", href: "/case-studies/sunrise" },
              { client: "Hartfield Nursing", outcome: "Passed CQC inspection with Outstanding rating after switching to digital care records.", href: "/case-studies/hartfield" },
            ].map((c) => (
              <CaseStudyCard key={c.href} {...c} />
            ))}
          </div>
          <p className="text-small text-ink-muted mt-4">
            {/* PLACEHOLDER */}Above are placeholder case studies, real ones pending from TRG.
          </p>
        </Container>
      </Section>

      {/* ── TeamMemberCard ─────────────────────────────────────── */}
      <Section id="team-cards">
        <Container>
          <h2 className="text-h2 font-bold mb-8">TeamMemberCard</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Jane Smith", role: "Head of Care Tech", bio: "Twelve years in care home operations before joining TRG Digital. Leads our product strategy.", linkedin: "https://linkedin.com/in/jane-smith" },
              { name: "David Okafor", role: "Lead Engineer", bio: "Full-stack engineer with a background in regulated healthcare systems and data security.", linkedin: "https://linkedin.com/in/david-okafor" },
              { name: "Sarah Patel", role: "Design Lead", bio: "Designs experiences for high-stakes environments. Previously NHS digital services.", linkedin: "https://linkedin.com/in/sarah-patel" },
              { name: "Tom Williams", role: "Client Success", bio: "Works with care operators to get the most from their TRG systems.", linkedin: undefined },
            ].map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
          <p className="text-small text-ink-muted mt-4">
            {/* PLACEHOLDER */}Hover to reveal LinkedIn. Photos pending from TRG.
          </p>
        </Container>
      </Section>

      {/* ── Focus / a11y ───────────────────────────────────────── */}
      <Section variant="alt">
        <Container>
          <h2 className="text-h2 font-bold mb-8 pb-4 border-b border-border">
            Accessibility, focus rings
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-md bg-accent px-4 py-2 text-ink-inverse text-body focus:outline-2 focus:outline-offset-2 focus:outline-accent">
              Tab to this button
            </button>
            <a href="#typography" className="text-accent underline underline-offset-2 text-body focus:outline-2 focus:outline-offset-2 focus:outline-accent">
              Tab to this link
            </a>
          </div>
        </Container>
      </Section>
    </div>
  )
}
