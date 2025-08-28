import * as service from "../services/articles.service.js";
import { ok, created, notFound, forbidden } from "../utils/http.js";

// Lấy danh sách bài viết
export async function getAll(req, res, next) {
  try {
    const { page = 1, limit = 10, search, category, tag } = req.query;
    const data = await service.getAll({ page, limit, search, category, tag });
    return ok(res, data);
  } catch (e) {
    next(e);
  }
}

// Lấy chi tiết bài viết theo slug
export async function getBySlug(req, res, next) {
  try {
    const { slug } = req.params;
    const article = await service.getBySlug(slug);
    if (!article) return notFound(res, "Article not found");
    return ok(res, article);
  } catch (e) {
    next(e);
  }
}

// Tạo bài viết mới
export async function create(req, res, next) {
  try {
    const id = await service.create(req.user.id, req.body);
    return created(res, { id }, "Article created");
  } catch (e) {
    next(e);
  }
}

// Cập nhật bài viết
export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const article = await service.getById(id);

    if (!article) return notFound(res, "Article not found");

    // Chỉ author (chính chủ) hoặc editor/admin mới được sửa
    if (
      req.user.role !== "admin" &&
      req.user.role !== "editor" &&
      req.user.id !== article.author_id
    ) {
      return forbidden(res, "Forbidden");
    }

    const changed = await service.update(id, req.body);
    if (!changed) return notFound(res, "No change or article not found");
    return ok(res, { id: Number(id) }, "Article updated");
  } catch (e) {
    next(e);
  }
}

// Xoá bài viết
export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const removed = await service.remove(id);
    if (!removed) return notFound(res, "Article not found");
    return ok(res, { id: Number(id) }, "Article deleted");
  } catch (e) {
    next(e);
  }
}

// Xuất bản bài viết
export async function publish(req, res, next) {
  try {
    const { id } = req.params;
    const changed = await service.publish(id);
    if (!changed)
      return notFound(res, "Article not found or already published");
    return ok(res, { id: Number(id) }, "Article published");
  } catch (e) {
    next(e);
  }
}

// Lấy revisions
export async function getRevisions(req, res, next) {
  try {
    const { id } = req.params;
    const revisions = await service.getRevisions(id);
    return ok(res, revisions);
  } catch (e) {
    next(e);
  }
}
