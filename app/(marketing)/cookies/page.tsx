// Near-empty in v1, cookieless analytics means no cookies to declare yet
import { buildMetadata } from "@/lib/seo"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How TRG Digital uses cookies on this website.",
  path: "/cookies",
})

export default function CookiesPage() {
  return (
    <Section variant="default" as="div">
      <Container>
        <div className="max-w-3xl py-8">
          <h1 className="text-h1 font-heading font-bold text-ink mb-4">Cookie Policy</h1>
          <p className="text-small text-ink-muted mb-12">Last updated: [PLACEHOLDER]</p>

          <div className="space-y-10">
            <div>
              <h2 className="text-h3 font-heading font-bold text-ink mb-3">
                Does this site use cookies?
              </h2>
              <p className="text-body text-ink-muted leading-relaxed">
                This website uses Plausible Analytics, a cookieless analytics platform. Plausible
                does not use cookies, does not collect personal data, and does not require a cookie
                consent banner.
              </p>
              <p className="text-body text-ink-muted leading-relaxed mt-4">
                As a result, this website currently places no cookies on your device.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-bold text-ink mb-3">
                What if this changes?
              </h2>
              <p className="text-body text-ink-muted leading-relaxed">
                If we add any functionality in future that requires cookies, this policy will be
                updated and appropriate consent mechanisms will be put in place before that
                functionality goes live.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-bold text-ink mb-3">Contact</h2>
              <p className="text-body text-ink-muted leading-relaxed">
                If you have questions about this policy, contact us at{" "}
                <a
                  href="mailto:hello@trgdigital.example"
                  className="text-accent underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  hello@trgdigital.example
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
