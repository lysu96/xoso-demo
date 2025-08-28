import * as repo from "../repositories/results.repo.js";
import { getPool } from "../config/db.js";

// Import & Helper
function inflate(row) {
  return {
    id: row.id,
    region: row.region,
    draw_date: row.draw_date,
    provinces: row.provinces ? JSON.parse(row.provinces) : null,
    province_codes: row.province_codes ? JSON.parse(row.province_codes) : null,
    raw_json: row.raw_json ? JSON.parse(row.raw_json) : null,
  };
}

function mapPrizes(rows) {
  return rows.map((p) => ({
    id: p.id,
    province: p.province,
    prize_type: p.prize_type,
    number: p.number,
  }));
}

// Get Results
export async function getAllByDate(date) {
  const rows = await repo.findByDate(date);
  if (!rows.length) return [];

  const ids = rows.map((r) => r.id);
  const prizes = await repo.findPrizesByResultIds(ids);
  const prizeMap = prizes.reduce((acc, p) => {
    (acc[p.result_id] ||= []).push(p);
    return acc;
  }, {});

  return rows.map((r) => ({
    ...inflate(r),
    prizes: mapPrizes(prizeMap[r.id] || []),
  }));
}

export async function getByDateRegion(date, region) {
  const row = await repo.findByDateRegion(date, region);
  if (!row) return null;

  const prizes = await repo.findPrizesByResultIds([row.id]);
  return {
    ...inflate(row),
    prizes: mapPrizes(prizes),
  };
}

// Get Latest
export async function getLatestAll() {
  const rows = await repo.findLatestAllRegions();
  if (!rows.length) return [];

  const ids = rows.map((r) => r.id);
  const prizes = await repo.findPrizesByResultIds(ids);
  const prizeMap = prizes.reduce((acc, p) => {
    (acc[p.result_id] ||= []).push(p);
    return acc;
  }, {});

  return rows.map((r) => ({
    ...inflate(r),
    prizes: mapPrizes(prizeMap[r.id] || []),
  }));
}

export async function getLatestByRegion(region) {
  const row = await repo.findLatestByRegion(region);
  if (!row) return null;

  const prizes = await repo.findPrizesByResultIds([row.id]);
  return {
    ...inflate(row),
    prizes: mapPrizes(prizes),
  };
}

// CRUD (Admin)
export async function create(data) {
  const id = await repo.insertResult(data);
  if (data.prizes?.length) {
    await repo.insertPrizes(id, data.prizes);
  }
  return id;
}

export async function update(id, data) {
  const updated = await repo.updateResult(id, data);

  if (data.prizes) {
    await repo.deletePrizesByResultId(id);
    if (data.prizes.length) {
      await repo.insertPrizes(id, data.prizes);
    }
  }

  return updated;
}

export async function remove(id) {
  return await repo.deleteResult(id);
}

/**
 * Search lô tô theo số (2-3 chữ số)
 * @param {string} number - Số cần tìm (ví dụ: \"27\")
 * @param {number} limit - Số kết quả tối đa trả về
 */
export async function searchLoto(number, limit = 50) {
  if (!number || number.length < 2) return [];

  const pool = getPool();
  const [rows] = await pool.query(
    `SELECT p.id AS prize_id, p.province, p.prize_type, p.number,
            r.id AS result_id, r.region, r.draw_date, r.provinces, r.province_codes
     FROM lottery_prizes p
     INNER JOIN lottery_results r ON r.id = p.result_id
     WHERE p.number LIKE ?
     ORDER BY r.draw_date DESC, r.region
     LIMIT ?`,
    [`%${number}`, limit]
  );

  return rows.map((row) => ({
    prize_id: row.prize_id,
    prize_type: row.prize_type,
    number: row.number,
    province: row.province,
    result: {
      id: row.result_id,
      region: row.region,
      draw_date: row.draw_date,
      provinces: row.provinces ? JSON.parse(row.provinces) : null,
      province_codes: row.province_codes
        ? JSON.parse(row.province_codes)
        : null,
    },
  }));
}
