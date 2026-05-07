export async function onRequest({ request, env }) {
  const clientId = env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response("Falta configurar GITHUB_CLIENT_ID en Cloudflare Pages.", {
      status: 500
    });
  }

  const url = new URL(request.url);
  const githubUrl = new URL("https://github.com/login/oauth/authorize");

  githubUrl.searchParams.set("client_id", clientId);
  githubUrl.searchParams.set("redirect_uri", `${url.origin}/api/callback`);
  githubUrl.searchParams.set("scope", "repo user");
  githubUrl.searchParams.set("state", crypto.randomUUID());

  return Response.redirect(githubUrl.toString(), 302);
}
