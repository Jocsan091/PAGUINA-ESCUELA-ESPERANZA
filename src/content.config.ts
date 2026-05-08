import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const noticias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/noticias" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(""),
    date: z.coerce.date().optional(),
    image: z.string().default("/images/slide3.png"),
    gallery: z
      .array(z.union([z.string(), z.object({ foto_url: z.string() })]))
      .optional()
      .default([]),
    video_url: z.string().optional().default(""),
    draft: z.boolean().optional().default(false)
  })
});

const perfiles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/perfiles" }),
  schema: z.object({
    title: z.string(),
    categoria: z.string(),
    grupo: z.string(),
    orden: z.number().default(1),
    nombre: z.string(),
    cargo: z.string(),
    imagen: z.string().default("/images/logo-escuela.png"),
    descripcion: z.string().default("")
  })
});

export const collections = { noticias, perfiles };
