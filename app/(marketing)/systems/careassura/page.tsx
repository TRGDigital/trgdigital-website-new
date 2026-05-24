import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"
import { TalkToUsButton } from "@/components/ui/talk-to-us-button"

export const metadata = buildMetadata({
  title: "CareAssura — The UK Care Home Directory for Providers and Families",
  description: "CareAssura helps families find the right care home and helps providers get found. Rich profiles, review management, local SEO, and a provider dashboard built for the UK care sector.",
  path: "/systems/careassura",
})

const FEATURES = [
  {
    icon: "🏠",
    title: "Rich care home profiles",
    description: "Detailed profiles covering care types, facilities, staff, CQC rating, photos, and your going-digital score. Give families everything they need to choose with confidence.",
  },
  {
    icon: "⭐",
    title: "Review management",
    description: "Collect and showcase family reviews on your profile. Respond to feedback, build trust with prospective families, and demonstrate your commitment to quality.",
  },
  {
    icon: "🔍",
    title: "Local SEO",
    description: "CareAssura is built for local search. When a family searches 'nursing home near me' or 'dementia care in Guildford', your profile is where they land — not buried in generic results.",
  },
  {
    icon: "📊",
    title: "Provider dashboard",
    description: "Manage your profile, respond to enquiries, track who's viewed your listing, and see which search terms are driving traffic — all in one place.",
  },
  {
    icon: "📈",
    title: "Enquiry analytics",
    description: "See how many families are viewing your profile, which sections they spend time on, and how many convert to enquiries. Understand what's working and what isn't.",
  },
  {
    icon: "🗺️",
    title: "Interactive map explorer",
    description: "Families can explore care homes on an interactive map, filtered by care type, CQC rating, distance, and specialist needs. Your location is a feature, not a footnote.",
  },
  {
    icon: "📱",
    title: "Going digital score",
    description: "Showcase your digital maturity — from electronic care records to medication management software. Families increasingly choose digitally mature homes. CareAssura makes that visible.",
  },
  {
    icon: "❤️",
    title: "Family shortlisting",
    description: "Families can save and compare homes side-by-side. When your home is shortlisted, you know there's genuine intent — not just a casual browse.",
  },
  {
    icon: "🏛️",
    title: "Local authority information",
    description: "CareAssura surfaces local authority placement information, funding guidance, and CHC eligibility tools alongside provider profiles — giving families the full picture in one place.",
  },
]

const WHO = [
  {
    title: "Care homes",
    body: "Whether you're an independent home or part of a group, CareAssura gives you a professional presence that ranks in local search and converts family interest into enquiries.",
  },
  {
    title: "Nursing homes",
    body: "Complex nursing needs require detailed profiles. CareAssura lets you showcase your clinical specialisms, staffing ratios, equipment, and CQC rating in a format families understand.",
  },
  {
    title: "Home care agencies",
    body: "Home care is increasingly searched online. CareAssura helps domiciliary care providers appear in local search results alongside care homes — reaching families at the moment they're looking.",
  },
]

