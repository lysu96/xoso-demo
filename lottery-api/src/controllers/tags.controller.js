import * as service from "../services/tags.service.js";
import { ok, created, notFound } from "../utils/http.js";

export async function getAll(req, res, next) {
  try {
    const tags = await service.getAll();
    return ok(res, tags);
  } catch (e) {
    next(e);
  }
}

export async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const tag = await service.getById(id);
    if (!tag) return notFound(res, "Tag not found");
    return ok(res, tag);
  } catch (e) {
    next(e);
  }
}

export async function create(req, res, next) {
  try {
    const id = await service.create(req.body);
    return created(res, { id }, "Tag created");
  } catch (e) {
    next(e);
  }
}

export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const changed = await service.update(id, req.body);
    if (!changed) return notFound(res, "Tag not found or no change");
    return ok(res, { id: Number(id) }, "Tag updated");
  } catch (e) {
    next(e);
  }
}

export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const removed = await service.remove(id);
    if (!removed) return notFound(res, "Tag not found");
    return ok(res, { id: Number(id) }, "Tag deleted");
  } catch (e) {
    next(e);
  }
}
