import Image from "next/image"
import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"
import { TalkToUsButton } from "@/components/ui/talk-to-us-button"

export const metadata = buildMetadata({
  title: "CareStream — AI-Powered Policy Assistant for Care Homes",
  description: "CareStream gives care home staff instant, accurate answers to policy questions by chat or email, grounded in your own policies and cited back to the source.",
  path: "/systems/carestream",
})

const FEATURES = [
  {
    icon: "💬",
    title: "AI chat portal",
    description: "Staff ask questions in plain English and get instant, accurate answers drawn directly from your uploaded policies. Simple enough to use on a care floor with no training required.",
  },
  {
    icon: "📧",
    title: "Email interface",
    description: "Staff email your dedicated policy address and receive a structured reply within seconds. Full threaded conversation so follow-up questions are understood in context.",
  },
  {
    icon: "📂",
    title: "Policy library",
    description: "Upload PDFs, Word documents, and staff handbooks. CareStream processes, versions, and indexes every document automatically. Policies are never deleted, only archived, preserving your audit trail.",
  },
  {
    icon: "🌍",
    title: "Multilingual by default",
    description: "Staff can ask questions in any language: Polish, Romanian, Tagalog, Hindi, and 70+ others. CareStream detects the language and responds in kind. No configuration required.",
  },
  {
    icon: "📋",
    title: "CQC readiness report",
    description: "Generate a structured evidence pack showing which staff accessed which policies, when, and how often. Presented in a format inspectors can act on, not a data export you have to format yourself.",
  },
  {
    icon: "🔍",
    title: "Policy gap detection",
    description: "See which staff questions could not be answered by any policy in your library. CareStream surfaces the topics you need to write or upload next, before an inspector asks.",
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
    description: "Built-in explanations of CQC Fundamental Standards, GDPR, RIDDOR, the Care Act, and other key frameworks, automatically surfaced when staff ask about external regulations.",
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

function PolicyMockups() {
  return (
    <div className="relative h-[560px]">

      {/* Email mockup — behind, rotated right, offset top-right */}
      <div className="absolute top-0 right-0 w-[340px] z-10" style={{ transform: "rotate(3deg)" }}>
        <div className="rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 bg-slate-100 border-b border-slate-200 px-3 py-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <div className="flex-1 mx-2 bg-white rounded border border-slate-200 px-2 py-0.5">
              <span className="text-[9px] text-slate-400 font-mono">policies@carestream.co.uk</span>
            </div>
          </div>
          {/* Email header */}
          <div className="border-b border-slate-100 px-4 py-3 bg-white">
            <p className="text-[10px] text-slate-400 mb-0.5">From: <span className="text-slate-600">ana.ionescu@crosswayscare.co.uk</span></p>
            <p className="text-[10px] text-slate-400 mb-0.5">To: <span className="text-slate-600">policies@carestream.co.uk</span></p>
            <p className="text-xs font-semibold text-slate-700">Re: Medication administration query</p>
          </div>
          {/* Staff email */}
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-100">
            <p className="text-[10px] text-slate-500 mb-1 font-medium">Ana Ionescu · 08:47</p>
            <p className="text-xs text-slate-700 leading-relaxed">
              Hi, can you tell me what the procedure is if a resident refuses their morning medication? I need to know who to inform and what to document.
            </p>
          </div>
          {/* CareStream reply */}
          <div className="px-4 py-3 bg-white">
            <p className="text-[10px] font-semibold text-blue-700 mb-1">CareStream · 08:47</p>
            <p className="text-xs text-slate-700 leading-relaxed mb-2">
              Based on your <span className="font-semibold">Medication Management Policy (v6)</span>, if a resident refuses medication you should:
            </p>
            <div className="space-y-1 mb-3">
              {[
                "Record the refusal in the eMAR with the reason given",
                "Notify the nurse in charge immediately",
                "Document in the care notes and inform the GP if repeated",
              ].map((item) => (
                <div key={item} className="flex gap-1.5 items-start">
                  <span className="text-blue-500 text-xs shrink-0 mt-0.5">•</span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
              <p className="text-[9px] font-semibold text-blue-600">Source: Medication Management Policy v6, Section 4.3</p>
              <p className="text-[9px] text-blue-400">Confidence: high · Last updated: March 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp phone — front, rotated left, bottom-left */}
      <div className="absolute bottom-0 left-0 z-20" style={{ transform: "rotate(-2deg)" }}>
        <div className="relative w-[240px] rounded-[2rem] border-4 border-slate-800 bg-slate-800 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-800 rounded-b-xl z-10" />
          <div className="rounded-[1.6rem] overflow-hidden bg-[#ECE5DD]">
            <div className="bg-[#075E54] px-3 pt-6 pb-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-bold">CS</span>
              </div>
              <div>
                <p className="text-white text-[11px] font-semibold leading-tight">CareStream Policies</p>
                <p className="text-[#B2DFDB] text-[9px]">online</p>
              </div>
            </div>
            <div className="px-2.5 py-3 space-y-2.5 min-h-[280px]">
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-2.5 py-1.5 max-w-[82%] shadow-sm">
                  <p className="text-slate-800 text-[10px] leading-relaxed">What does our falls policy say about reporting timescales?</p>
                  <p className="text-[9px] text-slate-400 text-right mt-0.5">09:14 ✓✓</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm">
                  <div className="flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm px-2.5 py-2 max-w-[90%] shadow-sm">
                  <p className="text-[9px] font-semibold text-[#075E54] mb-1">CareStream Policies</p>
                  <p className="text-slate-800 text-[10px] leading-relaxed mb-1.5">
                    Based on your <span className="font-semibold">Falls Prevention Policy (v4)</span>:
                  </p>
                  <div className="space-y-1 mb-1.5">
                    {[
                      "4 hours — incident report form",
                      "24 hours — if hospital admission",
                      "Immediately — if serious injury",
                    ].map((item) => (
                      <div key={item} className="flex gap-1 items-start">
                        <span className="text-[#25D366] text-[10px] shrink-0">•</span>
                        <p className="text-slate-700 text-[10px] leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#F0F0F0] rounded px-1.5 py-1">
                    <p className="text-[8px] text-slate-500">Falls Prevention Policy v4, Section 6.2</p>
                  </div>
                  <p className="text-[9px] text-slate-400 text-right mt-0.5">09:14</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F0F0F0] px-2.5 py-1.5 flex items-center gap-1.5">
              <div className="flex-1 bg-white rounded-full px-3 py-1.5">
                <p className="text-slate-400 text-[10px]">Message</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

function CareStreamDashboardMockup() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-slate-100 border-b border-slate-200 px-3 py-2.5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 bg-white rounded-md border border-slate-200 flex items-center gap-1.5 px-2 py-1">
          <div className="w-2 h-2 rounded-full border border-slate-300" />
          <span className="text-[9px] text-slate-400 font-mono">app.carestream.co.uk/admin</span>
        </div>
      </div>
      <div className="flex" style={{ height: 340 }}>
        {/* Sidebar */}
        <div className="w-14 bg-slate-900 flex flex-col items-center py-3 gap-2 shrink-0">
          <Image src="/carestream-logo.png" alt="CareStream" width={32} height={32} className="w-7 h-7 object-contain mb-3" />
          {[true, false, false, false, false].map((active, i) => (
            <div key={i} className={`w-8 h-7 rounded-lg flex items-center justify-center ${active ? "bg-blue-500" : "bg-slate-700"}`}>
              <div className="w-3.5 h-3.5 rounded-sm bg-white/30" />
            </div>
          ))}
          <div className="mt-auto w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/70" />
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 bg-slate-50 overflow-hidden flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-slate-100">
            <div>
              <p className="text-[10px] font-bold text-slate-700">Admin Dashboard</p>
              <p className="text-[8px] text-slate-400">Crossways Care Home</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[8px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Active plan</div>
              <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-300" />
            </div>
          </div>

          <div className="flex-1 p-3 space-y-3 overflow-hidden">
            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Queries today", val: "34", trend: "+12%", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                { label: "Policies active", val: "28", trend: "2 due review", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
                { label: "Staff users", val: "41", trend: "3 pending", color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
                { label: "Plan usage", val: "74%", trend: "of monthly", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
              ].map(s => (
                <div key={s.label} className={`${s.bg} border ${s.border} rounded-lg p-2`}>
                  <p className={`text-sm font-bold ${s.color} leading-none`}>{s.val}</p>
                  <p className="text-[7px] text-slate-500 leading-none mt-0.5">{s.label}</p>
                  <p className="text-[6px] text-slate-400 mt-0.5">{s.trend}</p>
                </div>
              ))}
            </div>

            {/* Chart + top policies side by side */}
            <div className="grid grid-cols-2 gap-2">
              {/* Query chart */}
              <div className="bg-white rounded-lg border border-slate-100 p-2.5">
                <p className="text-[8px] font-semibold text-slate-600 mb-2">Queries this week</p>
                <div className="flex items-end gap-1 h-14">
                  {[40, 65, 50, 80, 72, 90, 34].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                      <div className="w-full rounded-t-sm bg-blue-500" style={{ height: `${h}%`, opacity: i === 6 ? 0.3 : 0.6 + i * 0.06 }} />
                      <p className="text-[5px] text-slate-400">{["M","T","W","T","F","S","S"][i]}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top policies */}
              <div className="bg-white rounded-lg border border-slate-100 p-2.5">
                <p className="text-[8px] font-semibold text-slate-600 mb-2">Most queried policies</p>
                <div className="space-y-1.5">
                  {[
                    { name: "Falls Prevention", count: 18, pct: 90 },
                    { name: "Medication Admin.", count: 14, pct: 70 },
                    { name: "Safeguarding", count: 11, pct: 55 },
                    { name: "Infection Control", count: 8, pct: 40 },
                  ].map(p => (
                    <div key={p.name}>
                      <div className="flex justify-between mb-0.5">
                        <p className="text-[7px] text-slate-600 truncate">{p.name}</p>
                        <p className="text-[7px] text-slate-400 shrink-0 ml-1">{p.count}</p>
                      </div>
                      <div className="h-1 bg-slate-100 rounded-full">
                        <div className="h-1 bg-blue-400 rounded-full" style={{ width: `${p.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent queries table */}
            <div className="bg-white rounded-lg border border-slate-100 p-2.5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[8px] font-semibold text-slate-600">Recent queries</p>
                <p className="text-[7px] text-blue-500">View all</p>
              </div>
              <div className="space-y-1">
                {[
                  { user: "S. Okafor", q: "Who can administer insulin?", policy: "Medication Admin.", lang: "EN", time: "2m ago" },
                  { user: "M. Kowalski", q: "Co mówi polityka upadków?", policy: "Falls Prevention", lang: "PL", time: "8m ago" },
                  { user: "A. Santos", q: "What is the reporting timescale?", policy: "Incident Reporting", lang: "EN", time: "14m ago" },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-2 py-1 border-b border-slate-50 last:border-0">
                    <div className="w-5 h-5 rounded-full bg-slate-200 shrink-0 flex items-center justify-center">
                      <p className="text-[6px] font-semibold text-slate-500">{r.user.split(" ").map(n => n[0]).join("")}</p>
                    </div>
                    <p className="text-[7px] text-slate-600 flex-1 truncate">{r.q}</p>
                    <p className="text-[6px] bg-blue-50 text-blue-500 px-1 py-0.5 rounded shrink-0">{r.policy}</p>
                    <p className="text-[6px] bg-slate-100 text-slate-500 px-1 py-0.5 rounded shrink-0">{r.lang}</p>
                    <p className="text-[6px] text-slate-400 shrink-0">{r.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CareStreamPage() {
  return (
    <>
      <Hero
        variant="image"
        logo={{ src: "/carestream-logo.png", alt: "CareStream", width: 434, height: 130 }}
        headline="Your policies, answered instantly."
        subheadline="CareStream gives every member of your care team instant, accurate answers to policy questions by chat or email, grounded in your own documents and cited back to the source."
        primaryCta={{ label: "Book a demo", href: "/contact?subject=carestream" }}
        secondaryCta={{ label: "See how it works", href: "#how-it-works" }}
        imageSide="right"
        image={{ src: "/images/hero-carestream.jpg", alt: "Caregiver supporting a patient", width: 1400, height: 933 }}
      />

      {/* Problem */}
      <Section variant="alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <FadeIn>
              <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">The problem</p>
              <p className="text-h2 font-heading font-bold text-ink leading-snug">
                When a carer needs to know the falls policy at 2am, they should not have to dig through a filing cabinet.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { flag: "🇬🇧", label: "English" },
                  { flag: "🇵🇱", label: "Polski" },
                  { flag: "🇷🇴", label: "Română" },
                  { flag: "🇵🇭", label: "Tagalog" },
                  { flag: "🇳🇬", label: "Yoruba" },
                  { flag: "🇮🇳", label: "हिंदी" },
                  { flag: "🇸🇦", label: "العربية" },
                  { flag: "🇧🇬", label: "Български" },
                  { flag: "🇸🇴", label: "Soomaali" },
                ].map(({ flag, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-small font-medium text-ink-muted">
                    {flag} {label}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-small font-medium text-ink-muted">
                  +60 more
                </span>
              </div>
              <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
                Most care homes store policies in binders, shared drives, or email chains. Staff ask managers the same questions on repeat. Induction evidence is scattered across spreadsheets. CareStream closes all three gaps in one platform.
              </p>
              <p className="text-body-lg text-ink-muted mt-4 leading-relaxed">
                When a manager faces a CQC inspector, the evidence of staff knowledge should not take days to compile. CareStream logs every query automatically, and generates a structured inspection evidence pack on demand.
              </p>
              <div className="mt-8">
                <TalkToUsButton subject="CareStream" />
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <PolicyMockups />
            </FadeIn>
          </div>
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
              { step: "01", title: "Upload your policies", body: "Drag in your PDFs, Word documents, and staff handbook. CareStream processes, chunks, and indexes every document automatically, ready for queries within minutes." },
              { step: "02", title: "Staff ask questions", body: "Via the web chat portal or by emailing your home's dedicated policy address. Questions can be in any language. Follow-up questions are understood in context." },
              { step: "03", title: "Get cited answers", body: "CareStream returns a structured answer drawn only from your policies, with the source policy and section cited in every response. No hallucination, no guesswork." },
            ].map((s) => (
              <FadeIn key={s.step}>
                <div className="rounded-lg border border-border bg-surface p-8 h-full">
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

      {/* Feature detail 1 — Chat */}
      <FeatureBlock
        imageSide="right"
        eyebrow="AI chat portal"
        headline="Plain-English answers, sourced from your own policies."
        body="Staff type their question in the chat portal in any language, and CareStream returns a structured, formatted answer with key points and practical guidance. Every response includes a citation showing exactly which policy and section it came from. Answers are never invented: if the policy is not in the library, CareStream says so."
        image={{ src: "/images/hero-home.jpg", alt: "Carer with elderly resident in a care home lounge", width: 960, height: 560 }}
      />

      {/* Feature detail 2 — CQC */}
      <FeatureBlock
        imageSide="left"
        eyebrow="CQC readiness"
        headline="Turn your audit log into inspection evidence."
        body="CareStream logs every query: who asked, what they asked, which policy was cited, and when. The CQC Readiness Report transforms this log into structured inspection evidence covering policy access by staff, policies not accessed, version history, and regulatory framework activity. Generated on demand and presented in a format an inspector can act on."
        image={{ src: "/images/feature-care-manager.png", alt: "Care manager reviewing a care plan at her desk with residents in the background", width: 960, height: 560 }}
      />

      {/* Feature detail 3 — Dashboard */}
      <section className="bg-surface overflow-hidden">
        <Container className="py-16 lg:py-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0 lg:min-h-[560px]">
            {/* Dashboard mockup */}
            <div className="order-1 lg:order-2 flex items-center lg:pl-12 xl:pl-16 py-8 lg:py-12">
              <div className="w-full">
                <CareStreamDashboardMockup />
              </div>
            </div>
            {/* Text */}
            <div className="order-2 lg:order-1 flex flex-col justify-center lg:pr-16 xl:pr-24">
              <FadeIn>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Admin dashboard</p>
                <h2 className="text-h1 font-heading font-bold text-ink">See exactly how your team is using policies.</h2>
                <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
                  The admin dashboard gives managers a real-time view of query volume, the policies staff ask about most, active users, and language breakdown. Spot which topics generate repeated questions and which policies have never been accessed. Surface knowledge gaps before a CQC inspector does.
                </p>
                <p className="text-body-lg text-ink-muted mt-4 leading-relaxed">
                  Staff induction progress, plan usage, and policy review dates are all visible from one screen. No spreadsheets, no chasing.
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

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
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Security and compliance</p>
                <h2 className="text-h1 font-heading font-bold text-ink mb-6">Built for the care sector's data obligations.</h2>
                <p className="text-body-lg text-ink-muted leading-relaxed">
                  Every organisation's data, including policies, staff accounts, and query history, is fully isolated. No data is shared between organisations. All data is stored within UK and EEA regions, encrypted at rest and in transit, and never used to train AI models. A Data Processing Agreement is provided to every subscriber.
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
