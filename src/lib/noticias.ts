import { getCollection, type CollectionEntry } from "astro:content";

export type Noticia = CollectionEntry<"noticias">;

export async function listarNoticiasPublicas() {
  const noticias = await getCollection("noticias");
  return noticias.sort(
    (a, b) => getNewsDate(b).getTime() - getNewsDate(a).getTime()
  );
}

export async function listarUltimasNoticias(limit = 3) {
  const noticias = await listarNoticiasPublicas();
  return noticias.slice(0, limit);
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
