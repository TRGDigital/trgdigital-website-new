"use client"

import { useActionState, useState } from "react"
import { submitContact } from "@/app/actions/contact"
import { OPERATION_TYPES, type ContactFormState } from "@/lib/contact"

const INITIAL_STATE: ContactFormState = { status: "idle" }

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null
  return (
    <p id={id} className="mt-1.5 text-small text-red-600" role="alert">
      {errors[0]}
    </p>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-md border bg-surface px-4 py-2.5 text-body text-ink placeholder:text-ink-subtle transition-colors focus:outline-2 focus:outline-offset-1 focus:outline-accent ${
    hasError ? "border-red-400 focus:outline-red-400" : "border-border"
  }`
}

export function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, INITIAL_STATE)

  // Capture page-load time for flood protection
  const [loadedAt] = useState(() =>
    typeof window !== "undefined" ? Date.now().toString() : ""
  )

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-border bg-surface-alt p-8 lg:p-12">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8l3.5 3.5L13 5" stroke="#fafaf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-h3 font-heading font-bold text-ink">Message sent.</p>
            <p className="text-body text-ink-muted mt-2">
              Thanks for getting in touch. We'll reply within one working day.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const e = state.errors ?? {}

  return (
    <form action={formAction} noValidate>
      {/* Honeypot, visually hidden, aria-hidden so screen readers skip it */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label htmlFor="_trap">Leave this blank</label>
        <input type="text" id="_trap" name="_trap" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Flood protection timestamp */}
      <input type="hidden" name="_loadedAt" value={loadedAt} />

      <div className="rounded-lg border border-border bg-surface-alt p-8 lg:p-12 space-y-6">
        <div>
          <p className="text-h3 font-heading font-bold text-ink mb-1">Send us a message</p>
          <p className="text-body text-ink-muted">We reply to every enquiry within one working day.</p>
        </div>

        {/* Form-level error */}
        {state.status === "error" && state.message && (
          <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3" role="alert">
            <p className="text-small text-red-700">{state.message}</p>
          </div>
        )}

        {/* Name + Company */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-small font-medium text-ink mb-1.5">
              Name <span aria-hidden="true" className="text-ink-muted">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
              aria-describedby={e.name ? "name-error" : undefined}
              className={inputClass(!!e.name)}
            />
            <FieldError id="name-error" errors={e.name} />
          </div>

          <div>
            <label htmlFor="company" className="block text-small font-medium text-ink mb-1.5">
              Company <span aria-hidden="true" className="text-ink-muted">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="organization"
              required
              aria-describedby={e.company ? "company-error" : undefined}
              className={inputClass(!!e.company)}
            />
            <FieldError id="company-error" errors={e.company} />
          </div>
        </div>

        {/* Role + Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="role" className="block text-small font-medium text-ink mb-1.5">
              Role <span className="text-ink-subtle font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="role"
              name="role"
              autoComplete="organization-title"
              className={inputClass(!!e.role)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-small font-medium text-ink mb-1.5">
              Email <span aria-hidden="true" className="text-ink-muted">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              aria-describedby={e.email ? "email-error" : undefined}
              className={inputClass(!!e.email)}
            />
            <FieldError id="email-error" errors={e.email} />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-small font-medium text-ink mb-1.5">
            Phone <span className="text-ink-subtle font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className={inputClass(false)}
          />
        </div>

        {/* Operation type */}
        <div>
          <label htmlFor="operationType" className="block text-small font-medium text-ink mb-1.5">
            Operation type <span aria-hidden="true" className="text-ink-muted">*</span>
          </label>
          <select
            id="operationType"
            name="operationType"
            required
            aria-describedby={e.operationType ? "operationType-error" : undefined}
            className={`${inputClass(!!e.operationType)} appearance-none`}
          >
            <option value="">Select your operation type</option>
            {OPERATION_TYPES.map((op) => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
          <FieldError id="operationType-error" errors={e.operationType} />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-small font-medium text-ink mb-1.5">
            Message <span aria-hidden="true" className="text-ink-muted">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            defaultValue={defaultSubject ? `Re: ${defaultSubject}\n\n` : undefined}
            aria-describedby={e.message ? "message-error" : undefined}
            className={`${inputClass(!!e.message)} resize-y min-h-[120px]`}
          />
          <FieldError id="message-error" errors={e.message} />
        </div>

        {/* Privacy note */}
        <p className="text-small text-ink-subtle">
          Your data is used only to respond to your enquiry. See our{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-ink transition-colors">
            privacy policy
          </a>
          .
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-body font-semibold text-ink-inverse transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-50 disabled:cursor-not-allowed"
          aria-disabled={pending}
        >
          {pending ? (
            <>
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </button>
      </div>
    </form>
  )
}
