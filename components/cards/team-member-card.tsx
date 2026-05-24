import Image from "next/image"

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

interface TeamMemberCardProps {
  photo?: { src: string; alt: string }
  name: string
  role: string
  bio: string
  linkedin?: string
}

export function TeamMemberCard({ photo, name, role, bio, linkedin }: TeamMemberCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-[transform,shadow] duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-md">
      {/* Photo */}
      <div className="relative aspect-[4/3] bg-surface-alt overflow-hidden">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          /* PLACEHOLDER: team member headshot */
          <div className="absolute inset-0 flex items-center justify-center bg-surface-alt">
            <p className="text-small text-ink-subtle">Headshot [PLACEHOLDER]</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-h3 font-heading font-semibold text-ink">{name}</p>
            <p className="text-small text-accent font-medium mt-0.5">{role}</p>
          </div>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn (opens in new tab)`}
              className="shrink-0 text-ink-subtle opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:text-ink focus:opacity-100 focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-sm"
            >
              <LinkedInIcon size={16} />
            </a>
          )}
        </div>
        <p className="text-body text-ink-muted mt-2 leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}
