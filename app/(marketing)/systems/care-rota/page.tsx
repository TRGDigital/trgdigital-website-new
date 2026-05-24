import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"
import { TalkToUsButton } from "@/components/ui/talk-to-us-button"

export const metadata = buildMetadata({
  title: "CareRota — Rota, Time & Attendance and Payroll for Care Homes",
  description: "CareRota is the dynamic rota, time-and-attendance, and payroll platform built exclusively for UK care homes. Pay what was worked, not what was planned.",
  path: "/systems/care-rota",
})

const FEATURES = [
  {
    icon: "📅",
    title: "Dynamic rota management",
    description: "Build rotas that react to bed occupancy and resident dependency. When beds empty, suggested staffing levels update automatically — so you're never over-rostered.",
  },
  {
    icon: "🕐",
    title: "Time & attendance",
    description: "Staff clock in and out via iPad kiosk, mobile app, or web. Clock times are reconciled against the published rota automatically — the source of truth for payroll is what actually happened, not what was planned.",
  },
  {
    icon: "💷",
    title: "Payroll engine",
    description: "CareRota calculates pay from actual hours worked. Bank holiday and Christmas premium pay (configurable multipliers), NMW compliance checks, and payslip generation — all handled automatically.",
  },
  {
    icon: "📋",
    title: "Compliance monitoring",
    description: "Training expiry, visa working hour limits, and Working Time Regulations are checked at rota publication — not at CQC inspection. Hard rules have a documented manager override path with mandatory justification and audit logging.",
  },
  {
    icon: "📝",
    title: "Staff contracts",
    description: "Record contract types, pay rates, contracted hours, and working patterns for every member of staff. The rota and payroll engines read directly from contracts — no duplicate data entry.",
  },
  {
    icon: "🏖️",
    title: "Leave management",
    description: "Annual leave, sickness, maternity, and custom leave types. Homes can configure leave in hours or days. Leave requests appear directly in the rota view so managers see the full picture before approving.",
  },
  {
    icon: "🏥",
    title: "Occupancy-driven staffing",
    description: "Link bed occupancy and resident dependency levels to minimum staffing ratios. CareRota surfaces suggested staffing levels per shift — and flags when a published rota falls below safe levels.",
  },
  {
    icon: "🤖",
    title: "AI chat assistant",
    description: "Ask CareRota questions in plain English: 'How many hours is Sarah contracted for?' or 'What's the cost of this rota period?' Every answer is cited back to the data rows it came from.",
  },
  {
    icon: "📊",
    title: "Accountant portal",
    description: "Give your external payroll accountant their own secure login. Pay run data, payslips, and exports are available without sharing your full management access.",
  },
  {
    icon: "📱",
    title: "Staff mobile app",
    description: "Staff view their rota, request leave, and clock in from their own device. Available on iOS and Android. No accounts to create — staff authenticate via their work email.",
  },
  {
    icon: "🖥️",
    title: "iPad kiosk",
    description: "A locked-down iPad kiosk at the care home entrance for staff clock-in and clock-out. Works in Guided Access mode — staff can't use it for anything else.",
  },
  {
    icon: "🔗",
    title: "CareStream integration",
    description: "When CareStream is also in use, admission and discharge events flow into CareRota automatically — keeping occupancy and dependency levels in sync without manual entry.",
  },
]

const WHO = [
  {
    title: "Registered managers",
    body: "Build and publish rotas with confidence that compliance is checked before publication, not after. See labour costs in real time, and know that what you publish is what gets paid.",
  },
  {
    title: "Finance & payroll teams",
    body: "Pay runs are generated from clock-in data, not the rota. Payslips, exports, and accountant access are built in. No more reconciling two separate systems at month end.",
  },
  {
    title: "Care groups",
    body: "Manage multiple homes from one login. Each home has its own isolated rota, staff, and payroll — with group-level reporting across all sites.",
  },
]

