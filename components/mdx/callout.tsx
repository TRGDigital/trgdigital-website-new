type CalloutVariant = "info" | "warning" | "tip"

const STYLES: Record<CalloutVariant, string> = {
  info: "bg-accent/5 border-accent/20 text-ink",
  warning: "bg-amber-50 border-amber-200 text-amber-900",
  tip: "bg-emerald-50 border-emerald-200 text-emerald-900",
}

const LABELS: Record<CalloutVariant, string> = {
  info: "Note",
  warning: "Warning",
  tip: "Tip",
}

export function Callout({
  variant = "info",
  children,
}: {
  variant?: CalloutVariant
  children: React.ReactNode
}) {
  return (
    <div className={`not-prose rounded-lg border p-5 my-8 ${STYLES[variant]}`}>
      <p className="text-small font-semibold uppercase tracking-widest mb-2 opacity-60">
        {LABELS[variant]}
      </p>
      <div className="text-body leading-relaxed">{children}</div>
    </div>
  )
}
