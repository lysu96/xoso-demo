import { z } from "zod";

export const userIdParamSchema = z.object({
  id: z.string().regex(/^\d+$/, "Invalid user id"),
});

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    name: z.string().min(2, "Name is required"),
    role: z.enum(["user", "editor", "admin"]).optional(),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    name: z.string().min(2).optional(),
    password: z.string().min(6).optional(),
    role: z.enum(["user", "editor", "admin"]).optional(),
  }),
});
