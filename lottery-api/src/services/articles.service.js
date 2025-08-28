import * as repo from "../repositories/articles.repo.js";

export async function getAll({ page = 1, limit = 10, search, category, tag }) {
  const offset = (page - 1) * limit;
  return repo.findAll({ offset, limit, search, category, tag });
}

export async function getBySlug(slug) {
  return repo.findBySlug(slug);
}

export async function getById(id) {
  return repo.findById(id);
}

export async function create(authorId, data) {
  return repo.insertArticle({ ...data, author_id: authorId });
}

export async function update(id, data) {
  return repo.updateArticle(id, data);
}

export async function remove(id) {
  return repo.deleteArticle(id);
}

export async function publish(id) {
  return repo.publishArticle(id);
}

export async function getRevisions(id) {
  return repo.findRevisions(id);
}
