import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/mdx"
import { SITE } from "@/lib/seo"

type SitemapEntry = MetadataRoute.Sitemap[number]

const STATIC_PAGES: SitemapEntry[] = [
  { url: SITE.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE.url}/systems`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE.url}/systems/carestream`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE.url}/systems/careassura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE.url}/systems/care-rota`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE.url}/systems/custom`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE.url}/marketing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE.url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE.url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...STATIC_PAGES, ...posts]
}
