import Image from "next/image"

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-md overflow-hidden text-[0px]">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 bg-slate-100 border-b border-slate-200 px-3 py-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400 shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0" />
        <div className="flex-1 bg-white rounded text-[10px] text-slate-400 px-2 py-0.5 leading-none font-mono truncate ml-1">
          {url}
        </div>
      </div>
      {children}
    </div>
  )
}

function Bar({ w = "full", h = 2, color = "bg-slate-200" }: { w?: string; h?: number; color?: string }) {
  return <div className={`w-${w} h-${h} ${color} rounded-sm`} />
}

function CareHomeMockup({ logo, name, accent }: { logo: string; name: string; accent: string }) {
  return (
    <BrowserFrame url={`www.${name.toLowerCase().replace(/\s/g, "")}.co.uk`}>
      {/* Nav */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
        <Image src={logo} alt={name} width={80} height={22} className="h-5 w-auto object-contain" />
        <div className="flex gap-2">
          <div className="w-7 h-1.5 bg-slate-200 rounded-sm" />
          <div className="w-7 h-1.5 bg-slate-200 rounded-sm" />
          <div className="w-7 h-1.5 bg-slate-200 rounded-sm" />
          <div className={`w-10 h-4 ${accent} rounded-sm`} />
        </div>
      </div>
      {/* Hero */}
      <div className={`${accent} opacity-80 h-14 flex items-center px-3 gap-2`}>
        <div className="flex-1 space-y-1.5">
          <div className="w-24 h-2 bg-white/60 rounded-sm" />
          <div className="w-16 h-1.5 bg-white/40 rounded-sm" />
          <div className="w-12 h-3 bg-white rounded-sm mt-1" />
        </div>
        <div className="w-16 h-12 bg-white/20 rounded" />
      </div>
      {/* Content rows */}
      <div className="px-3 py-2 space-y-2">
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map(i => (
            <div key={i} className="border border-slate-100 rounded p-1.5 space-y-1">
              <div className="w-full h-5 bg-slate-100 rounded-sm" />
              <div className="w-3/4 h-1 bg-slate-200 rounded-sm" />
              <div className="w-1/2 h-1 bg-slate-100 rounded-sm" />
            </div>
          ))}
        </div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-0.5 shrink-0" />
          <div className="flex-1 h-1.5 bg-slate-100 rounded-sm" />
        </div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-0.5 shrink-0" />
          <div className="w-3/4 h-1.5 bg-slate-100 rounded-sm" />
        </div>
      </div>
    </BrowserFrame>
  )
}

function CareAssuraMockup() {
  return (
    <BrowserFrame url="www.careassura.co.uk">
      {/* Nav */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-white">
        <Image src="/careassura-logo.png" alt="CareAssura" width={80} height={22} className="h-5 w-auto object-contain" />
        <div className="flex items-center gap-1.5">
          <div className="w-16 h-3 bg-slate-100 rounded-sm border border-slate-200 flex items-center px-1">
            <div className="w-full h-1 bg-slate-200 rounded-sm" />
          </div>
          <div className="w-8 h-3 bg-teal-500 rounded-sm" />
        </div>
      </div>
      {/* Search hero */}
      <div className="bg-teal-600 px-3 py-2 space-y-1.5">
        <div className="w-28 h-2 bg-white/70 rounded-sm" />
        <div className="w-20 h-1.5 bg-white/40 rounded-sm" />
        <div className="flex gap-1 mt-1">
          <div className="flex-1 h-4 bg-white rounded-sm" />
          <div className="w-8 h-4 bg-amber-400 rounded-sm" />
        </div>
      </div>
      {/* Listings */}
      <div className="px-3 py-2 space-y-1.5">
        <div className="w-20 h-1.5 bg-slate-300 rounded-sm" />
        {[0, 1, 2].map(i => (
          <div key={i} className="flex gap-2 border border-slate-100 rounded p-1.5 items-center">
            <div className="w-8 h-8 bg-slate-100 rounded shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="w-20 h-1.5 bg-slate-300 rounded-sm" />
              <div className="w-14 h-1 bg-slate-200 rounded-sm" />
              <div className="flex gap-0.5">
                {[0,1,1,1,0].map((on, j) => (
                  <div key={j} className={`w-2 h-2 rounded-sm ${on ? "bg-amber-400" : "bg-slate-200"}`} />
                ))}
              </div>
            </div>
            <div className="w-8 h-4 bg-teal-500 rounded-sm shrink-0" />
          </div>
        ))}
      </div>
    </BrowserFrame>
  )
}

function CareStreamMockup() {
  return (
    <BrowserFrame url="app.carestream.co.uk">
      {/* Sidebar + main */}
      <div className="flex h-32">
        {/* Sidebar */}
        <div className="w-12 bg-slate-800 flex flex-col items-center gap-2 py-2 shrink-0">
          <Image src="/carestream-logo.png" alt="CareStream" width={28} height={28} className="w-6 h-6 object-contain" />
          {[0,1,2,3,4].map(i => (
            <div key={i} className={`w-6 h-4 rounded-sm ${i === 0 ? "bg-blue-500" : "bg-slate-600"}`} />
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 bg-slate-50 p-2 space-y-1.5">
          <div className="flex gap-1.5">
            {[
              { label: "Residents", color: "bg-blue-100 border-blue-200", val: "bg-blue-500" },
              { label: "Tasks", color: "bg-amber-50 border-amber-200", val: "bg-amber-500" },
              { label: "Incidents", color: "bg-green-50 border-green-200", val: "bg-green-500" },
            ].map(s => (
              <div key={s.label} className={`flex-1 ${s.color} border rounded p-1`}>
                <div className={`w-4 h-2 ${s.val} rounded-sm mb-1`} />
                <div className="w-full h-1 bg-slate-200 rounded-sm" />
              </div>
            ))}
          </div>
          <div className="w-24 h-1.5 bg-slate-300 rounded-sm" />
          <div className="space-y-1">
            {[0,1,2,3].map(i => (
              <div key={i} className="flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                <div className="flex-1 h-1 bg-slate-200 rounded-sm" />
                <div className="w-6 h-2 bg-slate-100 border border-slate-200 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

export function ProductMockups() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-3">
        <CareStreamMockup />
        <CareHomeMockup
          logo="/images/clients/sea-harbour.png"
          name="Sea Harbour Nursing Home"
          accent="bg-teal-600"
        />
      </div>
      <div className="space-y-3 mt-6">
        <CareAssuraMockup />
        <CareHomeMockup
          logo="/images/clients/laureate-court.png"
          name="Laureate Court Care Home"
          accent="bg-slate-700"
        />
      </div>
    </div>
  )
}
