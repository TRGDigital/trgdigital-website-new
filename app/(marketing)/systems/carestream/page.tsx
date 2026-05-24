import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata = buildMetadata({
  title: "CareStream — AI-Powered Policy Assistant for Care Homes",
  description: "CareStream gives care home staff instant, accurate answers to policy questions — by chat or email — grounded in your own policies and cited back to the source.",
  path: "/systems/carestream",
})

const FEATURES = [
  {
    icon: "💬",
    title: "AI chat portal",
    description: "Staff ask questions in plain English and get instant, accurate answers drawn directly from your uploaded policies. No login friction — simple enough to use on a care floor.",
  },
  {
    icon: "📧",
    title: "Email interface",
    description: "Staff email your dedicated policy address and receive a structured reply within seconds. Full threaded conversation — follow-up questions are understood in context.",
  },
  {
    icon: "📂",
    title: "Policy library",
    description: "Upload PDFs, Word documents, and staff handbooks. CareStream processes, versions, and indexes every document automatically. Policies are never deleted — only archived, preserving your audit trail.",
  },
  {
    icon: "🌍",
    title: "Multilingual by default",
    description: "Staff can ask questions in any language — Polish, Romanian, Tagalog, Hindi, and 70+ others. CareStream detects the language and responds in kind. No configuration required.",
  },
  {
    icon: "📋",
    title: "CQC readiness report",
    description: "Generate a structured evidence pack showing which staff accessed which policies, when, and how often. Presented in a format inspectors can act on — not a data export you have to format yourself.",
  },
  {
    icon: "🔍",
    title: "Policy gap detection",
    description: "See which staff questions couldn't be answered by any policy in your library. CareStream surfaces the topics you need to write or upload next, before an inspector asks.",
  },
  {
    icon: "🎓",
    title: "Staff onboarding module",
    description: "Create structured induction flows: staff read specified policies, answer comprehension questions, and are marked inducted. Completion is logged to the audit trail as CQC evidence.",
  },
  {
    icon: "📊",
    title: "Admin dashboard",
    description: "Monitor query volume, most-requested policies, active staff, and language breakdown. Spot knowledge gaps before they become compliance gaps.",
  },
  {
    icon: "⚖️",
    title: "Regulatory knowledge base",
    description: "Built-in explanations of CQC Fundamental Standards, GDPR, RIDDOR, the Care Act, and other key frameworks — automatically surfaced when staff ask about external regulations.",
  },
]

const WHO = [
  {
    title: "Care homes",
    body: "Give frontline staff 24/7 access to clinical policies without involving a manager. Reduce the volume of policy questions reaching your desk and build evidence of staff knowledge for CQC.",
  },
  {
    title: "Nursing homes",
    body: "Handle complex clinical and regulatory policies with confidence. CareStream cites the exact policy and section in every answer, so staff always know where guidance comes from.",
  },
  {
    title: "Care groups",
    body: "Roll out consistent policy access across every site in your group. Each home gets its own isolated environment with its own policy library, users, and analytics.",
  },
]

