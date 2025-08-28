import { getPool } from "../config/db.js";

export async function findAll() {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM tags ORDER BY created_at DESC"
  );
  return rows;
}

export async function findById(id) {
  const pool = getPool();
  const [rows] = await pool.query("SELECT * FROM tags WHERE id = ? LIMIT 1", [
    id,
  ]);
  return rows[0] || null;
}

export async function insertTag({ name, slug, description }) {
  const pool = getPool();
  const [res] = await pool.query(
    "INSERT INTO tags (name, slug, description) VALUES (?, ?, ?)",
    [name, slug, description ?? null]
  );
  return res.insertId;
}

export async function updateTag(id, { name, slug, description }) {
  const pool = getPool();
  const fields = [];
  const values = [];

  if (name !== undefined) {
    fields.push("name = ?");
    values.push(name);
  }
  if (slug !== undefined) {
    fields.push("slug = ?");
    values.push(slug);
  }
  if (description !== undefined) {
    fields.push("description = ?");
    values.push(description);
  }

  if (!fields.length) return 0;
  values.push(id);

  const [res] = await pool.query(
    `UPDATE tags SET ${fields.join(", ")} WHERE id = ?`,
    values
  );
  return res.affectedRows;
}

export async function deleteTag(id) {
  const pool = getPool();
  const [res] = await pool.query("DELETE FROM tags WHERE id = ?", [id]);
  return res.affectedRows;
}