export default function CareAssuraPage() {
  return (
    <>
      <Hero
        variant="image"
        logo={{ src: "/careassura-logo.png", alt: "CareAssura", width: 449, height: 266 }}
        headline="Get found by the families who need you."
        subheadline="CareAssura is the UK's care home directory built for providers who want to be found, and for families who deserve better than a generic Google search."
        primaryCta={{ label: "Claim your profile", href: "/contact?subject=careassura" }}
        secondaryCta={{ label: "Search the directory", href: "https://www.careassura.co.uk" }}
        imageSide="right"
        image={{ src: "/images/hero-careassura.jpg", alt: "Team collaborating on care planning", width: 1400, height: 933 }}
      />

      {/* Problem */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">The problem</p>
              <p className="text-h2 font-heading font-bold text-ink leading-snug">
                Most families have never had to find a care home before. When they search online, they find outdated directories, missing information, and no meaningful way to compare what actually matters.
              </p>
              <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
                At the same time, care homes with outstanding CQC ratings, warm environments, and specialist expertise are invisible online — losing enquiries to providers who simply happen to rank higher. CareAssura fixes both sides of that equation.
              </p>
              <div className="mt-8">
                <TalkToUsButton subject="CareAssura" />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Feature grid */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <h2 className="text-h1 font-heading font-bold text-ink mb-4">Everything families need to find you</h2>
            <p className="text-body-lg text-ink-muted mb-12 max-w-2xl">A profile that works as hard as you do — 24 hours a day, seven days a week.</p>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 60}>
                <div className="rounded-lg border border-border bg-surface p-6 h-full">
                  <p className="text-2xl mb-4" aria-hidden="true">{f.icon}</p>
                  <h3 className="text-h3 font-heading font-bold text-ink mb-2">{f.title}</h3>
                  <p className="text-body text-ink-muted leading-relaxed">{f.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Feature detail — Profiles */}
      <FeatureBlock
        imageSide="left"
        eyebrow="Care home profiles"
        headline="A profile that tells your full story."
        body="CareAssura profiles go far beyond a name and address. Care types, specialisms, staffing ratios, facilities, going-digital score, CQC rating, photo galleries, and family reviews — all in one place, optimised to appear in local search results when families are actively looking. Manage everything from your provider dashboard with no technical knowledge required."
        image={{ src: "/images/feature-careassura.jpg", alt: "Nurse in care setting", width: 960, height: 560 }}
      />

      <FeatureBlock
        imageSide="right"
        eyebrow="Family tools"
        headline="Helping families make the most important decision they'll ever face."
        body="CareAssura isn't just a directory — it's a decision-making platform. Families can filter by care type, CQC rating, specialist needs, and distance. They can shortlist and compare homes side-by-side. They can access local authority funding guidance, CHC eligibility tools, and a care jargon buster. When they're ready to enquire, your profile is right there."
        image={{ src: "/images/feature-digital.jpg", alt: "Analytics dashboard", width: 960, height: 560 }}
      />

      <FeatureBlock
        imageSide="left"
        eyebrow="Provider dashboard"
        headline="See exactly who's looking at your home — and why."
        body="The provider dashboard gives you a real-time view of profile views, shortlists, and enquiry conversions. See which search terms bring families to your profile, which sections they spend the most time on, and how your CQC rating and going-digital score affect engagement. Make data-informed decisions about how to present your home."
        image={{ src: "/images/feature-marketing.jpg", alt: "Provider reviewing analytics", width: 960, height: 560 }}
      />

      {/* Who it's for */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Who it's for</p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">Built for every care provider</h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {WHO.map((w, i) => (
              <FadeIn key={w.title} delay={i * 80}>
                <div className="rounded-lg border border-border bg-surface p-8 h-full">
                  <h3 className="text-h3 font-heading font-bold text-ink mb-3">{w.title}</h3>
                  <p className="text-body text-ink-muted leading-relaxed">{w.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Group accounts */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Care groups</p>
                <h2 className="text-h1 font-heading font-bold text-ink mb-6">Manage every home in your group from one account.</h2>
                <p className="text-body-lg text-ink-muted leading-relaxed mb-6">
                  Group operators can manage profiles across multiple sites from a single dashboard. Consistent branding, centralised review oversight, and group-level analytics — without losing the local identity that makes each home unique.
                </p>
                <p className="text-body-lg text-ink-muted leading-relaxed">
                  Sponsorship and featured listing options give group operators increased visibility across relevant local search results — putting your homes in front of more families, in more locations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Group dashboard", sub: "All homes in one view" },
                  { label: "Centralised reviews", sub: "Respond from one login" },
                  { label: "Group analytics", sub: "Portfolio-wide performance" },
                  { label: "Sponsorship options", sub: "Featured listings across locations" },
                  { label: "Consistent branding", sub: "Group identity, home personality" },
                  { label: "Role-based access", sub: "Right access for right people" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-border bg-surface p-4">
                    <p className="text-body font-semibold text-ink">{item.label}</p>
                    <p className="text-small text-ink-muted mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <CtaBand
        headline="Claim your CareAssura profile"
        ctaLabel="Get started"
        ctaHref="/contact?subject=careassura"
      />
    </>
  )
}
