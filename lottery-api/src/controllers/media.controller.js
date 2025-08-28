import * as service from "../services/media.service.js";
import { ok, created, notFound } from "../utils/http.js";

// Danh sách media
export async function getAll(req, res, next) {
  try {
    const { page = 1, limit = 20 } = req.query;
    const media = await service.getAll({ page, limit });
    return ok(res, media);
  } catch (e) {
    next(e);
  }
}

// Lấy chi tiết media theo id
export async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const media = await service.getById(id);
    if (!media) return notFound(res, "Media not found");
    return ok(res, media);
  } catch (e) {
    next(e);
  }
}

// Upload media
export async function upload(req, res, next) {
  try {
    if (!req.file) return next(new Error("No file uploaded"));
    const id = await service.upload(req.file, req.user.id);
    return created(res, { id }, "Media uploaded");
  } catch (e) {
    next(e);
  }
}

// Xóa media
export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const removed = await service.remove(id);
    if (!removed) return notFound(res, "Media not found");
    return ok(res, { id: Number(id) }, "Media deleted");
  } catch (e) {
    next(e);
  }
}
