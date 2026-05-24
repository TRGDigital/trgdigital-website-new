import { ImageResponse } from "next/og"
import { getPostBySlug } from "@/lib/blog"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  const title = post?.title ?? "TRG Digital"
  const tag = post?.tags[0] ?? "Insights"

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0f0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          justifyContent: "flex-end",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            color: "#888888",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          TRG Digital · {tag}
        </div>
        <div
          style={{
            color: "#fafaf8",
            fontSize: title.length > 60 ? 44 : 52,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
