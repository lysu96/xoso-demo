import * as service from "../services/system.service.js";
import { ok } from "../utils/http.js";

// ✅ Health check
export async function health(req, res) {
  return ok(res, { status: "ok", uptime: process.uptime() });
}

// 🌍 Public site info
export async function siteInfo(req, res, next) {
  try {
    const info = await service.getSiteInfo();
    return ok(res, info);
  } catch (e) {
    next(e);
  }
}

// 🧹 Clear cache
export async function clearCache(req, res, next) {
  try {
    await service.clearCache();
    return ok(res, { cleared: true }, "Cache cleared");
  } catch (e) {
    next(e);
  }
}

// 📜 System logs
export async function getLogs(req, res, next) {
  try {
    const logs = await service.getLogs();
    return ok(res, logs);
  } catch (e) {
    next(e);
  }
}

// ⚙️ Settings
export async function getSettings(req, res, next) {
  try {
    const settings = await service.getSettings();
    return ok(res, settings);
  } catch (e) {
    next(e);
  }
}

export async function updateSettings(req, res, next) {
  try {
    const updated = await service.updateSettings(req.body);
    return ok(res, updated, "Settings updated");
  } catch (e) {
    next(e);
  }
}
