import { z } from "zod";

export const articleIdParamSchema = z.object({
  id: z.string().regex(/^\d+$/, "Invalid article id"),
});

export const createArticleSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title is required"),
    slug: z.string().regex(/^[a-z0-9-]+$/, "Slug must be URL-friendly"),
    content: z.string().min(10, "Content too short"),
    category_id: z.number().optional(),
    cover_image_id: z.number().optional(),
  }),
});

export const updateArticleSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    slug: z
      .string()
      .regex(/^[a-z0-9-]+$/)
      .optional(),
    content: z.string().min(10).optional(),
    category_id: z.number().optional(),
    cover_image_id: z.number().optional(),
  }),
});
