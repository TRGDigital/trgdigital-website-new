"use client"

import { useEffect, useRef } from "react"
import { ContactForm } from "@/components/forms/contact-form"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  defaultSubject?: string
}

export function ContactModal({ isOpen, onClose, defaultSubject }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen) {
      dialog.showModal()
      document.body.style.overflow = "hidden"
    } else {
      dialog.close()
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => onClose()
    dialog.addEventListener("close", handleClose)
    return () => dialog.removeEventListener("close", handleClose)
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      className="m-0 h-full w-full max-w-none bg-transparent p-0 backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
        <div className="relative w-full max-w-2xl">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-surface border border-border shadow-md text-ink-muted hover:text-ink transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <ContactForm defaultSubject={defaultSubject} />
        </div>
      </div>
    </dialog>
  )
}
