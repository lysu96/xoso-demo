import * as service from "../services/categories.service.js";
import { ok, created, notFound } from "../utils/http.js";

export async function getAll(req, res, next) {
  try {
    const categories = await service.getAll();
    return ok(res, categories);
  } catch (e) {
    next(e);
  }
}

export async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const category = await service.getById(id);
    if (!category) return notFound(res, "Category not found");
    return ok(res, category);
  } catch (e) {
    next(e);
  }
}

export async function create(req, res, next) {
  try {
    const id = await service.create(req.body);
    return created(res, { id }, "Category created");
  } catch (e) {
    next(e);
  }
}

export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const changed = await service.update(id, req.body);
    if (!changed) return notFound(res, "Category not found or no change");
    return ok(res, { id: Number(id) }, "Category updated");
  } catch (e) {
    next(e);
  }
}

export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const removed = await service.remove(id);
    if (!removed) return notFound(res, "Category not found");
    return ok(res, { id: Number(id) }, "Category deleted");
  } catch (e) {
    next(e);
  }
}
