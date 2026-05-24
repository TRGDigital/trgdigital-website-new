"use client"

import Link from "next/link"

export default function MarketingError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <div className="flex flex-1 flex-col items-start justify-center bg-surface px-6 py-24 lg:px-20">
      <div className="mx-auto w-full max-w-[90rem]">
        <p className="text-display-1 font-heading font-bold text-accent/20 leading-none mb-8">
          500
        </p>
        <h1 className="text-h1 font-heading font-bold text-ink mb-4">
          Something went wrong
        </h1>
        <p className="text-body-lg text-ink-muted mb-10 max-w-md">
          We've hit an unexpected error. Please try refreshing, if it keeps
          happening, contact us.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => unstable_retry()}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-body font-semibold text-ink-inverse transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Try again
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-body font-semibold text-ink transition-colors hover:bg-surface-alt focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Contact us
          </Link>
        </div>
        {error.digest && (
          <p className="mt-12 text-small text-ink-subtle">
            Error ref: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
