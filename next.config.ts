import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Fail fast if someone tries to deploy with the placeholder domain still in place
if (
  process.env.VERCEL_ENV === "production" &&
  process.env.ALLOW_PLACEHOLDERS !== "true" &&
  (!process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL === "https://trgdigital.example")
) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL is not set or still contains the placeholder value. " +
    "Set it to the production domain before building. " +
    "Set ALLOW_PLACEHOLDERS=true to bypass this check on staging."
  )
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const isDev = process.env.NODE_ENV === "development"

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://plausible.io`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self' https://plausible.io",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  // HSTS: 2 years, include subdomains, eligible for preload
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
]

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    mdxRs: true,
  },
  async headers() {
    const adminCsp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com",
      "style-src 'self' 'unsafe-inline' https://unpkg.com",
      "img-src 'self' blob: data: https://*.githubusercontent.com https://avatars.githubusercontent.com",
      "font-src 'self' https://unpkg.com",
      "connect-src 'self' https://api.github.com https://github.com https://unpkg.com https://raw.githubusercontent.com",
      "frame-src 'self'",
      "object-src 'none'",
    ].join("; ")

    return [
      {
        source: "/admin/:path*",
        headers: [
          { key: "Content-Security-Policy", value: adminCsp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/((?!admin).*)",
        headers: securityHeaders,
      },
    ]
  },
};

export default withMDX(nextConfig);
