import { Router } from "express";
import * as ctrl from "../controllers/articles.controller.js";
import { validate } from "../middlewares/validate.js";
import { auth, requireRole } from "../middlewares/auth.js";
import {
  createArticleSchema,
  updateArticleSchema,
  articleIdParamSchema,
} from "../validators/articles.schema.js";

const r = Router();

// 📖 Public APIs
r.get("/articles", ctrl.getAll);
r.get("/articles/:slug", ctrl.getBySlug);

// ✏️ Create new article (Author+)
r.post(
  "/articles",
  auth(),
  requireRole("author", "editor", "admin"),
  validate(createArticleSchema),
  ctrl.create
);

// 📝 Update article (Author/Editor/Admin)
r.put(
  "/articles/:id",
  auth(),
  validate(articleIdParamSchema, "params"),
  validate(updateArticleSchema),
  ctrl.update
);

// ❌ Delete article (Admin)
r.delete(
  "/articles/:id",
  auth(),
  requireRole("admin"),
  validate(articleIdParamSchema, "params"),
  ctrl.remove
);

// ✅ Publish article (Editor/Admin)
r.post(
  "/articles/:id/publish",
  auth(),
  requireRole("editor", "admin"),
  validate(articleIdParamSchema, "params"),
  ctrl.publish
);

// 📜 Article revisions (Author+)
r.get(
  "/articles/:id/revisions",
  auth(),
  requireRole("author", "editor", "admin"),
  validate(articleIdParamSchema, "params"),
  ctrl.getRevisions
);

export default r;
