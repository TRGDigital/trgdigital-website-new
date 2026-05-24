import Image from "next/image"

export function Figure({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="not-prose my-10">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-surface-alt">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-small text-ink-subtle text-center">{caption}</figcaption>
      )}
    </figure>
  )
}
