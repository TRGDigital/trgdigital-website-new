export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="not-prose border-l-4 border-accent pl-6 py-2 my-10">
      <p className="text-h3 font-heading font-bold text-ink leading-snug">{children}</p>
    </blockquote>
  )
}
