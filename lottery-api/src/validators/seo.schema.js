import { z } from "zod";

export const seoIdParamSchema = z.object({
  id: z.string().regex(/^\d+$/, "Invalid SEO id"),
});

export const createSeoSchema = z.object({
  body: z.object({
    object_type: z.enum(["article", "page"]),
    object_id: z.number().int(),
    meta_title: z.string().min(3, "Meta title is required"),
    meta_description: z.string().min(10, "Meta description is required"),
    meta_keywords: z.string().optional(),
    canonical_url: z.string().url().optional(),
    og_title: z.string().optional(),
    og_description: z.string().optional(),
    og_image: z.string().url().optional(),
    twitter_card: z.string().optional(),
  }),
});

export const updateSeoSchema = z.object({
  body: z.object({
    meta_title: z.string().min(3).optional(),
    meta_description: z.string().min(10).optional(),
    meta_keywords: z.string().optional(),
    canonical_url: z.string().url().optional(),
    og_title: z.string().optional(),
    og_description: z.string().optional(),
    og_image: z.string().url().optional(),
    twitter_card: z.string().optional(),
  }),
});
