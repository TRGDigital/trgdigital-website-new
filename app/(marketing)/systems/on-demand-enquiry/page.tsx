import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/sections/hero"
import { CtaBand } from "@/components/sections/cta-band"
import { FeatureBlock } from "@/components/sections/feature-block"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"
import { TalkToUsButton } from "@/components/ui/talk-to-us-button"

export const metadata = buildMetadata({
  title: "[PRODUCT NAME] — On-Demand Enquiry Generation for Care Homes",
  description: "[PRODUCT NAME] connects care homes directly to families searching for care. Turn your listing on when you have beds, off when you're full. Pay only for the enquiries you receive.",
  path: "/systems/[product-slug]",
})

const FEATURES = [
  {
    icon: "🎚️",
    title: "On/off bed control",
    description: "Activate and deactivate your listing instantly from the portal. Only pay for enquiries when you're actively looking to fill a bed. No contract, no notice period, no calls to a sales team.",
  },
  {
    icon: "📥",
    title: "Unified enquiry inbox",
    description: "Every enquiry from every source lands in one place. Filter by care type, move-in date, or status. Assign leads to team members and track follow-up progress from first contact to admission.",
  },
  {
    icon: "🎯",
    title: "Pre-qualified leads",
    description: "Every enquiry includes the family's care needs, budget indication, preferred location, and urgency. You know before you call whether the placement is a fit, saving your team hours of pre-screening.",
  },
  {
    icon: "📍",
    title: "Local search placement",
    description: "[PRODUCT NAME] surfaces your home to families searching specifically in your area. Geo-targeted to the postcode radius you define, so every enquiry comes from someone who could realistically place with you.",
  },
  {
    icon: "📊",
    title: "Enquiry analytics",
    description: "See how many families viewed your profile, where your enquiries came from, and your conversion rate from enquiry to admission. Understand what drives placements and replicate it.",
  },
  {
    icon: "🔔",
    title: "Instant notifications",
    description: "New enquiries trigger an immediate email and in-portal notification. Your team responds while the family is still actively searching, before they move on to the next home on their list.",
  },
  {
    icon: "💳",
    title: "Pay-per-enquiry pricing",
    description: "No monthly subscription. You pay only for the enquiries you receive. No bed filled, no ongoing cost. The pricing model is designed to align with your outcomes, not your activity.",
  },
  {
    icon: "🏢",
    title: "Multi-home management",
    description: "Manage enquiries across every home in your group from one portal. Allocate leads to the right location in seconds and compare conversion performance across your estate.",
  },
]

const WHO = [
  {
    title: "Independent care homes",
    body: "Fill beds faster without long-term directory contracts. Turn [PRODUCT NAME] on when you need it and off when you're full. Pay only for the enquiries you receive, with no ongoing cost when you're at capacity.",
  },
  {
    title: "Nursing homes",
    body: "Attract families searching specifically for nursing care in your area. Every enquiry includes the clinical care needs so your team can assess suitability before the first call and focus your time on the right leads.",
  },
  {
    title: "Care groups",
    body: "Manage enquiry flow across every home in your group from one portal. Route leads to the right location, track conversion by site, and make data-driven decisions about where to invest your marketing budget.",
  },
]

