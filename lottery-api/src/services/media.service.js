import * as repo from "../repositories/media.repo.js";
import path from "path";
import fs from "fs/promises";

// Lấy tất cả media (có phân trang)
export async function getAll({ page = 1, limit = 20 }) {
  const offset = (page - 1) * limit;
  return repo.findAll({ offset, limit });
}

// Lấy chi tiết media theo id
export async function getById(id) {
  return repo.findById(id);
}

// Upload media (lưu metadata DB)
// fileObj: { originalname, filename, mimetype, size, path }
export async function upload(fileObj, uploaderId) {
  const data = {
    filename: fileObj.filename,
    original_name: fileObj.originalname,
    mime_type: fileObj.mimetype,
    size: fileObj.size,
    url: `/uploads/${fileObj.filename}`,
    uploader_id: uploaderId,
  };
  return repo.insertMedia(data);
}

// Xóa media
export async function remove(id) {
  const media = await repo.findById(id);
  if (!media) return 0;

  // Xóa file trên ổ cứng (nếu tồn tại)
  const filePath = path.join(
    process.cwd(),
    "public",
    "uploads",
    media.filename
  );
  try {
    await fs.unlink(filePath);
  } catch {
    // nếu file không tồn tại thì bỏ qua
  }

  return repo.deleteMedia(id);
}
