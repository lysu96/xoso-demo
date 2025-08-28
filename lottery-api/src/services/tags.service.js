import * as repo from "../repositories/tags.repo.js";

export async function getAll() {
  return repo.findAll();
}

export async function getById(id) {
  return repo.findById(id);
}

export async function create(data) {
  return repo.insertTag(data);
}

export async function update(id, data) {
  return repo.updateTag(id, data);
}

export async function remove(id) {
  return repo.deleteTag(id);
}
