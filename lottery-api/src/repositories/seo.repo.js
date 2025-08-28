import { getPool } from "../config/db.js";

export async function findById(id) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM seo_meta WHERE id = ? LIMIT 1",
    [id]
  );
  return rows[0] || null;
}

export async function insertSeo({
  object_type,
  object_id,
  meta_title,
  meta_description,
  meta_keywords,
  canonical_url,
  og_title,
  og_description,
  og_image,
  twitter_card,
}) {
  const pool = getPool();
  const [res] = await pool.query(
    `INSERT INTO seo_meta 
     (object_type, object_id, meta_title, meta_description, meta_keywords, canonical_url, og_title, og_description, og_image, twitter_card) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      object_type,
      object_id,
      meta_title,
      meta_description,
      meta_keywords,
      canonical_url,
      og_title,
      og_description,
      og_image,
      twitter_card,
    ]
  );
  return res.insertId;
}

export async function updateSeo(
  id,
  {
    meta_title,
    meta_description,
    meta_keywords,
    canonical_url,
    og_title,
    og_description,
    og_image,
    twitter_card,
  }
) {
  const pool = getPool();
  const fields = [];
  const values = [];

  if (meta_title !== undefined) {
    fields.push("meta_title = ?");
    values.push(meta_title);
  }
  if (meta_description !== undefined) {
    fields.push("meta_description = ?");
    values.push(meta_description);
  }
  if (meta_keywords !== undefined) {
    fields.push("meta_keywords = ?");
    values.push(meta_keywords);
  }
  if (canonical_url !== undefined) {
    fields.push("canonical_url = ?");
    values.push(canonical_url);
  }
  if (og_title !== undefined) {
    fields.push("og_title = ?");
    values.push(og_title);
  }
  if (og_description !== undefined) {
    fields.push("og_description = ?");
    values.push(og_description);
  }
  if (og_image !== undefined) {
    fields.push("og_image = ?");
    values.push(og_image);
  }
  if (twitter_card !== undefined) {
    fields.push("twitter_card = ?");
    values.push(twitter_card);
  }

  if (!fields.length) return 0;
  values.push(id);

  const [res] = await pool.query(
    `UPDATE seo_meta SET ${fields.join(", ")} WHERE id = ?`,
    values
  );
  return res.affectedRows;
}

export async function deleteSeo(id) {
  const pool = getPool();
  const [res] = await pool.query("DELETE FROM seo_meta WHERE id = ?", [id]);
  return res.affectedRows;
}
