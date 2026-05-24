import { getAllPosts, formatDate } from "@/lib/blog"
import { SITE } from "@/lib/seo"

export const revalidate = 3600

export async function GET() {
  const posts = await getAllPosts()

  const items = posts
    .slice(0, 20)
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${SITE.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.published_at).toUTCString()}</pubDate>
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("\n      ")}
    </item>`
    )
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name}, Insights</title>
    <link>${SITE.url}/blog</link>
    <description>Practical thinking on care technology, compliance, and running a better care operation.</description>
    <language>en-gb</language>
    <atom:link href="${SITE.url}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${posts[0] ? new Date(posts[0].published_at).toUTCString() : new Date().toUTCString()}</lastBuildDate>
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
