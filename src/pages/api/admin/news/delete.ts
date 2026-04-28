import type { APIRoute } from "astro";
import { isAdminAuthenticated } from "../../../../lib/admin-auth";
import { eliminarNoticia } from "../../../../lib/noticias";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!(await isAdminAuthenticated(cookies))) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/admin/noticias/"
      }
    });
  }

  try {
    const formData = await request.formData();
    const id = String(formData.get("id") || "").trim();

    if (id) {
      await eliminarNoticia(id);
    }

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/admin/noticias/"
      }
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/admin/noticias/?error=delete"
      }
    });
  }
};
