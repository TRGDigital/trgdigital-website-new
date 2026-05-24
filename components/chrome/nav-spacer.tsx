"use client"

import { usePathname } from "next/navigation"

// Pages that bleed their hero behind the fixed header need no top spacer.
const BLEED_PAGES = ["/"]

export function NavSpacer() {
  const pathname = usePathname()
  if (BLEED_PAGES.includes(pathname)) return null
  return <div className="h-[88px]" aria-hidden="true" />
}
