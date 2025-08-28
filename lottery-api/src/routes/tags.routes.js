import { Router } from "express";
import * as ctrl from "../controllers/tags.controller.js";
import { validate } from "../middlewares/validate.js";
import { auth, requireRole } from "../middlewares/auth.js";
import {
  createTagSchema,
  updateTagSchema,
  tagIdParamSchema,
} from "../validators/tags.schema.js";

const r = Router();

// 📖 Public APIs
r.get("/tags", ctrl.getAll);
r.get("/tags/:id", validate(tagIdParamSchema, "params"), ctrl.getById);

// ➕ Create tag (Editor/Admin)
r.post(
  "/tags",
  auth(),
  requireRole("editor", "admin"),
  validate(createTagSchema),
  ctrl.create
);

// ✏️ Update tag (Editor/Admin)
r.put(
  "/tags/:id",
  auth(),
  requireRole("editor", "admin"),
  validate(tagIdParamSchema, "params"),
  validate(updateTagSchema),
  ctrl.update
);

// ❌ Delete tag (Admin only)
r.delete(
  "/tags/:id",
  auth(),
  requireRole("admin"),
  validate(tagIdParamSchema, "params"),
  ctrl.remove
);

export default r;
