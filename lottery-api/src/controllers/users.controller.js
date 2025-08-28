import * as service from "../services/users.service.js";
import { ok, created, notFound, forbidden } from "../utils/http.js";

export async function getAll(req, res, next) {
  try {
    const users = await service.getAll();
    return ok(res, users);
  } catch (e) {
    next(e);
  }
}

export async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const user = await service.getById(id);
    if (!user) return notFound(res, "User not found");
    // Nếu không phải admin và không phải chính chủ → cấm
    if (req.user.role !== "admin" && req.user.id !== Number(id)) {
      return forbidden(res, "Forbidden");
    }
    return ok(res, user);
  } catch (e) {
    next(e);
  }
}

export async function create(req, res, next) {
  try {
    const id = await service.create(req.body);
    return created(res, { id }, "User created");
  } catch (e) {
    next(e);
  }
}

export async function update(req, res, next) {
  try {
    const { id } = req.params;
    // Admin hoặc chính chủ mới được update
    if (req.user.role !== "admin" && req.user.id !== Number(id)) {
      return forbidden(res, "Forbidden");
    }
    const changed = await service.update(id, req.body);
    if (!changed) return notFound(res, "User not found or no change");
    return ok(res, { id: Number(id) }, "User updated");
  } catch (e) {
    next(e);
  }
}

export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const removed = await service.remove(id);
    if (!removed) return notFound(res, "User not found");
    return ok(res, { id: Number(id) }, "User deleted");
  } catch (e) {
    next(e);
  }
}
