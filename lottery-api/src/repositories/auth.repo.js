import { getPool } from "../config/db.js";

export async function createUser({ email, password, name, role }) {
  const pool = getPool();
  const [res] = await pool.query(
    "INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)",
    [email, password, name, role]
  );
  return res.insertId;
}

export async function findByEmail(email) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email]
  );
  return rows[0] || null;
}

export async function findById(id) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT id, email, name, role FROM users WHERE id = ? LIMIT 1",
    [id]
  );
  return rows[0] || null;
}

export async function saveRefreshToken(userId, token) {
  const pool = getPool();
  await pool.query("INSERT INTO user_tokens (user_id, token) VALUES (?, ?)", [
    userId,
    token,
  ]);
}

export async function checkRefreshToken(userId, token) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM user_tokens WHERE user_id = ? AND token = ? LIMIT 1",
    [userId, token]
  );
  return rows[0] || null;
}

export async function deleteRefreshTokens(userId) {
  const pool = getPool();
  await pool.query("DELETE FROM user_tokens WHERE user_id = ?", [userId]);
}

export async function updatePassword(userId, hashed) {
  const pool = getPool();
  const [res] = await pool.query("UPDATE users SET password = ? WHERE id = ?", [
    hashed,
    userId,
  ]);
  return res.affectedRows > 0;
}
