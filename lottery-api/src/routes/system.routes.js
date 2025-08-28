import { Router } from "express";
import * as ctrl from "../controllers/system.controller.js";
import { auth, requireRole } from "../middlewares/auth.js";

const r = Router();

// ✅ Health check (public)
r.get("/system/health", ctrl.health);

// 🌍 Public site info (logo, site_name, description)
r.get("/system/info", ctrl.siteInfo);

// 🧹 Clear cache (Admin only)
r.post("/system/clear-cache", auth(), requireRole("admin"), ctrl.clearCache);

// 📜 View system logs (Admin only)
r.get("/system/logs", auth(), requireRole("admin"), ctrl.getLogs);

// ⚙️ Settings (Admin only)
r.get("/system/settings", auth(), requireRole("admin"), ctrl.getSettings);
r.put("/system/settings", auth(), requireRole("admin"), ctrl.updateSettings);

export default r;
