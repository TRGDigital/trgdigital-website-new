import { buildMetadata } from "@/lib/seo"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata = buildMetadata({
  title: "Contact",
  description: "Talk to TRG Digital. Tell us about your care operation and where it hurts.",
  path: "/contact",
})

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>
}) {
  const { subject } = await searchParams

  return (
    <>
      {/* Page header */}
      <Section variant="default" as="div">
        <Container>
          <div className="max-w-2xl pt-8">
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              Contact
            </p>
            <h1 className="text-display-2 font-heading font-bold text-ink">Talk to us.</h1>
            <p className="text-body-lg text-ink-muted mt-6">
              Tell us about your care operation and where it hurts. We reply to every enquiry
              within one working day.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="default" as="div" className="pt-0">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
            {/* Contact form */}
            <FadeIn>
              <ContactForm defaultSubject={subject} />
            </FadeIn>

            {/* Direct contact + response expectation */}
            <aside>
              <FadeIn delay={100}>
                <div className="space-y-10">
                  <div>
                    <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-6">
                      Direct contact
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-small font-medium text-ink mb-1">Email</p>
                        {/* PLACEHOLDER: real email */}
                        <a
                          href="mailto:hello@trgdigital.example"
                          className="text-body text-accent underline underline-offset-2 hover:opacity-70 transition-opacity"
                        >
                          hello@trgdigital.example
                        </a>
                      </div>
                      <div>
                        <p className="text-small font-medium text-ink mb-1">Phone</p>
                        {/* PLACEHOLDER: real phone */}
                        <a
                          href="tel:+441234567890"
                          className="text-body text-accent underline underline-offset-2 hover:opacity-70 transition-opacity"
                        >
                          +44 (0) 1234 567 890
                        </a>
                      </div>
                      <div>
                        <p className="text-small font-medium text-ink mb-1">Office</p>
                        {/* PLACEHOLDER: real registered office address */}
                        <address className="not-italic text-body text-ink-muted">
                          [PLACEHOLDER]<br />
                          Registered office address<br />
                          pending from TRG Digital
                        </address>
                      </div>
                    </div>
                  </div>

                  {/* PLACEHOLDER: static map image or office photograph, no interactive embed */}
                  <div className="aspect-square rounded-lg border border-border bg-surface-alt flex items-center justify-center">
                    <p className="text-small text-ink-subtle text-center px-4">
                      Office photo or static map, 600×600 [PLACEHOLDER]
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-surface p-6">
                    <p className="text-body font-semibold text-ink mb-1">
                      We reply to every enquiry within one working day.
                    </p>
                    <p className="text-small text-ink-muted">
                      If you need to speak to someone urgently, call the number above.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
