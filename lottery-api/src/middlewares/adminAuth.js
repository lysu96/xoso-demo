import { env } from "../config/env.js";
import { unauthorized } from "../utils/http.js";

export function adminAuth(req, res, next) {
  const key = req.header("x-api-key");
  if (!key || key !== env.adminApiKey) {
    return unauthorized(res, "Invalid or missing X-API-KEY");
  }
  next();
}
