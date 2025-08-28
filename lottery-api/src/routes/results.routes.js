import { Router } from "express";
import * as ctrl from "../controllers/results.controller.js";
import { validate } from "../middlewares/validate.js";
import { adminAuth } from "../middlewares/adminAuth.js";
import {
  dateQuerySchema,
  regionParamSchema,
  createResultSchema,
  updateResultSchema,
} from "../validators/results.schema.js";

const r = Router();

// GET /api/results?date=YYYY-MM-DD → Trả về kết quả cả 3 miền theo ngày.
r.get("/results", validate(dateQuerySchema, "query"), ctrl.getAllByDate);

// GET /api/results/:region?date=YYYY-MM-DD → Trả về kết quả riêng 1 miền
r.get(
  "/results/:region",
  validate(regionParamSchema, "params"),
  validate(dateQuerySchema, "query"),
  ctrl.getByDateRegion
);

// GET /api/latest-results → Trả về kết quả mới nhất của cả 3 miền.
r.get("/latest-results", ctrl.getLatestAll);

// GET /api/latest-results/:region → Trả về kết quả mới nhất theo miền.
r.get(
  "/latest-results/:region",
  validate(regionParamSchema, "params"),
  ctrl.getLatestByRegion
);

// POST /api/results → (Admin) Thêm kết quả mới vào DB.
r.post("/results", adminAuth, validate(createResultSchema), ctrl.create);

// PUT /api/results/:id → (Admin) Sửa kết quả.
r.put("/results/:id", adminAuth, validate(updateResultSchema), ctrl.update);

// DELETE /api/results/:id → (Admin) Xóa kết quả.
r.delete("/results/:id", adminAuth, ctrl.remove);

// GET /api/search?number=XX → Tra cứu lô tô
r.get("/search", ctrl.searchLoto);

export default r;
