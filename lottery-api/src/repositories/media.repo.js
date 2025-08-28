import { getPool } from "../config/db.js";

// Lấy tất cả media có phân trang
export async function findAll({ offset, limit }) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM media ORDER BY created_at DESC LIMIT ? OFFSET ?",
    [limit, offset]
  );
  return rows;
}

// Tìm media theo id
export async function findById(id) {
  const pool = getPool();
  const [rows] = await pool.query("SELECT * FROM media WHERE id = ? LIMIT 1", [
    id,
  ]);
  return rows[0] || null;
}

// Thêm media mới
export async function insertMedia({
  filename,
  original_name,
  mime_type,
  size,
  url,
  uploader_id,
}) {
  const pool = getPool();
  const [res] = await pool.query(
    "INSERT INTO media (filename, original_name, mime_type, size, url, uploader_id) VALUES (?, ?, ?, ?, ?, ?)",
    [filename, original_name, mime_type, size, url, uploader_id]
  );
  return res.insertId;
}

// Xóa media
export async function deleteMedia(id) {
  const pool = getPool();
  const [res] = await pool.query("DELETE FROM media WHERE id = ?", [id]);
  return res.affectedRows;
}
