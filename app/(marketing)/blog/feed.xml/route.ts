import { getAllPosts, formatDate } from "@/lib/mdx"
import { SITE } from "@/lib/seo"

const SITE_URL = SITE.url
const SITE_NAME = SITE.name

export async function GET() {
  const posts = getAllPosts()

  const items = posts
    .slice(0, 20)
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("\n      ")}
    </item>`
    )
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}, Insights</title>
    <link>${SITE_URL}/blog</link>
    <description>Practical thinking on care technology, compliance, and running a better care operation.</description>
    <language>en-gb</language>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${posts[0] ? new Date(posts[0].publishedAt).toUTCString() : new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
