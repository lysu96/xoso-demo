import { z } from "zod";

export const regionEnum = z.enum(["MB", "MT", "MN"]);
export const dateQuerySchema = z.object({
  date: z
    .string({ required_error: "date is required" })
    .regex(/^\d{4}-\d{2}-\d{2}$/, "date must be YYYY-MM-DD"),
});

export const regionParamSchema = z.object({
  region: regionEnum,
});

export const createResultSchema = z.object({
  region: regionEnum,
  draw_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "draw_date must be YYYY-MM-DD"),
  provinces: z.array(z.string()).nullable().optional(),
  province_codes: z.array(z.string()).nullable().optional(),
  raw_json: z.any(),
  prizes: z
    .array(
      z.object({
        province: z.string().nullable().optional(),
        prize_type: z.string(),
        number: z.string(),
      })
    )
    .optional(),
});

export const updateResultSchema = z.object({
  provinces: z.array(z.string()).nullable().optional(),
  province_codes: z.array(z.string()).nullable().optional(),
  raw_json: z.any().optional(),
  prizes: z
    .array(
      z.object({
        province: z.string().nullable().optional(),
        prize_type: z.string(),
        number: z.string(),
      })
    )
    .optional(),
});