export default function CareStreamPage() {
  return (
    <>
      <Hero
        variant="image"
        logo={{ src: "/carestream-logo.png", alt: "CareStream", width: 434, height: 130 }}
        headline="Your policies, answered instantly."
        subheadline="CareStream gives every member of your care team instant, accurate answers to policy questions — by chat or email — grounded in your own documents and cited back to the source."
        primaryCta={{ label: "Book a demo", href: "/contact?subject=carestream" }}
        secondaryCta={{ label: "See how it works", href: "#how-it-works" }}
        imageSide="right"
        image={{ src: "/images/hero-carestream.jpg", alt: "Caregiver supporting a patient", width: 1400, height: 933 }}
      />

      {/* Problem */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">The problem</p>
              <p className="text-h2 font-heading font-bold text-ink leading-snug">
                When a carer needs to know the falls policy at 2am, they shouldn't have to dig through a filing cabinet. When a manager faces a CQC inspector, the evidence of staff knowledge shouldn't take days to compile.
              </p>
              <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
                Most care homes store policies in binders, shared drives, or email chains. Staff ask managers the same questions on repeat. Induction evidence is scattered across spreadsheets. CareStream closes all three gaps in one platform.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* How it works */}
      <Section variant="default" id="how-it-works">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">How it works</p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-4">Three steps, zero training</h2>
            <p className="text-body-lg text-ink-muted mb-12 max-w-2xl">Upload your policies once. Your team gets instant answers forever.</p>
          </FadeIn>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { step: "01", title: "Upload your policies", body: "Drag in your PDFs, Word documents, and staff handbook. CareStream processes, chunks, and indexes every document automatically — ready for queries within minutes." },
              { step: "02", title: "Staff ask questions", body: "Via the web chat portal or by emailing your home's dedicated policy address. Questions can be in any language. Follow-up questions are understood in context." },
              { step: "03", title: "Get cited answers", body: "CareStream returns a structured answer drawn only from your policies — with the source policy and section cited in every response. No hallucination, no guesswork." },
            ].map((s) => (
              <FadeIn key={s.step}>
                <div className="rounded-lg border border-border bg-surface p-8">
                  <p className="text-display-1 font-heading font-bold text-accent/30 leading-none mb-4">{s.step}</p>
                  <h3 className="text-h3 font-heading font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-body text-ink-muted leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Feature grid */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">Everything your team needs, in one place</h2>
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

      {/* Feature detail — Chat */}
      <FeatureBlock
        imageSide="right"
        eyebrow="AI chat portal"
        headline="Plain-English answers, sourced from your own policies."
        body="Staff type their question in the chat portal — in any language — and CareStream returns a structured, formatted answer with key points and practical guidance. Every response includes a citation showing exactly which policy and section it came from. Answers are never invented: if the policy isn't in the library, CareStream says so."
        image={{ src: "/images/feature-care.jpg", alt: "Caregiver with patient", width: 960, height: 560 }}
      />

      <FeatureBlock
        imageSide="left"
        eyebrow="CQC readiness"
        headline="Turn your audit log into inspection evidence."
        body="CareStream logs every query — who asked, what they asked, which policy was cited, and when. The CQC Readiness Report transforms this log into structured inspection evidence: policy access by staff, policies not accessed, version history, and regulatory framework activity. Generated on demand, presented in a format an inspector can act on."
        image={{ src: "/images/feature-compliance.jpg", alt: "Healthcare professional reviewing compliance", width: 960, height: 560 }}
      />

      <FeatureBlock
        imageSide="right"
        eyebrow="Staff onboarding"
        headline="Induction you can prove at inspection."
        body="Build structured induction flows: assign policies for staff to read, add comprehension questions, and set due dates. Staff complete their induction step-by-step in the portal. Completion is logged to the audit trail — timestamped, attributed, and exportable. Managers see progress across the whole team in a single dashboard view."
        image={{ src: "/images/feature-digital.jpg", alt: "Digital dashboard", width: 960, height: 560 }}
      />

      {/* Who it's for */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Who it's for</p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">Built for every care setting</h2>
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

      {/* Security */}
      <Section variant="default">
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Security & compliance</p>
                <h2 className="text-h1 font-heading font-bold text-ink mb-6">Built for the care sector's data obligations.</h2>
                <p className="text-body-lg text-ink-muted leading-relaxed">
                  Every tenant's data — policies, staff accounts, query history — is fully isolated. No data is shared between organisations. All data is stored within UK/EEA regions, encrypted at rest and in transit, and never used to train AI models. A Data Processing Agreement is provided to every subscriber.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "UK data residency", sub: "All data stored in UK/EEA" },
                  { label: "GDPR compliant", sub: "DPA provided to all subscribers" },
                  { label: "Tenant isolation", sub: "Row-level security enforced" },
                  { label: "Audit logging", sub: "Every action logged, immutable" },
                  { label: "No model training", sub: "Your data stays your data" },
                  { label: "12-month retention", sub: "Configurable, auto-deleted after" },
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
        headline="See CareStream in action"
        ctaLabel="Book a demo"
        ctaHref="/contact?subject=carestream"
      />
    </>
  )
}
