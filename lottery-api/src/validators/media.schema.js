import { z } from "zod";

export const mediaIdParamSchema = z.object({
  id: z.string().regex(/^\d+$/, "Invalid media id"),
});
