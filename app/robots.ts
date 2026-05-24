import type { MetadataRoute } from "next"
import { SITE } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/design-test/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}
