import type { APIRoute } from "astro";
import { isAdminAuthenticated } from "../../../lib/admin-auth";
import { crearNoticia } from "../../../lib/noticias";

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
    const imagen = formData.get("imagen");

    await crearNoticia({
      titulo: String(formData.get("titulo") || ""),
      contenido: String(formData.get("contenido") || ""),
      publicada: formData.get("publicada") === "true",
      imagen: imagen instanceof File && imagen.size > 0 ? imagen : null
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/admin/noticias/?status=created"
      }
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/admin/noticias/?error=save"
      }
    });
  }
};