function BedControlMockup() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-slate-100 border-b border-slate-200 px-3 py-2.5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 bg-white rounded-md border border-slate-200 flex items-center gap-1.5 px-2 py-1">
          <div className="w-2 h-2 rounded-full border border-slate-300" />
          <span className="text-[9px] text-slate-400 font-mono">app.[product-slug].co.uk/beds</span>
        </div>
      </div>
      <div className="flex" style={{ height: 340 }}>
        {/* Sidebar */}
        <div className="w-14 bg-slate-900 flex flex-col items-center py-3 gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
            <span className="text-white text-[10px] font-bold">OE</span>
          </div>
          {[true, false, false, false].map((active, i) => (
            <div key={i} className={`w-8 h-7 rounded-lg flex items-center justify-center ${active ? "bg-blue-500" : "bg-slate-700"}`}>
              <div className="w-3.5 h-3.5 rounded-sm bg-white/30" />
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-slate-100">
            <div>
              <p className="text-[10px] font-bold text-slate-700">Bed Availability</p>
              <p className="text-[8px] text-slate-400">Crossways Care Home</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[8px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">3 beds active</div>
            </div>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-hidden">
            {/* Summary stat */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Enquiries this week", val: "7", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                { label: "Profile views", val: "84", color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
                { label: "Avg. response time", val: "2h", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
              ].map(s => (
                <div key={s.label} className={`${s.bg} border ${s.border} rounded-lg p-2`}>
                  <p className={`text-sm font-bold ${s.color} leading-none`}>{s.val}</p>
                  <p className="text-[7px] text-slate-500 leading-none mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Bed toggles */}
            <div className="bg-white rounded-lg border border-slate-100 p-2.5">
              <p className="text-[8px] font-semibold text-slate-600 mb-2">Your beds</p>
              <div className="space-y-2">
                {[
                  { type: "Standard residential", beds: 2, active: true, rate: "£850/wk" },
                  { type: "Dementia care", beds: 1, active: true, rate: "£1,050/wk" },
                  { type: "Respite (short-stay)", beds: 1, active: true, rate: "£950/wk" },
                  { type: "Nursing care", beds: 0, active: false, rate: "£1,200/wk" },
                ].map((bed) => (
                  <div key={bed.type} className="flex items-center gap-2">
                    {/* Toggle */}
                    <div className={`w-8 h-4 rounded-full flex items-center px-0.5 shrink-0 transition-colors ${bed.active ? "bg-green-500 justify-end" : "bg-slate-200 justify-start"}`}>
                      <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] font-medium text-slate-700 truncate">{bed.type}</p>
                      <p className="text-[7px] text-slate-400">{bed.beds} bed{bed.beds !== 1 ? "s" : ""} · {bed.rate}</p>
                    </div>
                    <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium shrink-0 ${bed.active ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-400"}`}>
                      {bed.active ? "Live" : "Off"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local demand */}
            <div className="bg-white rounded-lg border border-slate-100 p-2.5">
              <p className="text-[8px] font-semibold text-slate-600 mb-1.5">Local demand this week</p>
              <div className="flex items-end gap-1 h-10">
                {[30, 55, 45, 70, 65, 80, 72].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div className="w-full rounded-t-sm bg-blue-400" style={{ height: `${h}%`, opacity: 0.5 + i * 0.07 }} />
                    <p className="text-[5px] text-slate-400">{["M","T","W","T","F","S","S"][i]}</p>
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

function EnquiryInboxMockup() {
  return (
    <div className="relative h-[520px]">
      {/* Desktop inbox — behind, rotated right */}
      <div className="absolute top-0 right-0 w-[360px] z-10" style={{ transform: "rotate(2deg)" }}>
        <div className="rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="flex items-center gap-1.5 bg-slate-100 border-b border-slate-200 px-3 py-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <div className="flex-1 mx-2 bg-white rounded border border-slate-200 px-2 py-0.5">
              <span className="text-[9px] text-slate-400 font-mono">app.[product-slug].co.uk/inbox</span>
            </div>
          </div>
          <div className="px-3 py-2.5 border-b border-slate-100 flex items-center justify-between">
            <p className="text-[10px] font-bold text-slate-700">Enquiry Inbox</p>
            <div className="flex gap-1.5">
              <span className="text-[8px] bg-blue-100 text-blue-700 font-semibold px-1.5 py-0.5 rounded-full">7 new</span>
              <span className="text-[8px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full">All</span>
            </div>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { name: "Margaret H.", care: "Residential", urgency: "This week", budget: "£850/wk", status: "new", time: "9m ago" },
              { name: "David & Susan T.", care: "Dementia", urgency: "2–4 weeks", budget: "£1,000/wk", status: "new", time: "1h ago" },
              { name: "Priya K.", care: "Respite", urgency: "Next month", budget: "£900/wk", status: "contacted", time: "3h ago" },
            ].map((e, i) => (
              <div key={i} className={`px-3 py-2.5 ${e.status === "new" ? "bg-blue-50/40" : ""}`}>
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center shrink-0">
                      <p className="text-[8px] font-bold text-blue-700">{e.name[0]}</p>
                    </div>
                    <p className="text-[9px] font-semibold text-slate-700">{e.name}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium ${e.status === "new" ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {e.status === "new" ? "New" : "Contacted"}
                    </span>
                    <p className="text-[7px] text-slate-400">{e.time}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[7px] bg-purple-50 text-purple-600 border border-purple-100 px-1.5 py-0.5 rounded">{e.care}</span>
                  <span className="text-[7px] bg-amber-50 text-amber-600 border border-amber-100 px-1.5 py-0.5 rounded">⏱ {e.urgency}</span>
                  <span className="text-[7px] bg-green-50 text-green-600 border border-green-100 px-1.5 py-0.5 rounded">£ {e.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone — front, rotated left, bottom-left */}
      <div className="absolute bottom-0 left-0 z-20" style={{ transform: "rotate(-2deg)" }}>
        <div className="relative w-[220px] rounded-[2rem] border-4 border-slate-800 bg-slate-800 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-slate-800 rounded-b-xl z-10" />
          <div className="rounded-[1.6rem] overflow-hidden bg-white">
            <div className="bg-blue-600 px-3 pt-5 pb-2.5">
              <p className="text-white text-[11px] font-bold">[PRODUCT NAME]</p>
              <p className="text-blue-200 text-[9px]">New enquiry received</p>
            </div>
            <div className="p-2.5 space-y-2 min-h-[260px]">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-2.5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <p className="text-[8px] font-bold text-blue-700">New enquiry · just now</p>
                </div>
                <p className="text-[9px] font-semibold text-slate-700 mb-1">Margaret H.</p>
                <div className="space-y-0.5">
                  <p className="text-[8px] text-slate-500">Care type: <span className="text-slate-700 font-medium">Residential</span></p>
                  <p className="text-[8px] text-slate-500">Urgency: <span className="text-slate-700 font-medium">This week</span></p>
                  <p className="text-[8px] text-slate-500">Budget: <span className="text-slate-700 font-medium">~£850/wk</span></p>
                </div>
                <div className="mt-2 flex gap-1.5">
                  <div className="flex-1 bg-blue-600 text-white text-[8px] font-semibold py-1 rounded text-center">Call now</div>
                  <div className="flex-1 bg-white border border-blue-200 text-blue-600 text-[8px] font-semibold py-1 rounded text-center">View</div>
                </div>
              </div>
              {[
                { name: "David & Susan T.", care: "Dementia", time: "1h" },
                { name: "Priya K.", care: "Respite", time: "3h" },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-2 px-1 py-0.5">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <p className="text-[8px] font-bold text-slate-500">{e.name[0]}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[8px] font-medium text-slate-700 truncate">{e.name}</p>
                    <p className="text-[7px] text-slate-400">{e.care} · {e.time} ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EnquiryDashboardMockup() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-slate-100 border-b border-slate-200 px-3 py-2.5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 bg-white rounded-md border border-slate-200 flex items-center gap-1.5 px-2 py-1">
          <div className="w-2 h-2 rounded-full border border-slate-300" />
          <span className="text-[9px] text-slate-400 font-mono">app.[product-slug].co.uk/dashboard</span>
        </div>
      </div>
      <div className="flex" style={{ height: 340 }}>
        {/* Sidebar */}
        <div className="w-14 bg-slate-900 flex flex-col items-center py-3 gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
            <span className="text-white text-[10px] font-bold">OE</span>
          </div>
          {[false, false, true, false, false].map((active, i) => (
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
              <p className="text-[10px] font-bold text-slate-700">Analytics Dashboard</p>
              <p className="text-[8px] text-slate-400">Crossways Care Home · Last 30 days</p>
            </div>
            <div className="text-[8px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">3 beds live</div>
          </div>

          <div className="flex-1 p-3 space-y-3 overflow-hidden">
            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Enquiries", val: "31", trend: "+8 vs prev", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                { label: "Profile views", val: "342", trend: "+24%", color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
                { label: "Conversion", val: "19%", trend: "6 admissions", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
                { label: "Cost per admit.", val: "£94", trend: "vs £480 avg", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
              ].map(s => (
                <div key={s.label} className={`${s.bg} border ${s.border} rounded-lg p-2`}>
                  <p className={`text-sm font-bold ${s.color} leading-none`}>{s.val}</p>
                  <p className="text-[7px] text-slate-500 leading-none mt-0.5">{s.label}</p>
                  <p className="text-[6px] text-slate-400 mt-0.5">{s.trend}</p>
                </div>
              ))}
            </div>

            {/* Chart + care type split */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg border border-slate-100 p-2.5">
                <p className="text-[8px] font-semibold text-slate-600 mb-2">Enquiries this month</p>
                <div className="flex items-end gap-1 h-14">
                  {[5, 8, 6, 12, 9, 11, 7, 10, 13, 8, 11, 6, 14, 12].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="w-full rounded-t-sm bg-blue-500" style={{ height: `${(h / 14) * 100}%`, opacity: 0.5 + i * 0.03 }} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-100 p-2.5">
                <p className="text-[8px] font-semibold text-slate-600 mb-2">By care type</p>
                <div className="space-y-1.5">
                  {[
                    { name: "Residential", count: 14, pct: 90 },
                    { name: "Dementia", count: 10, pct: 64 },
                    { name: "Respite", count: 7, pct: 45 },
                  ].map(p => (
                    <div key={p.name}>
                      <div className="flex justify-between mb-0.5">
                        <p className="text-[7px] text-slate-600">{p.name}</p>
                        <p className="text-[7px] text-slate-400">{p.count}</p>
                      </div>
                      <div className="h-1 bg-slate-100 rounded-full">
                        <div className="h-1 bg-blue-400 rounded-full" style={{ width: `${p.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent enquiries */}
            <div className="bg-white rounded-lg border border-slate-100 p-2.5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[8px] font-semibold text-slate-600">Recent enquiries</p>
                <p className="text-[7px] text-blue-500">View all</p>
              </div>
              <div className="space-y-1">
                {[
                  { name: "Margaret H.", care: "Residential", urgency: "This week", status: "New", statusColor: "bg-blue-500 text-white", time: "9m" },
                  { name: "David & Susan T.", care: "Dementia", urgency: "2–4 weeks", status: "Contacted", statusColor: "bg-green-100 text-green-700", time: "1h" },
                  { name: "Priya K.", care: "Respite", urgency: "Next month", status: "Viewing", statusColor: "bg-purple-100 text-purple-700", time: "3h" },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-2 py-1 border-b border-slate-50 last:border-0">
                    <div className="w-5 h-5 rounded-full bg-slate-200 shrink-0 flex items-center justify-center">
                      <p className="text-[6px] font-semibold text-slate-500">{r.name[0]}</p>
                    </div>
                    <p className="text-[7px] text-slate-600 flex-1 truncate">{r.name}</p>
                    <p className="text-[6px] bg-blue-50 text-blue-500 px-1 py-0.5 rounded shrink-0">{r.care}</p>
                    <p className={`text-[6px] ${r.statusColor} px-1 py-0.5 rounded shrink-0`}>{r.status}</p>
                    <p className="text-[6px] text-slate-400 shrink-0">{r.time} ago</p>
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

export default function OnDemandEnquiryPage() {
  return (
    <>
      <Hero
        variant="type"
        headline="Empty beds, filled on demand."
        subheadline="[PRODUCT NAME] connects your home directly to families actively searching for care. You control when you appear. Every enquiry lands in your inbox, pre-qualified and ready to follow up."
        primaryCta={{ label: "Book a demo", href: "/contact?subject=[product-slug]" }}
        secondaryCta={{ label: "See how it works", href: "#how-it-works" }}
      />

      {/* Problem */}
      <Section variant="alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <FadeIn>
              <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">The problem</p>
              <p className="text-h2 font-heading font-bold text-ink leading-snug">
                An empty bed costs the average care home over £1,000 a week. Most providers wait for the phone to ring.
              </p>
              <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
                The traditional approach to filling beds relies on word of mouth, a listing on a national directory, and the hope that a family will find you. The directory takes a flat monthly fee regardless of whether a single enquiry is generated. The phone rings when it rings.
              </p>
              <p className="text-body-lg text-ink-muted mt-4 leading-relaxed">
                [PRODUCT NAME] inverts the model. You control visibility. When you have a bed, you switch on and enquiries start flowing. When you're full, you switch off and costs stop. Every enquiry comes pre-qualified: care type, urgency, budget, and contact details included before you pick up the phone.
              </p>
              <div className="mt-8">
                <TalkToUsButton subject="[PRODUCT NAME]" />
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              {/* Before/after panel */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Before</p>
                  <div className="space-y-3">
                    {[
                      "Pay directory monthly regardless",
                      "Generic listing, uncontrolled",
                      "Cold calls, no pre-qualification",
                      "No data on views or conversion",
                      "Still waiting for the phone to ring",
                    ].map((item) => (
                      <div key={item} className="flex gap-2 items-start">
                        <span className="text-red-400 text-sm shrink-0 mt-0.5">✗</span>
                        <p className="text-xs text-red-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-500 mb-4">With [PRODUCT NAME]</p>
                  <div className="space-y-3">
                    {[
                      "Pay only for enquiries received",
                      "On when you need it, off when full",
                      "Every lead pre-qualified",
                      "Full analytics: views, conversion, cost",
                      "Enquiries arrive within hours of going live",
                    ].map((item) => (
                      <div key={item} className="flex gap-2 items-start">
                        <span className="text-green-500 text-sm shrink-0 mt-0.5">✓</span>
                        <p className="text-xs text-green-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section variant="default" id="how-it-works">
        <Container>
          <FadeIn>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">How it works</p>
            <h2 className="text-h1 font-heading font-bold text-ink mb-4">Three steps, then enquiries</h2>
            <p className="text-body-lg text-ink-muted mb-12 max-w-2xl">Tell us about your home once. Turn it on when you need it.</p>
          </FadeIn>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us your beds",
                body: "Connect your home to [PRODUCT NAME] in minutes. Add your bed types, weekly fees, and the care needs you accept. No integration work, no IT involvement, no lengthy setup.",
              },
              {
                step: "02",
                title: "Flip the switch",
                body: "When you have a bed to fill, activate your listing from the portal. Your home starts appearing to families searching for care in your area. Turn it off the moment you're at capacity.",
              },
              {
                step: "03",
                title: "Follow up the enquiries",
                body: "Every enquiry lands in your [PRODUCT NAME] inbox with the family's contact details, care needs, preferred move-in date, and budget indication. Your team follows up. We send the enquiries.",
              },
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
            <h2 className="text-h1 font-heading font-bold text-ink mb-12">Everything you need to fill beds faster</h2>
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

      {/* Feature detail 1 — Bed control */}
      <section className="bg-surface overflow-hidden">
        <Container className="py-16 lg:py-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0 lg:min-h-[560px]">
            <div className="order-1 lg:order-2 flex items-center lg:pl-12 xl:pl-16 py-8 lg:py-12">
              <div className="w-full">
                <BedControlMockup />
              </div>
            </div>
            <div className="order-2 lg:order-1 flex flex-col justify-center lg:pr-16 xl:pr-24">
              <FadeIn>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Bed control</p>
                <h2 className="text-h1 font-heading font-bold text-ink">You decide when families can find you.</h2>
                <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
                  [PRODUCT NAME] puts the switch in your hands. When you have a bed to fill, activate your listing and enquiries start flowing within hours. When you're at capacity, deactivate in one click and the enquiries stop. No contract, no notice period, no calls to a sales team.
                </p>
                <p className="text-body-lg text-ink-muted mt-4 leading-relaxed">
                  The portal shows your active beds, your current enquiry rate, local demand in your area, and your estimated time to fill based on recent performance. The data you need to make the decision is always in front of you.
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature detail 2 — Enquiry inbox */}
      <section className="bg-surface-alt overflow-hidden">
        <Container className="py-16 lg:py-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0 lg:min-h-[560px]">
            <div className="order-1 flex items-center lg:pr-12 xl:pr-16 py-8 lg:py-12">
              <div className="w-full">
                <EnquiryInboxMockup />
              </div>
            </div>
            <div className="order-2 flex flex-col justify-center lg:pl-16 xl:pl-24">
              <FadeIn>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Enquiry inbox</p>
                <h2 className="text-h1 font-heading font-bold text-ink">Every lead, pre-qualified before it reaches you.</h2>
                <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
                  Families looking for care are guided through a structured search before their enquiry reaches you. By the time it lands in your [PRODUCT NAME] inbox, you already know the care needs of their loved one, their preferred move-in timescale, and their approximate budget.
                </p>
                <p className="text-body-lg text-ink-muted mt-4 leading-relaxed">
                  No cold calls, no tyre-kickers. Just families who are ready to have a conversation about a placement. Instant email and in-portal notifications mean your team responds while the family is still actively searching.
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature detail 3 — Dashboard */}
      <section className="bg-surface overflow-hidden">
        <Container className="py-16 lg:py-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0 lg:min-h-[560px]">
            <div className="order-1 lg:order-2 flex items-center lg:pl-12 xl:pl-16 py-8 lg:py-12">
              <div className="w-full">
                <EnquiryDashboardMockup />
              </div>
            </div>
            <div className="order-2 lg:order-1 flex flex-col justify-center lg:pr-16 xl:pr-24">
              <FadeIn>
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">Analytics dashboard</p>
                <h2 className="text-h1 font-heading font-bold text-ink">Know your enquiry pipeline at a glance.</h2>
                <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
                  The [PRODUCT NAME] dashboard shows you exactly how your listing is performing: profile views, enquiry volume, conversion rate, and cost per admission. Compare performance across bed types, care categories, or homes in your group.
                </p>
                <p className="text-body-lg text-ink-muted mt-4 leading-relaxed">
                  Spot which care types generate the most enquiries, where families are dropping off, and how quickly your team is following up. Operational data and marketing data in one place, without a spreadsheet in sight.
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
                  Every organisation's data, including enquiry records, family contact details, and portal activity, is fully isolated. No data is shared between organisations. All data is stored within UK and EEA regions, encrypted at rest and in transit, and subject to a Data Processing Agreement provided to every subscriber.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "UK data residency", sub: "All data stored in UK/EEA" },
                  { label: "GDPR compliant", sub: "DPA provided to all subscribers" },
                  { label: "ICO registered", sub: "Registered data controller" },
                  { label: "Tenant isolation", sub: "Row-level security enforced" },
                  { label: "Audit logging", sub: "Every action logged, immutable" },
                  { label: "24-month retention", sub: "Configurable, auto-deleted after" },
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
        headline="See [PRODUCT NAME] in action"
        ctaLabel="Book a demo"
        ctaHref="/contact?subject=[product-slug]"
      />
    </>
  )
}
