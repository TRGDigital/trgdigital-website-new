"use client"

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html lang="en-GB">
      <body
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#fafaf8",
          color: "#0f0f0f",
          margin: 0,
          padding: "48px 24px",
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          <p
            style={{
              fontSize: "clamp(64px, 12vw, 96px)",
              fontWeight: 700,
              color: "rgba(31,58,61,0.12)",
              lineHeight: 1,
              margin: "0 0 32px",
            }}
          >
            500
          </p>
          <h1 style={{ fontSize: "28px", fontWeight: 700, margin: "0 0 12px" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#555555", lineHeight: 1.6, margin: "0 0 32px", maxWidth: "420px" }}>
            We've hit an unexpected error. Please try refreshing, if it keeps
            happening, contact us directly.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={() => unstable_retry()}
              style={{
                background: "#1f3a3d",
                color: "#fafaf8",
                border: "none",
                borderRadius: "6px",
                padding: "10px 22px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "1px solid #e4e2dc",
                borderRadius: "6px",
                padding: "10px 22px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                color: "#0f0f0f",
              }}
            >
              Back to home
            </a>
          </div>
          {error.digest && (
            <p style={{ marginTop: "40px", fontSize: "12px", color: "#888888" }}>
              Error ref: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  )
}
