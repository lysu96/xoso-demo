import { getPool } from "../config/db.js";

export async function findAll() {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT id, email, name, role FROM users ORDER BY id DESC"
  );
  return rows;
}

export async function findById(id) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT id, email, name, role FROM users WHERE id = ? LIMIT 1",
    [id]
  );
  return rows[0] || null;
}

export async function insertUser({ email, password, name, role }) {
  const pool = getPool();
  const [res] = await pool.query(
    "INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)",
    [email, password, name, role || "user"]
  );
  return res.insertId;
}

export async function updateUser(id, { name, password, role }) {
  const pool = getPool();
  const fields = [];
  const values = [];

  if (name !== undefined) {
    fields.push("name = ?");
    values.push(name);
  }
  if (password !== undefined) {
    fields.push("password = ?");
    values.push(password);
  }
  if (role !== undefined) {
    fields.push("role = ?");
    values.push(role);
  }

  if (!fields.length) return 0;

  values.push(id);
  const [res] = await pool.query(
    `UPDATE users SET ${fields.join(", ")} WHERE id = ?`,
    values
  );
  return res.affectedRows;
}

export async function deleteUser(id) {
  const pool = getPool();
  const [res] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
  return res.affectedRows;
}
