import * as service from "../services/seo.service.js";
import { ok, created, notFound } from "../utils/http.js";

export async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const seo = await service.getById(id);
    if (!seo) return notFound(res, "SEO metadata not found");
    return ok(res, seo);
  } catch (e) {
    next(e);
  }
}

export async function create(req, res, next) {
  try {
    const id = await service.create(req.body);
    return created(res, { id }, "SEO metadata created");
  } catch (e) {
    next(e);
  }
}

export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const changed = await service.update(id, req.body);
    if (!changed) return notFound(res, "SEO metadata not found or no change");
    return ok(res, { id: Number(id) }, "SEO metadata updated");
  } catch (e) {
    next(e);
  }
}

export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const removed = await service.remove(id);
    if (!removed) return notFound(res, "SEO metadata not found");
    return ok(res, { id: Number(id) }, "SEO metadata deleted");
  } catch (e) {
    next(e);
  }
}
