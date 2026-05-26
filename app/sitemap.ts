import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { getAllPublishedPages } from "@/lib/pages"
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, pages] = await Promise.all([getAllPosts(), getAllPublishedPages()])

  const postEntries: SitemapEntry[] = posts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const pageEntries: SitemapEntry[] = pages.map((page) => ({
    url: `${SITE.url}/${page.slug}`,
    lastModified: new Date(page.updated_at),
    changeFrequency: "yearly",
    priority: 0.4,
  }))

  return [...STATIC_PAGES, ...postEntries, ...pageEntries]
}
