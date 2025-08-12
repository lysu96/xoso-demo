const pool = require('../config/database');

const KetQua = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM ketqua");
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query(
      "SELECT * FROM ketqua WHERE id = ?",
      [id]
    );
    return rows[0];
  },

  async getByDateRegion(date, region) {
    const [rows] = await pool.query(
      "SELECT * FROM ketqua WHERE date = ? AND mien = ?",
      [date, region]
    );
    return rows[0];
  },

  async create(data) {
    const { date, mien, giaidacbiet, giaithuong } = data;
    const [result] = await pool.query(
      `INSERT INTO ketqua (date, mien, giaidacbiet, giaithuong)
       VALUES (?, ?, ?, ?)`,
      [date, mien, giaidacbiet, JSON.stringify(giaithuong)]
    );
    return result.insertId;
  },

  async update(id, data) {
    const { giaidacbiet, giaithuong } = data;
    await pool.query(
      `UPDATE ketqua SET 
        giaidacbiet = ?,
        giaithuong = ?
       WHERE id = ?`,
      [giaidacbiet, JSON.stringify(giaithuong), id]
    );
  },

  async delete(id) {
    await pool.query("DELETE FROM ketqua WHERE id = ?", [id]);
  }
};

module.exports = KetQua;