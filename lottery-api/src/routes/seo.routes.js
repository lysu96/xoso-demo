import { Router } from "express";
import * as ctrl from "../controllers/seo.controller.js";
import { validate } from "../middlewares/validate.js";
import { auth, requireRole } from "../middlewares/auth.js";
import {
  createSeoSchema,
  updateSeoSchema,
  seoIdParamSchema,
} from "../validators/seo.schema.js";

const r = Router();

// 📖 Public APIs
r.get("/seo/:id", validate(seoIdParamSchema, "params"), ctrl.getById);

// ➕ Create SEO metadata (Editor/Admin)
r.post(
  "/seo",
  auth(),
  requireRole("editor", "admin"),
  validate(createSeoSchema),
  ctrl.create
);

// ✏️ Update SEO metadata (Editor/Admin)
r.put(
  "/seo/:id",
  auth(),
  requireRole("editor", "admin"),
  validate(seoIdParamSchema, "params"),
  validate(updateSeoSchema),
  ctrl.update
);

// ❌ Delete SEO metadata (Admin only)
r.delete(
  "/seo/:id",
  auth(),
  requireRole("admin"),
  validate(seoIdParamSchema, "params"),
  ctrl.remove
);

export default r;
