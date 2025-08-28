import * as repo from "../repositories/seo.repo.js";

export async function getById(id) {
  return repo.findById(id);
}

export async function create(data) {
  return repo.insertSeo(data);
}

export async function update(id, data) {
  return repo.updateSeo(id, data);
}

export async function remove(id) {
  return repo.deleteSeo(id);
}
