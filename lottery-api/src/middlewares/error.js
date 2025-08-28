import { serverError } from "../utils/http.js";
import { logger } from "../utils/logger.js";

export function errorHandler(err, req, res, next) {
  logger.error(err?.message, err?.stack);
  if (res.headersSent) return;
  return serverError(res, err?.message || "Internal Server Error");
}
