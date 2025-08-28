import * as repo from "../repositories/categories.repo.js";

export async function getAll() {
  return repo.findAll();
}

export async function getById(id) {
  return repo.findById(id);
}

export async function create(data) {
  return repo.insertCategory(data);
}

export async function update(id, data) {
  return repo.updateCategory(id, data);
}

export async function remove(id) {
  return repo.deleteCategory(id);
}
