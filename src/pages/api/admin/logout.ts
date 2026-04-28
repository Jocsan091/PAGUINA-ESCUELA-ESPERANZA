import type { APIRoute } from "astro";
import { clearAdminSessionCookie } from "../../../lib/admin-auth";

export const prerender = false;

export const POST: APIRoute = async ({ cookies }) => {
  clearAdminSessionCookie(cookies);

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/admin/noticias/"
    }
  });
};
