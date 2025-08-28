import * as repo from "../repositories/system.repo.js";
import fs from "fs/promises";
import path from "path";

// 🌍 Site info (public fields)
export async function getSiteInfo() {
  const settings = await repo.getSettings();
  return {
    site_name: settings.site_name || "Lottery API",
    description:
      settings.site_description || "SEO-friendly lottery & blog platform",
    logo_url: settings.logo_url || "/uploads/logo.png",
  };
}

// 🧹 Clear cache
export async function clearCache() {
  // ví dụ: clear cache folder tmp/cache
  const cacheDir = path.join(process.cwd(), "tmp", "cache");
  try {
    await fs.rm(cacheDir, { recursive: true, force: true });
    await fs.mkdir(cacheDir, { recursive: true });
  } catch {
    // ignore nếu không tồn tại
  }
  return true;
}

// 📜 Get logs (simple version: đọc file logs/app.log)
export async function getLogs() {
  const logPath = path.join(process.cwd(), "logs", "app.log");
  try {
    const data = await fs.readFile(logPath, "utf-8");
    return data.split("\n").slice(-200); // trả về 200 dòng cuối
  } catch {
    return [];
  }
}

// ⚙️ Settings
export async function getSettings() {
  return repo.getSettings();
}

export async function updateSettings(data) {
  await repo.updateSettings(data);
  return repo.getSettings();
}
