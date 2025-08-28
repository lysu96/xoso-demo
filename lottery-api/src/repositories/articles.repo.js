import { getPool } from "../config/db.js";

// Danh sách bài viết (có search/filter)
export async function findAll({ offset, limit, search, category, tag }) {
  const pool = getPool();
  let sql = `
    SELECT a.*, u.name as author_name, c.name as category_name
    FROM articles a
    JOIN users u ON u.id = a.author_id
    LEFT JOIN categories c ON c.id = a.category_id
    WHERE 1=1
  `;
  const params = [];

  if (search) {
    sql += " AND (a.title LIKE ? OR a.content LIKE ?)";
    params.push(`%${search}%`, `%${search}%`);
  }
  if (category) {
    sql += " AND a.category_id = ?";
    params.push(category);
  }
  if (tag) {
    sql += ` AND EXISTS (
      SELECT 1 FROM article_tags at
      JOIN tags t ON t.id = at.tag_id
      WHERE at.article_id = a.id AND t.name = ?
    )`;
    params.push(tag);
  }

  sql += " ORDER BY a.created_at DESC LIMIT ? OFFSET ?";
  params.push(Number(limit), Number(offset));

  const [rows] = await pool.query(sql, params);
  return rows;
}

export async function findBySlug(slug) {
  const pool = getPool();
  const [rows] = await pool.query(
    `SELECT a.*, u.name as author_name, c.name as category_name
     FROM articles a
     JOIN users u ON u.id = a.author_id
     LEFT JOIN categories c ON c.id = a.category_id
     WHERE a.slug = ? LIMIT 1`,
    [slug]
  );
  return rows[0] || null;
}

export async function findById(id) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM articles WHERE id = ? LIMIT 1",
    [id]
  );
  return rows[0] || null;
}

export async function insertArticle({
  title,
  slug,
  content,
  category_id,
  cover_image_id,
  author_id,
}) {
  const pool = getPool();
  const [res] = await pool.query(
    "INSERT INTO articles (title, slug, content, category_id, cover_image_id, author_id, status) VALUES (?, ?, ?, ?, ?, ?, 'draft')",
    [
      title,
      slug,
      content,
      category_id ?? null,
      cover_image_id ?? null,
      author_id,
    ]
  );
  return res.insertId;
}

export async function updateArticle(
  id,
  { title, slug, content, category_id, cover_image_id }
) {
  const pool = getPool();
  const fields = [];
  const values = [];

  if (title !== undefined) {
    fields.push("title = ?");
    values.push(title);
  }
  if (slug !== undefined) {
    fields.push("slug = ?");
    values.push(slug);
  }
  if (content !== undefined) {
    fields.push("content = ?");
    values.push(content);
  }
  if (category_id !== undefined) {
    fields.push("category_id = ?");
    values.push(category_id);
  }
  if (cover_image_id !== undefined) {
    fields.push("cover_image_id = ?");
    values.push(cover_image_id);
  }

  if (!fields.length) return 0;
  values.push(id);

  const [res] = await pool.query(
    `UPDATE articles SET ${fields.join(", ")} WHERE id = ?`,
    values
  );
  return res.affectedRows;
}

export async function deleteArticle(id) {
  const pool = getPool();
  const [res] = await pool.query("DELETE FROM articles WHERE id = ?", [id]);
  return res.affectedRows;
}

export async function publishArticle(id) {
  const pool = getPool();
  const [res] = await pool.query(
    "UPDATE articles SET status = 'published', published_at = NOW() WHERE id = ?",
    [id]
  );
  return res.affectedRows;
}

export async function findRevisions(articleId) {
  const pool = getPool();
  const [rows] = await pool.query(
    "SELECT * FROM article_revisions WHERE article_id = ? ORDER BY created_at DESC",
    [articleId]
  );
  return rows;
}
