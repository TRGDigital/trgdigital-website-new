// PLACEHOLDER: requires legal review and TRG company details before launch
import { buildMetadata } from "@/lib/seo"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How TRG Digital collects, uses, and protects your personal data.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <Section variant="default" as="div">
      <Container>
        <div className="max-w-3xl py-8">
          <h1 className="text-h1 font-heading font-bold text-ink mb-4">Privacy Policy</h1>
          {/* PLACEHOLDER: legal review + TRG company details required before launch */}
          <p className="text-small text-ink-muted mb-12">Last updated: [PLACEHOLDER]</p>

          <div className="prose-trg space-y-10">
            {[
              {
                heading: "Data controller",
                body: "TRG Digital ([PLACEHOLDER] company registration number) is the data controller for personal data collected via this website. Registered office: [PLACEHOLDER].",
              },
              {
                heading: "What data we collect",
                body: "When you submit the contact form, we collect: your name, company name, role (optional), email address, phone number (optional), and the message you submit. We do not collect any other personal data via this website.",
              },
              {
                heading: "How we use your data",
                body: "Your data is used solely to respond to your enquiry. We do not add you to marketing lists without your explicit consent, and we do not sell or share your data with third parties.",
              },
              {
                heading: "Lawful basis",
                body: "We process your data on the basis of legitimate interests, specifically, to respond to a business enquiry you have initiated.",
              },
              {
                heading: "Retention",
                body: "Enquiry data is retained in our email inbox for [PLACEHOLDER] months, after which it is deleted.",
              },
              {
                heading: "Your rights",
                body: "You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at hello@trgdigital.example.",
              },
              {
                heading: "ICO registration",
                body: "TRG Digital is registered with the Information Commissioner's Office. Registration number: [PLACEHOLDER].",
              },
              {
                heading: "Complaints",
                body: "If you are unhappy with how we handle your data, you have the right to lodge a complaint with the ICO at ico.org.uk.",
              },
            ].map(({ heading, body }) => (
              <div key={heading}>
                <h2 className="text-h3 font-heading font-bold text-ink mb-3">{heading}</h2>
                <p className="text-body text-ink-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
