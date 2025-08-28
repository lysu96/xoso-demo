import * as service from "../services/results.service.js";
import { ok, created, notFound, conflict } from "../utils/http.js";

export async function getAllByDate(req, res, next) {
  try {
    const { date } = req.query;
    const data = await service.getAllByDate(date);
    return ok(res, data);
  } catch (e) {
    next(e);
  }
}

export async function getByDateRegion(req, res, next) {
  try {
    const { date } = req.query;
    const { region } = req.params;
    const data = await service.getByDateRegion(date, region);
    if (!data) return notFound(res, `No results for ${region} at ${date}`);
    return ok(res, data);
  } catch (e) {
    next(e);
  }
}

export async function getLatestAll(req, res, next) {
  try {
    const data = await service.getLatestAll();
    return ok(res, data);
  } catch (e) {
    next(e);
  }
}

export async function getLatestByRegion(req, res, next) {
  try {
    const { region } = req.params;
    const data = await service.getLatestByRegion(region);
    if (!data) return notFound(res, `No latest results for ${region}`);
    return ok(res, data);
  } catch (e) {
    next(e);
  }
}

export async function create(req, res, next) {
  try {
    const id = await service.create(req.body);
    return created(res, { id }, "Result created");
  } catch (e) {
    if (e?.code === "ER_DUP_ENTRY") {
      return conflict(res, "Result for region & draw_date already exists");
    }
    next(e);
  }
}

export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const changed = await service.update(id, req.body);
    if (!changed) return notFound(res, "Result not found or no change");
    return ok(res, { id: Number(id) }, "Result updated");
  } catch (e) {
    next(e);
  }
}

export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const removed = await service.remove(id);
    if (!removed) return notFound(res, "Result not found");
    return ok(res, { id: Number(id) }, "Result deleted");
  } catch (e) {
    next(e);
  }
}

// Search lô tô
export async function searchLoto(req, res, next) {
  try {
    const { number } = req.query;
    const data = await service.searchLoto(number, 100);
    return ok(res, data);
  } catch (e) {
    next(e);
  }
}
