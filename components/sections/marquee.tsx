interface MarqueeProps {
  children: React.ReactNode
  heading?: string
  className?: string
}

export function Marquee({ children, heading, className = "" }: MarqueeProps) {
  return (
    <div className={`border-y border-border ${className}`}>
      {heading && (
        <p className="text-center text-small font-semibold uppercase tracking-widest text-ink-muted pt-6 pb-4">
          {heading}
        </p>
      )}
      <div
        className="overflow-hidden py-6"
        aria-hidden="true"
      >
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* Render twice for seamless loop */}
          <div className="flex shrink-0 items-center gap-16 pr-16">{children}</div>
          <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
