import Image from "next/image"

function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 bg-slate-100 border-b border-slate-200 px-3 py-2.5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 bg-white rounded-md border border-slate-200 flex items-center gap-1.5 px-2 py-1">
          <div className="w-2 h-2 rounded-full border border-slate-300" />
          <span className="text-[9px] text-slate-400 font-mono truncate leading-none">{url}</span>
        </div>
        <div className="w-4 h-4 rounded bg-slate-200" />
      </div>
      {children}
    </div>
  )
}

function CareStreamMockup({ className = "" }: { className?: string }) {
  return (
    <BrowserFrame url="app.carestream.co.uk/dashboard" className={className}>
      <div className="flex" style={{ height: 220 }}>
        {/* Sidebar */}
        <div className="w-14 bg-slate-900 flex flex-col items-center py-3 gap-1 shrink-0">
          <Image src="/carestream-logo.png" alt="CareStream" width={32} height={32} className="w-7 h-7 object-contain mb-2" />
          {[
            { active: true, color: "bg-blue-500" },
            { active: false, color: "bg-slate-700" },
            { active: false, color: "bg-slate-700" },
            { active: false, color: "bg-slate-700" },
            { active: false, color: "bg-slate-700" },
          ].map((item, i) => (
            <div key={i} className={`w-8 h-7 rounded-lg ${item.color} flex items-center justify-center`}>
              <div className="w-3 h-3 rounded-sm bg-white/30" />
            </div>
          ))}
          <div className="mt-auto w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/70" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-slate-50 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-slate-100">
            <div>
              <div className="text-[9px] font-semibold text-slate-700 leading-none">Good morning, Sarah</div>
              <div className="text-[8px] text-slate-400 leading-none mt-0.5">Crossways Care Home · Today</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-16 h-4 bg-slate-100 rounded border border-slate-200 flex items-center px-1.5 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <div className="w-8 h-1 bg-slate-200 rounded-full" />
              </div>
              <div className="w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-300" />
            </div>
          </div>

          <div className="p-2.5 space-y-2">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: "Residents", val: "42", sub: "2 on leave", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                { label: "Tasks today", val: "18", sub: "6 overdue", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
                { label: "Incidents", val: "3", sub: "This week", color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
              ].map(s => (
                <div key={s.label} className={`${s.bg} border ${s.border} rounded-lg p-1.5`}>
                  <div className={`text-[11px] font-bold ${s.color} leading-none`}>{s.val}</div>
                  <div className="text-[7px] text-slate-500 leading-none mt-0.5">{s.label}</div>
                  <div className="text-[6px] text-slate-400 leading-none mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Mini bar chart */}
            <div className="bg-white rounded-lg border border-slate-100 p-2">
              <div className="text-[8px] font-semibold text-slate-600 mb-1.5">Medication rounds this week</div>
              <div className="flex items-end gap-1 h-10">
                {[65, 80, 55, 90, 75, 85, 40].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className="w-full rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 6 ? "#e2e8f0" : "#3b82f6",
                        opacity: i === 6 ? 1 : 0.7 + (i * 0.05),
                      }}
                    />
                    <div className="text-[5px] text-slate-400">
                      {["M","T","W","T","F","S","S"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent tasks */}
            <div className="bg-white rounded-lg border border-slate-100 p-2">
              <div className="text-[8px] font-semibold text-slate-600 mb-1.5">Upcoming tasks</div>
              <div className="space-y-1">
                {[
                  { text: "Morning medication round — Ward B", done: true, tag: "Medication" },
                  { text: "GP visit — Room 14 (Mrs. Patel)", done: false, tag: "Medical" },
                  { text: "Monthly CQC compliance review", done: false, tag: "Compliance" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className={`w-3 h-3 rounded-full border shrink-0 flex items-center justify-center ${t.done ? "bg-green-500 border-green-500" : "border-slate-300"}`}>
                      {t.done && <div className="w-1.5 h-1 border-b border-r border-white rotate-[-45deg] translate-y-[-1px]" />}
                    </div>
                    <div className={`text-[7px] flex-1 truncate ${t.done ? "line-through text-slate-300" : "text-slate-600"}`}>{t.text}</div>
                    <div className="text-[6px] bg-blue-50 text-blue-500 px-1 py-0.5 rounded shrink-0">{t.tag}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function CareAssuraMockup({ className = "" }: { className?: string }) {
  return (
    <BrowserFrame url="www.careassura.co.uk/find-care/surrey" className={className}>
      <div style={{ height: 220 }} className="overflow-hidden">
        {/* Nav */}
        <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-slate-100">
          <Image src="/careassura-logo.png" alt="CareAssura" width={72} height={20} className="h-4 w-auto object-contain" />
          <div className="flex items-center gap-2">
            <div className="text-[8px] text-slate-500">Find care</div>
            <div className="text-[8px] text-slate-500">For providers</div>
            <div className="text-[8px] bg-teal-600 text-white px-2 py-0.5 rounded-full">List your home</div>
          </div>
        </div>

        {/* Search hero */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 px-3 py-3">
          <div className="text-[10px] font-bold text-white mb-0.5">Find the right care home</div>
          <div className="text-[7px] text-teal-200 mb-2">Search 4,200+ rated care homes across the UK</div>
          <div className="flex gap-1">
            <div className="flex-1 bg-white rounded-lg flex items-center px-2 gap-1 h-6">
              <div className="w-2 h-2 rounded-full border border-slate-300 shrink-0" />
              <div className="text-[8px] text-slate-400 truncate">Town, city or postcode…</div>
            </div>
            <div className="bg-amber-400 text-[8px] font-semibold text-amber-900 px-2 rounded-lg flex items-center">Search</div>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex gap-1 px-3 py-1.5 border-b border-slate-100 bg-white overflow-hidden">
          {["All care types", "Nursing", "Residential", "Dementia", "Respite"].map((f, i) => (
            <div key={f} className={`text-[7px] px-2 py-0.5 rounded-full shrink-0 ${i === 0 ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"}`}>
              {f}
            </div>
          ))}
        </div>

        {/* Listings */}
        <div className="px-3 py-2 space-y-1.5 bg-slate-50">
          <div className="text-[7px] text-slate-500">Showing 48 homes near <span className="font-semibold text-slate-700">Guildford, Surrey</span></div>
          {[
            { name: "Crossways Care Home", type: "Nursing · Dementia", rating: 4, dist: "0.4 mi", cqc: "Outstanding" },
            { name: "The Meadows Residential", type: "Residential · Respite", rating: 5, dist: "1.1 mi", cqc: "Good" },
          ].map(h => (
            <div key={h.name} className="flex gap-2 bg-white rounded-lg border border-slate-200 p-2 items-start">
              <div className="w-12 h-10 bg-slate-100 rounded-md shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[8px] font-semibold text-slate-800 truncate">{h.name}</div>
                <div className="text-[7px] text-slate-400">{h.type}</div>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-sm ${i < h.rating ? "bg-amber-400" : "bg-slate-200"}`} />
                  ))}
                  <span className="text-[6px] text-slate-400 ml-0.5">({h.rating * 12})</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <div className={`text-[6px] px-1 py-0.5 rounded font-semibold ${h.cqc === "Outstanding" ? "bg-green-100 text-green-700" : "bg-blue-50 text-blue-600"}`}>{h.cqc}</div>
                <div className="text-[7px] text-slate-400">{h.dist}</div>
                <div className="text-[7px] bg-teal-600 text-white px-1.5 py-0.5 rounded">View</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

function CareHomeMockup({
  logo,
  name,
  accentFrom,
  accentTo,
  url,
  className = "",
}: {
  logo: string
  name: string
  accentFrom: string
  accentTo: string
  url: string
  className?: string
}) {
  return (
    <BrowserFrame url={url} className={className}>
      <div style={{ height: 220 }} className="overflow-hidden">
        {/* Nav */}
        <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-slate-100">
          <Image src={logo} alt={name} width={100} height={28} className="h-6 w-auto object-contain" />
          <div className="flex items-center gap-3">
            {["About", "Our Care", "Facilities", "Contact"].map(l => (
              <div key={l} className="text-[8px] text-slate-500">{l}</div>
            ))}
            <div className="text-[8px] px-2 py-1 rounded-full text-white" style={{ background: accentFrom }}>Book a visit</div>
          </div>
        </div>

        {/* Hero */}
        <div className="relative h-20 overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative px-4 py-3">
            <div className="text-[11px] font-bold text-white leading-tight max-w-[60%]">
              Where compassionate<br />care meets comfort
            </div>
            <div className="text-[7px] text-white/80 mt-1 max-w-[55%]">Providing exceptional residential and nursing care since 1987</div>
            <div className="flex gap-1.5 mt-2">
              <div className="text-[7px] bg-white font-semibold px-2 py-0.5 rounded-full" style={{ color: accentFrom }}>Book a visit</div>
              <div className="text-[7px] border border-white/60 text-white px-2 py-0.5 rounded-full">Learn more</div>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-white/10 flex items-center justify-center">
            <div className="w-16 h-14 bg-white/20 rounded-lg" />
          </div>
        </div>

        {/* CQC badge row */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border-b border-slate-100">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
              <div className="text-[6px] font-bold text-white">✓</div>
            </div>
            <div>
              <div className="text-[6px] font-semibold text-slate-700">CQC Rating</div>
              <div className="text-[6px] text-green-600 font-bold">Outstanding</div>
            </div>
          </div>
          <div className="w-px h-6 bg-slate-200" />
          <div className="text-[6px] text-slate-500">Rated <span className="font-semibold text-slate-700">9.8/10</span> by families</div>
          <div className="w-px h-6 bg-slate-200" />
          <div className="text-[6px] text-slate-500"><span className="font-semibold text-slate-700">38 years</span> of care</div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-2 px-3 py-2">
          {["Nursing Care", "Dementia Care", "Respite Stays"].map((f, i) => (
            <div key={f} className="rounded-lg overflow-hidden border border-slate-100">
              <div className="h-8 bg-slate-100" style={{ background: `linear-gradient(135deg, ${accentFrom}22, ${accentTo}33)` }} />
              <div className="p-1.5">
                <div className="text-[7px] font-semibold text-slate-700">{f}</div>
                <div className="text-[6px] text-slate-400 mt-0.5">Learn more →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

export function ProductMockups() {
  return (
    <div className="relative" style={{ height: 440 }}>
      {/* Back-left: care home website */}
      <div
        className="absolute w-[320px]"
        style={{ top: 60, left: -20, transform: "rotate(-6deg)", zIndex: 10 }}
      >
        <CareHomeMockup
          logo="/images/clients/sea-harbour.png"
          name="Sea Harbour Nursing Home"
          accentFrom="#0f766e"
          accentTo="#134e4a"
          url="www.seaharbournursinghome.co.uk"
        />
      </div>

      {/* Back-right: CareAssura */}
      <div
        className="absolute w-[320px]"
        style={{ top: 20, right: -30, transform: "rotate(5deg)", zIndex: 20 }}
      >
        <CareAssuraMockup />
      </div>

      {/* Front: CareStream dashboard */}
      <div
        className="absolute w-[340px]"
        style={{ top: 80, left: "50%", transform: "translateX(-50%) rotate(-1.5deg)", zIndex: 30 }}
      >
        <CareStreamMockup />
      </div>
    </div>
  )
}
