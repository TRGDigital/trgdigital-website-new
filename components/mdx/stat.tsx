export function Stat({
  value,
  label,
  source,
}: {
  value: string
  label: string
  source?: string
}) {
  return (
    <div className="not-prose rounded-lg bg-surface-alt border border-border p-8 my-8">
      <p className="text-display-2 font-heading font-bold text-accent leading-none">{value}</p>
      <p className="text-body font-semibold text-ink mt-3">{label}</p>
      {source && <p className="text-small text-ink-subtle mt-2">{source}</p>}
    </div>
  )
}
