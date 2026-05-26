import { buildMetadata } from "@/lib/seo"
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

function SystemsHeroMockup() {
  const products = [
    {
      name: "CareStream",
      tagline: "AI policy assistant",
      icon: "💬",
      accent: "bg-blue-500",
      light: "bg-blue-50",
      border: "border-blue-100",
      text: "text-blue-700",
      stat: "34 queries today",
    },
    {
      name: "CareAssura",
      tagline: "Care home directory",
      icon: "🏠",
      accent: "bg-green-500",
      light: "bg-green-50",
      border: "border-green-100",
      text: "text-green-700",
      stat: "12 profile views",
    },
    {
      name: "CareRota",
      tagline: "Rota & payroll",
      icon: "📅",
      accent: "bg-purple-500",
      light: "bg-purple-50",
      border: "border-purple-100",
      text: "text-purple-700",
      stat: "Rota published",
    },
    {
      name: "[PRODUCT NAME]",
      tagline: "Enquiry generation",
      icon: "🎚️",
      accent: "bg-amber-500",
      light: "bg-amber-50",
      border: "border-amber-100",
      text: "text-amber-700",
      stat: "7 new enquiries",
    },
  ]

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-slate-100 border-b border-slate-200 px-3 py-2.5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 bg-white rounded-md border border-slate-200 flex items-center gap-1.5 px-2 py-1">
          <div className="w-2 h-2 rounded-full border border-slate-300" />
          <span className="text-[9px] text-slate-400 font-mono">trgdigital.co.uk/portal</span>
        </div>
      </div>
      {/* Portal header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">T</span>
          </div>
          <span className="text-[10px] font-semibold text-white">TRG Digital</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full font-medium">All systems active</span>
          <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
          </div>
        </div>
      </div>
      {/* Product grid */}
      <div className="p-4 bg-slate-50">
        <p className="text-[8px] font-semibold uppercase tracking-widest text-slate-400 mb-3">Your platforms</p>
        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <div key={p.name} className={`rounded-lg border ${p.border} bg-white p-3`}>
              <div className="flex items-start justify-between mb-2">
                <div className={`w-7 h-7 rounded-lg ${p.light} flex items-center justify-center text-sm`}>
                  {p.icon}
                </div>
                <span className={`text-[7px] ${p.light} ${p.text} font-semibold px-1.5 py-0.5 rounded-full border ${p.border}`}>Active</span>
              </div>
              <p className="text-[9px] font-bold text-slate-800 leading-none">{p.name}</p>
              <p className="text-[7px] text-slate-400 mt-0.5 mb-2">{p.tagline}</p>
              <div className={`h-0.5 w-full rounded-full ${p.accent} opacity-30 mb-2`} />
              <p className={`text-[7px] font-medium ${p.text}`}>{p.stat}</p>
            </div>
          ))}
        </div>
        {/* Footer stat bar */}
        <div className="mt-3 flex items-center justify-between bg-white border border-slate-100 rounded-lg px-3 py-2">
          {[
            { label: "Staff using systems", val: "127" },
            { label: "Queries answered", val: "2,841" },
            { label: "Beds filled", val: "18" },
            { label: "CQC reports", val: "6" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[10px] font-bold text-slate-700">{s.val}</p>
              <p className="text-[6px] text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// PLACEHOLDER: real integration logos from TRG
const INTEGRATIONS = [
  "eMAR", "Rostering", "Finance", "GP Connect", "NHS Spine", "CQC Portal",
]

export default function SystemsPage() {
  return (
    <>
      {/* 1, Hero */}
      <div className="grid min-h-[70vh] lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-6 py-16 lg:order-1 lg:px-20 lg:py-24">
          <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4 animate-hero-enter">Our systems</p>
          <h1 className="text-display-2 font-heading font-bold text-ink animate-hero-enter [animation-delay:100ms]">
            Software built for the way care actually runs.
          </h1>
          <p className="text-body-lg text-ink-muted mt-6 max-w-lg animate-hero-enter [animation-delay:200ms]">
            Four proprietary platforms and a custom-build capability, all designed exclusively for the UK care sector.
          </p>
        </div>
        <div className="order-1 flex items-center justify-center bg-surface-alt px-8 py-12 lg:order-2 lg:px-16">
          <SystemsHeroMockup />
        </div>
      </div>

      {/* 2, CareStream block */}
      {/* PLACEHOLDER: real CareStream copy, logo, screenshot */}
      <Section variant="alt">
        <FeatureBlock
          imageSide="left"
          logo={{ src: "/carestream-logo.png", alt: "CareStream AI", width: 434, height: 130 }}
          headline="The care management platform built around your staff."
          body="CareStream gives your care team instant, accurate answers to policy questions — by chat or email, grounded in your own uploaded documents and cited back to the source. Staff ask in any of 70+ languages, every query is logged automatically, and a CQC inspection evidence pack is generated on demand."
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
          body="CareAssura gives your home a managed directory profile that ranks in local search, so families looking for care in your area find you before they find your competitors. Rich care home profiles, review management, an interactive map explorer, and a provider dashboard — all built to turn online visibility into enquiries."
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
