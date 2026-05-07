function htmlResponse(message, status = 200) {
  return new Response(message, {
    status,
    headers: {
      "content-type": "text/html;charset=UTF-8"
    }
  });
}

function renderAuthPage(provider, status, payload) {
  const message = `authorization:${provider}:${status}:${JSON.stringify(payload)}`;

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Autenticando</title>
  </head>
  <body>
    <script>
      (function () {
        var message = ${JSON.stringify(message)};

        function receiveMessage(event) {
          window.opener.postMessage(message, event.origin);
          window.removeEventListener("message", receiveMessage, false);
          window.close();
        }

        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:${provider}", "*");
      })();
    </script>
  </body>
</html>`;
}

export async function onRequest({ request, env }) {
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return htmlResponse(
      "Falta configurar GITHUB_CLIENT_ID o GITHUB_CLIENT_SECRET en Cloudflare Pages.",
      500
    );
  }

  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return htmlResponse(renderAuthPage("github", "error", { error: "missing_code" }), 400);
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "user-agent": "escuela-esperanza-decap-cms"
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: `${url.origin}/api/callback`
    })
  });

  const result = await tokenResponse.json();

  if (!tokenResponse.ok || result.error || !result.access_token) {
    return htmlResponse(renderAuthPage("github", "error", result), 401);
  }

  return htmlResponse(
    renderAuthPage("github", "success", {
      token: result.access_token,
      provider: "github"
    })
  );
}
