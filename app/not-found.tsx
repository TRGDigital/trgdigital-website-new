import Link from "next/link"
import { Header } from "@/components/chrome/header"
import { Footer } from "@/components/chrome/footer"

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-1 flex-col items-start justify-center bg-surface px-6 py-24 lg:px-20">
        <div className="mx-auto w-full max-w-[90rem]">
          <p className="text-display-1 font-heading font-bold text-accent/20 leading-none mb-8">
            404
          </p>
          <h1 className="text-h1 font-heading font-bold text-ink mb-4">
            Page not found
          </h1>
          <p className="text-body-lg text-ink-muted mb-10 max-w-md">
            The page you're looking for doesn't exist, or may have moved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-body font-semibold text-ink-inverse transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-body font-semibold text-ink transition-colors hover:bg-surface-alt focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
