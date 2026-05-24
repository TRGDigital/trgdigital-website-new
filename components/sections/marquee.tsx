interface MarqueeProps {
  children: React.ReactNode
  className?: string
}

export function Marquee({ children, className = "" }: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden border-y border-border py-6 ${className}`}
      aria-hidden="true"
    >
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {/* Render twice for seamless loop */}
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
