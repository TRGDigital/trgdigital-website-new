import { redirect } from "next/navigation"

export async function GET() {
  const clientId = process.env.GITHUB_CLIENT_ID
  if (!clientId) return new Response("GITHUB_CLIENT_ID not configured", { status: 500 })

  const params = new URLSearchParams({
    client_id: clientId,
    scope: "repo,user",
  })

  redirect(`https://github.com/login/oauth/authorize?${params}`)
}
