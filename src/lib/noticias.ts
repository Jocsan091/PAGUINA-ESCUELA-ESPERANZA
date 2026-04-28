import { imagenNoticiaPredeterminada, noticiasSeed, type Noticia } from "../data/noticias";
import {
  getNewsBucketName,
  getPublicSupabaseClient,
  getServiceSupabaseClient,
  hasPublicSupabaseConfig,
  hasServiceSupabaseConfig
} from "./supabase";

type NoticiaRow = {
  id: string;
  titulo: string;
  contenido: string;
  imagen_url: string | null;
  fecha_publicacion: string;
  publicada: boolean;
};

type CrearNoticiaInput = {
  titulo: string;
  contenido: string;
  publicada: boolean;
  imagen?: File | null;
};

function mapNewsRow(row: NoticiaRow): Noticia {
  return {
    id: row.id,
    fecha: row.fecha_publicacion.slice(0, 10),
    imagen: row.imagen_url || "",
    titulo: row.titulo,
    contenido: row.contenido,
    publicada: row.publicada
  };
}

function getSeedNoticiasPublicas() {
  return sortByDateDesc(noticiasSeed.filter((noticia) => noticia.publicada));
}

export function getCurrentNewsDate() {
  return new Date().toISOString().slice(0, 10);
}

export function sortByDateDesc<T extends { fecha: string }>(items: T[]) {
  return [...items].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
}

export async function listarNoticiasPublicas() {
  if (!hasPublicSupabaseConfig()) {
    return getSeedNoticiasPublicas();
  }

  const supabase = getPublicSupabaseClient();
  const { data, error } = await supabase
    .from("noticias")
    .select("id, titulo, contenido, imagen_url, fecha_publicacion, publicada")
    .eq("publicada", true)
    .order("fecha_publicacion", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("No se pudieron listar las noticias publicas:", error.message);
    return getSeedNoticiasPublicas();
  }

  return (data || []).map(mapNewsRow);
}

export async function listarNoticiasAdmin() {
  if (!hasServiceSupabaseConfig()) {
    return sortByDateDesc(noticiasSeed);
  }

  const supabase = getServiceSupabaseClient();
  const { data, error } = await supabase
    .from("noticias")
    .select("id, titulo, contenido, imagen_url, fecha_publicacion, publicada")
    .order("fecha_publicacion", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("No se pudieron listar las noticias del admin:", error.message);
    return sortByDateDesc(noticiasSeed);
  }

  return (data || []).map(mapNewsRow);
}

export async function listarUltimasNoticias(limit = 3) {
  const noticias = await listarNoticiasPublicas();
  return noticias.slice(0, limit);
}

export function getNewsImage(image: string) {
  return image || imagenNoticiaPredeterminada;
}

export function formatNewsDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

export function truncateNewsText(text: string, maxLength = 150) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

function sanitizeFileName(fileName: string) {
  return fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9.-]/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

async function uploadNewsImage(file: File) {
  if (!hasServiceSupabaseConfig() || file.size === 0) return "";

  const supabase = getServiceSupabaseClient();
  const bucket = getNewsBucketName();
  const fileExtension = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
  const filePath = `noticias/${Date.now()}-${sanitizeFileName(file.name || `imagen.${fileExtension}`)}`;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, await file.arrayBuffer(), {
      contentType: file.type || "image/jpeg",
      upsert: false
    });

  if (error) {
    throw new Error(`No se pudo subir la imagen: ${error.message}`);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return data.publicUrl;
}

export async function crearNoticia(input: CrearNoticiaInput) {
  if (!hasServiceSupabaseConfig()) {
    throw new Error("Falta SUPABASE_SERVICE_ROLE_KEY para crear noticias.");
  }

  const titulo = input.titulo.trim();
  const contenido = input.contenido.trim();

  if (!titulo || !contenido) {
    throw new Error("El titulo y el contenido son obligatorios.");
  }

  const imagenUrl = input.imagen ? await uploadNewsImage(input.imagen) : "";
  const supabase = getServiceSupabaseClient();
  const fechaPublicacion = getCurrentNewsDate();

  const { error } = await supabase.from("noticias").insert({
    titulo,
    contenido,
    imagen_url: imagenUrl || null,
    fecha_publicacion: fechaPublicacion,
    publicada: input.publicada
  });

  if (error) {
    throw new Error(`No se pudo guardar la noticia: ${error.message}`);
  }
}

export async function eliminarNoticia(id: string) {
  if (!hasServiceSupabaseConfig()) {
    throw new Error("Falta SUPABASE_SERVICE_ROLE_KEY para eliminar noticias.");
  }

  const supabase = getServiceSupabaseClient();
  const { error } = await supabase.from("noticias").delete().eq("id", id);

  if (error) {
    throw new Error(`No se pudo eliminar la noticia: ${error.message}`);
  }
}
