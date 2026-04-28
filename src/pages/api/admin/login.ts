import type { APIRoute } from "astro";
import {
  clearAdminSessionCookie,
  getAdminSessionToken,
  isAdminConfigured,
  setAdminSessionCookie
} from "../../../lib/admin-auth";

function redirectTo(url: string) {
  return new Response(null, {
    status: 302,
    headers: {
      Location: url
    }
  });
}

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAdminConfigured()) {
    clearAdminSessionCookie(cookies);
    return redirectTo("/admin/noticias/?error=config");
  }

  const formData = await request.formData();
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "").trim();

  const envUsername = import.meta.env.ADMIN_USERNAME || "";
  const envPassword = import.meta.env.ADMIN_PASSWORD || "";

  if (username !== envUsername || password !== envPassword) {
    clearAdminSessionCookie(cookies);
    return redirectTo("/admin/noticias/?error=credenciales");
  }

  setAdminSessionCookie(cookies, await getAdminSessionToken());
  return redirectTo("/admin/noticias/");
};
