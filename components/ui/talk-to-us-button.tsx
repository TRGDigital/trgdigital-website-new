"use client"

import { useState } from "react"
import { ContactModal } from "@/components/ui/contact-modal"

export function TalkToUsButton({ subject }: { subject?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-body font-semibold text-ink-inverse transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent"
      >
        Talk to us
      </button>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} defaultSubject={subject} />
    </>
  )
}
