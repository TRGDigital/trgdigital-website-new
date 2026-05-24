"use server"

import { Resend } from "resend"
import { ContactSchema, OPERATION_TYPES, type ContactFormState } from "@/lib/contact"
import { SITE } from "@/lib/seo"

const resend = new Resend(process.env.RESEND_API_KEY)

function buildFieldErrors(issues: { path: PropertyKey[]; message: string }[]) {
  const errors: Record<string, string[]> = {}
  for (const issue of issues) {
    const field = issue.path[0]?.toString() ?? "_form"
    if (!errors[field]) errors[field] = []
    errors[field].push(issue.message)
  }
  return errors
}

function operationLabel(value: string) {
  return OPERATION_TYPES.find((o) => o.value === value)?.label ?? value
}

function buildInternalEmail(data: {
  name: string
  company: string
  role?: string
  email: string
  phone?: string
  operationType: string
  message: string
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New enquiry from ${data.name}</title></head>
<body style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f0f0f;">
  <h2 style="margin-top:0;">New website enquiry</h2>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;font-weight:600;width:140px;">Name</td><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;">${data.name}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;font-weight:600;">Company</td><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;">${data.company}</td></tr>
    ${data.role ? `<tr><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;font-weight:600;">Role</td><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;">${data.role}</td></tr>` : ""}
    <tr><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
    ${data.phone ? `<tr><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;font-weight:600;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;">${data.phone}</td></tr>` : ""}
    <tr><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;font-weight:600;">Operation</td><td style="padding:8px 0;border-bottom:1px solid #e4e2dc;">${operationLabel(data.operationType)}</td></tr>
  </table>
  <h3 style="margin-top:24px;margin-bottom:8px;">Message</h3>
  <p style="white-space:pre-wrap;background:#f0efec;padding:16px;border-radius:6px;margin:0;">${data.message}</p>
</body>
</html>`.trim()
}

function buildAcknowledgementEmail(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>We've received your message</title></head>
<body style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f0f0f;">
  <h2 style="margin-top:0;">Thanks for getting in touch, ${name.split(" ")[0]}.</h2>
  <p style="color:#555555;line-height:1.6;">We've received your message and will reply within one working day.</p>
  <p style="color:#555555;line-height:1.6;">If you need to reach us urgently in the meantime, call us directly, details are on our contact page.</p>
  <p style="margin-top:32px;color:#555555;line-height:1.6;">
    Best regards,<br/>
    <strong>The TRG Digital team</strong>
  </p>
  <hr style="border:none;border-top:1px solid #e4e2dc;margin-top:32px;" />
  <p style="font-size:12px;color:#888888;">TRG Digital: CareTech software for the UK care sector<br/><a href="${SITE.url}" style="color:#1f3a3d;">${SITE.url.replace(/^https?:\/\//, "")}</a></p>
</body>
</html>`.trim()
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot, bots fill hidden fields; humans don't
  const trap = formData.get("_trap") as string
  if (trap && trap.length > 0) {
    // Silently "succeed" so the bot gets no useful signal
    return { status: "success" }
  }

  // Flood protection, reject submissions within 3 seconds of page load
  const loadedAt = parseInt((formData.get("_loadedAt") as string) || "0", 10)
  if (loadedAt > 0 && Date.now() - loadedAt < 3000) {
    return {
      status: "error",
      message: "Something went wrong. Please wait a moment and try again.",
    }
  }

  const raw = {
    name: formData.get("name"),
    company: formData.get("company"),
    role: formData.get("role") || undefined,
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    operationType: formData.get("operationType"),
    message: formData.get("message"),
    _trap: formData.get("_trap") || undefined,
    _loadedAt: formData.get("_loadedAt") || undefined,
  }

  const result = ContactSchema.safeParse(raw)

  if (!result.success) {
    return {
      status: "error",
      errors: buildFieldErrors(result.error.issues) as ContactFormState["errors"],
    }
  }

  const { name, company, role, email, phone, operationType, message } = result.data

  const inbox = process.env.CONTACT_INBOX ?? "hello@trgdigital.example"
  const from = process.env.ACKNOWLEDGEMENT_FROM ?? "hello@trgdigital.example"

  try {
    await resend.emails.send({
      from: `TRG Digital Website <${from}>`,
      to: [inbox],
      replyTo: email,
      subject: `New enquiry from ${name}, ${company}`,
      html: buildInternalEmail({ name, company, role, email, phone, operationType, message }),
    })

    await resend.emails.send({
      from: `TRG Digital <${from}>`,
      to: [email],
      subject: "We've received your message",
      html: buildAcknowledgementEmail(name),
    })
  } catch {
    return {
      status: "error",
      message: `We couldn't send your message right now. Please email us directly at ${process.env.CONTACT_INBOX ?? "hello@trgdigital.example"}.`,
    }
  }

  return { status: "success" }
}
