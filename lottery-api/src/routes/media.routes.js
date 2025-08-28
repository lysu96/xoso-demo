import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import * as ctrl from "../controllers/media.controller.js";
import { auth, requireRole } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { mediaIdParamSchema } from "../validators/media.schema.js";

const r = Router();

// ⚙️ Setup multer
const uploadDir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

// 📖 Public APIs
r.get("/media", ctrl.getAll);
r.get("/media/:id", validate(mediaIdParamSchema, "params"), ctrl.getById);

// 📤 Upload file (Editor/Admin)
r.post(
  "/media/upload",
  auth(),
  requireRole("editor", "admin"),
  upload.single("file"),
  ctrl.upload
);

// ❌ Delete file (Admin only)
r.delete(
  "/media/:id",
  auth(),
  requireRole("admin"),
  validate(mediaIdParamSchema, "params"),
  ctrl.remove
);

export default r;
