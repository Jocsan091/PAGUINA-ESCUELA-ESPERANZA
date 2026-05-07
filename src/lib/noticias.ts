import { getCollection, type CollectionEntry } from "astro:content";

export type Noticia = CollectionEntry<"noticias">;

const archivosNoticias = import.meta.glob("../content/noticias/**/*.md");
export const NOTICIAS_POR_PAGINA = 10;

export async function listarNoticiasPublicas() {
  if (Object.keys(archivosNoticias).length === 0) return [];

  const noticias = await getCollection("noticias");
  return noticias
    .filter((noticia) => !noticia.data.draft)
    .sort((a, b) => getNewsDate(b).getTime() - getNewsDate(a).getTime());
}

export async function listarUltimasNoticias(limit = 3) {
  const noticias = await listarNoticiasPublicas();
  return noticias.slice(0, limit);
}

export async function obtenerNoticiaPorSlug(slug: string) {
  const noticias = await listarNoticiasPublicas();
  return noticias.find((noticia) => getNewsSlug(noticia) === slug);
}

export function getNewsSlug(noticia: Noticia) {
  return noticia.id.replace(/\.md$/, "");
}

export function getNewsUrl(noticia: Noticia) {
  return `/noticias/${getNewsSlug(noticia)}/`;
}

export function getPaginatedNews(noticias: Noticia[], page = 1) {
  const totalPages = Math.max(1, Math.ceil(noticias.length / NOTICIAS_POR_PAGINA));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * NOTICIAS_POR_PAGINA;

  return {
    currentPage,
    totalPages,
    items: noticias.slice(start, start + NOTICIAS_POR_PAGINA)
  };
}

export function getNewsPageUrl(page: number) {
  return page <= 1 ? "/noticias/" : `/noticias/pagina/${page}/`;
}

export function getNewsImage(image?: string) {
  return image || "/images/slide3.png";
}

export function getNewsDate(noticia: Noticia) {
  if (noticia.data.date) return noticia.data.date;

  const dateMatch = noticia.id.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!dateMatch) return new Date(0);

  const [, year, month, day] = dateMatch;
  return new Date(`${year}-${month}-${day}T00:00:00.000Z`);
}

export function getNewsSummary(noticia: Noticia, maxLength = 165) {
  return truncateNewsText(noticia.data.description || noticia.body, maxLength);
}

export function getGalleryImages(gallery: Noticia["data"]["gallery"]) {
  return gallery
    .map((item) => (typeof item === "string" ? item : item.foto_url))
    .filter(Boolean);
}

export function getYoutubeEmbedUrl(videoUrl?: string) {
  if (!videoUrl) return "";

  try {
    const url = new URL(videoUrl);
    const hostname = url.hostname.replace(/^www\./, "");
    let videoId = "";

    if (hostname === "youtu.be") {
      videoId = url.pathname.slice(1);
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      videoId = url.searchParams.get("v") || "";
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  } catch {
    return "";
  }
}

export function formatNewsDate(date: Date) {
  return date.toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC"
  });
}

export function truncateNewsText(text: string, maxLength = 150) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}
