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
    video_url: z.string().optional().default("")
  })
});

export const collections = { noticias };
