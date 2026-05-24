export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  if (!code) {
    return new Response("Missing code parameter", { status: 400 })
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const { access_token: token, error } = await tokenRes.json()

  if (error || !token) {
    return new Response(`GitHub OAuth error: ${error ?? "no token returned"}`, { status: 400 })
  }

  const html = `<!doctype html><html><body><script>
    (function() {
      function cb(e) {
        window.opener.postMessage(
          'authorization:github:success:' + JSON.stringify({ token: ${JSON.stringify(token)}, provider: 'github' }),
          e.origin
        );
      }
      window.addEventListener('message', cb, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  </script></body></html>`

  return new Response(html, { headers: { "Content-Type": "text/html" } })
}
