import { Router } from "express";
import * as ctrl from "../controllers/users.controller.js";
import { validate } from "../middlewares/validate.js";
import { auth, requireRole } from "../middlewares/auth.js";
import {
  createUserSchema,
  updateUserSchema,
  userIdParamSchema,
} from "../validators/users.schema.js";

const r = Router();

// 👤 Danh sách users (Admin)
r.get("/users", auth(), requireRole("admin"), ctrl.getAll);

// 👤 Chi tiết user (Admin hoặc chính chủ)
r.get(
  "/users/:id",
  auth(),
  validate(userIdParamSchema, "params"),
  ctrl.getById
);

// ➕ Tạo user mới (Admin)
r.post(
  "/users",
  auth(),
  requireRole("admin"),
  validate(createUserSchema),
  ctrl.create
);

// ✏️ Cập nhật user (Admin hoặc chính chủ)
r.put(
  "/users/:id",
  auth(),
  validate(userIdParamSchema, "params"),
  validate(updateUserSchema),
  ctrl.update
);

// ❌ Xoá user (Admin)
r.delete(
  "/users/:id",
  auth(),
  requireRole("admin"),
  validate(userIdParamSchema, "params"),
  ctrl.remove
);

export default r;
