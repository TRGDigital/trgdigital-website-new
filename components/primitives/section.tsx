type SectionVariant = "default" | "alt" | "dark"

interface SectionProps {
  children: React.ReactNode
  variant?: SectionVariant
  className?: string
  as?: React.ElementType
  id?: string
}

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-surface text-ink",
  alt: "bg-surface-alt text-ink",
  dark: "bg-surface-dark text-ink-inverse",
}

export function Section({
  children,
  variant = "default",
  className = "",
  as: Tag = "section",
  id,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`py-16 lg:py-32 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Tag>
  )
}
