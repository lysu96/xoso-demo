import { Router } from "express";
import * as ctrl from "../controllers/categories.controller.js";
import { validate } from "../middlewares/validate.js";
import { auth, requireRole } from "../middlewares/auth.js";
import {
  createCategorySchema,
  updateCategorySchema,
  categoryIdParamSchema,
} from "../validators/categories.schema.js";

const r = Router();

// 📖 Public APIs
r.get("/categories", ctrl.getAll);
r.get(
  "/categories/:id",
  validate(categoryIdParamSchema, "params"),
  ctrl.getById
);

// ➕ Create category (Admin/Editor)
r.post(
  "/categories",
  auth(),
  requireRole("editor", "admin"),
  validate(createCategorySchema),
  ctrl.create
);

// ✏️ Update category (Admin/Editor)
r.put(
  "/categories/:id",
  auth(),
  requireRole("editor", "admin"),
  validate(categoryIdParamSchema, "params"),
  validate(updateCategorySchema),
  ctrl.update
);

// ❌ Delete category (Admin only)
r.delete(
  "/categories/:id",
  auth(),
  requireRole("admin"),
  validate(categoryIdParamSchema, "params"),
  ctrl.remove
);

export default r;
