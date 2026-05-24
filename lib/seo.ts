import type { Metadata } from "next"

export const SITE = {
  name: "TRG Digital",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://trgdigital.example").replace(/\/$/, ""),
  description: "CareTech software, websites, and bespoke builds for the UK care sector.",
  twitter: "@trgdigital",
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title: string
  description?: string
  path: string
  ogImage?: string
}): Metadata {
  const url = `${SITE.url}${path}`
  const desc = description ?? SITE.description

  return {
    title: `${title} | ${SITE.name}`,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE.name,
      // Only set an explicit image when one is provided — otherwise the
      // root app/opengraph-image.tsx is used automatically by Next.js
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630 }],
      }),
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      ...(ogImage && { images: [ogImage] }),
    },
  }
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    sameAs: [],
  }
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
  }
}

export function buildArticleSchema({
  title,
  description,
  publishedAt,
  slug,
  authorName,
}: {
  title: string
  description: string
  publishedAt: string
  slug: string
  authorName?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    url: `${SITE.url}/blog/${slug}`,
    author: authorName
      ? { "@type": "Person", name: authorName }
      : { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  }
}
