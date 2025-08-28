import { getPool } from "../config/db.js";

// Bảng system_settings (key-value store)
export async function getSettings() {
  const pool = getPool();
  const [rows] = await pool.query("SELECT `key`, `value` FROM system_settings");
  const settings = {};
  for (const row of rows) {
    settings[row.key] = row.value;
  }
  return settings;
}

export async function updateSettings(data) {
  const pool = getPool();
  const entries = Object.entries(data);
  if (!entries.length) return 0;

  const promises = entries.map(([key, value]) =>
    pool.query(
      "INSERT INTO system_settings (`key`, `value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)",
      [key, value]
    )
  );

  await Promise.all(promises);
  return entries.length;
}
