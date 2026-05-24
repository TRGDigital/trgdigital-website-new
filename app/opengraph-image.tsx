import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "TRG Digital: CareTech software for the UK care sector"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0f0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
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
          TRG Digital
        </div>
        <div
          style={{
            color: "#fafaf8",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          CareTech software for the UK care sector.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
