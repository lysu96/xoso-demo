import { getPool } from "../config/db.js";

export async function findByDate(date) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM lottery_results WHERE draw_date = ? ORDER BY FIELD(region,'MB','MT','MN')",
    [date]
  );
  return rows;
}

export async function findByDateRegion(date, region) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM lottery_results WHERE draw_date = ? AND region = ? LIMIT 1",
    [date, region]
  );
  return rows[0] || null;
}

export async function findLatestByRegion(region) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM lottery_results WHERE region = ? ORDER BY draw_date DESC, id DESC LIMIT 1",
    [region]
  );
  return rows[0] || null;
}

export async function findLatestAllRegions() {
  const pool = getPool();
  const [rows] = await pool.query(`
SELECT r.* FROM lottery_results r
INNER JOIN (
SELECT region, MAX(draw_date) AS max_date FROM lottery_results GROUP BY region
) t ON t.region = r.region AND t.max_date = r.draw_date
ORDER BY FIELD(r.region,'MB','MT','MN')
`);
  return rows;
}

export async function findPrizesByResultIds(ids) {
  if (!ids.length) return [];
  const pool = getPool();
  const [rows] = await pool.query(
    `SELECT * FROM lottery_prizes WHERE result_id IN (${ids
      .map(() => "?")
      .join(",")}) ORDER BY id`,
    ids
  );
  return rows;
}

export async function insertResult({
  region,
  draw_date,
  provinces,
  province_codes,
  raw_json,
}) {
  const pool = getPool();
  const [res] = await pool.query(
    "INSERT INTO lottery_results (region, draw_date, provinces, province_codes, raw_json) VALUES (?, ?, ?, ?, ?)",
    [
      region,
      draw_date,
      provinces ? JSON.stringify(provinces) : null,
      province_codes ? JSON.stringify(province_codes) : null,
      JSON.stringify(raw_json),
    ]
  );
  return res.insertId;
}

export async function insertPrizes(resultId, prizes = []) {
  if (!prizes?.length) return 0;
  const pool = getPool();
  const values = prizes.map((p) => [
    resultId,
    p.province ?? null,
    p.prize_type,
    p.number,
  ]);
  const [res] = await pool.query(
    "INSERT INTO lottery_prizes (result_id, province, prize_type, number) VALUES ?",
    [values]
  );
  return res.affectedRows;
}

export async function updateResult(
  id,
  { provinces, province_codes, raw_json }
) {
  const pool = getPool();
  const [res] = await pool.query(
    "UPDATE lottery_results SET provinces = ?, province_codes = ?, raw_json = ? WHERE id = ?",
    [
      provinces ? JSON.stringify(provinces) : null,
      province_codes ? JSON.stringify(province_codes) : null,
      raw_json !== undefined ? JSON.stringify(raw_json) : null,
      id,
    ]
  );
  return res.affectedRows;
}

export async function deletePrizesByResultId(id) {
  const pool = getPool();
  const [res] = await pool.query(
    "DELETE FROM lottery_prizes WHERE result_id = ?",
    [id]
  );
  return res.affectedRows;
}

export async function deleteResult(id) {
  const pool = getPool();
  const [res] = await pool.query("DELETE FROM lottery_results WHERE id = ?", [
    id,
  ]);
  return res.affectedRows;
}

export async function findById(id) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM lottery_results WHERE id = ? LIMIT 1",
    [id]
  );
  return rows[0] || null;
}
