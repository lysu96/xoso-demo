import { z } from "zod";

export const tagIdParamSchema = z.object({
  id: z.string().regex(/^\d+$/, "Invalid tag id"),
});

export const createTagSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Tag name is required"),
    slug: z.string().regex(/^[a-z0-9-]+$/, "Slug must be URL-friendly"),
    description: z.string().optional(),
  }),
});

export const updateTagSchema = z.object({
  body: z.object({
    name: z.string().min(2).optional(),
    slug: z
      .string()
      .regex(/^[a-z0-9-]+$/)
      .optional(),
    description: z.string().optional(),
  }),
});