export default function CareRotaPage() {
  return (
    <>
      <Hero
        variant="type"
        eyebrow="CareRota"
        headline="The rota, attendance, and payroll platform built for care."
        subheadline="UK care homes lose 3–8% of payroll every month to three fixable problems. CareRota fixes all three."
        primaryCta={{ label: "Book a demo", href: "/contact?subject=carerota" }}
        secondaryCta={{ label: "See the features", href: "#features" }}
      />

      {/* Three problems */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Three problems, one platform</p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12 max-w-2xl">The problems CareRota was built to solve.</h2>
          </FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Static rotas don't react to occupancy.",
                body: "When beds empty, hours don't change. Care homes end up overstaffed for weeks while the rota catches up. CareRota links staffing levels directly to occupancy — so the rota reflects reality from day one.",
              },
              {
                number: "02",
                title: "Time-and-attendance lives in a different system to payroll.",
                body: "Managers run payroll off the rota — not off what staff actually worked. Missed shifts, late clock-outs, and no-shows slip through. CareRota reconciles clock data against the rota automatically. You pay what was worked.",
              },
              {
                number: "03",
                title: "Compliance is caught at inspection, not at publication.",
                body: "Training expiry, visa hours, and Working Time Regulations are checked after a rota is published — or worse, after a CQC visit. CareRota checks compliance at the point of publication, every time.",
              },
            ].map((p) => (
              <FadeIn key={p.number}>
                <div className="rounded-lg border border-border bg-surface p-8 h-full">
                  <p className="text-display-1 font-heading font-bold text-accent/30 leading-none mb-4">{p.number}</p>
                  <h3 className="text-h2 font-heading font-bold text-ink mb-4">{p.title}</h3>
                  <p className="text-body text-ink-muted leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Feature grid */}
      <Section variant="default" id="features">
        <Container>
          <FadeIn>
            <h2 className="text-h1 font-heading font-bold text-ink mb-4">Everything in one system</h2>
            <p className="text-body-lg text-ink-muted mb-12 max-w-2xl">Rota, time-and-attendance, payroll, compliance, and staff management — with no integration required between them.</p>
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

      {/* Feature detail — Rota */}
      <FeatureBlock
        imageSide="right"
        eyebrow="Dynamic rota"
        headline="A rota that reacts as fast as care does."
        body="Build rotas against shift pattern templates configured once by your admin. Link bed occupancy and resident dependency levels to minimum staffing requirements — CareRota flags when a published rota falls below safe levels before anyone starts work. Rebalance suggestions surface automatically when occupancy changes mid-period."
        image={{ src: "/images/feature-team.jpg", alt: "Care team at work", width: 960, height: 560 }}
      />

      <FeatureBlock
        imageSide="left"
        eyebrow="Payroll engine"
        headline="Pay what was worked, not what was planned."
        body="CareRota's reconciliation engine compares every clock-in and clock-out against the published rota. Discrepancies surface for manager review before the pay run closes. Bank holiday and Christmas Day multipliers are stored on each shift at publish time. NMW compliance is checked automatically. Payslips are generated in-platform — no spreadsheet required."
        image={{ src: "/images/feature-digital.jpg", alt: "Payroll dashboard", width: 960, height: 560 }}
      />

      <FeatureBlock
        imageSide="right"
        eyebrow="Compliance"
        headline="Catch compliance issues before the rota goes live."
        body="Training expiry, visa working hour limits, and Working Time Regulations are checked automatically when a rota is published. Hard rule breaches are flagged clearly before publication. Where a manager needs to override — for a genuine operational reason — CareRota provides a documented override path with mandatory justification and a permanent, immutable audit row."
        image={{ src: "/images/feature-compliance.jpg", alt: "Compliance monitoring", width: 960, height: 560 }}
      />

      {/* Who it's for */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Who it's for</p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">Built for every team in the care home</h2>
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
          <FadeIn>
            <div className="mt-10">
              <TalkToUsButton subject="CareRota" />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Standalone + integration */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Standalone or integrated</p>
                <h2 className="text-h1 font-heading font-bold text-ink mb-6">Works on its own. Works even better with CareStream.</h2>
                <p className="text-body-lg text-ink-muted leading-relaxed mb-6">
                  CareRota is a complete, independently deployable product. It works without any other TRG Digital system installed — if you use a different care planning platform, CareRota connects to it via CSV import or API.
                </p>
                <p className="text-body-lg text-ink-muted leading-relaxed">
                  When CareStream is also in use, the experience gets better automatically. Admission and discharge events update occupancy in CareRota in real time. Dependency assessments sync without manual entry. The rota stays calibrated to the home without anyone having to remember to update it.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Standalone capable", sub: "No other system required" },
                  { label: "CSV import", sub: "Connect any care planning system" },
                  { label: "CareStream sync", sub: "Real-time occupancy updates" },
                  { label: "UK data residency", sub: "All data stored in UK/EEA" },
                  { label: "GDPR compliant", sub: "No resident PII in CareRota" },
                  { label: "Audit logging", sub: "Every override logged, immutable" },
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
        headline="See CareRota in action"
        ctaLabel="Book a demo"
        ctaHref="/contact?subject=carerota"
      />
    </>
  )
}
