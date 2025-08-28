import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { unauthorized, forbidden } from "../utils/http.js";

/**
 * Middleware xác thực người dùng dựa vào JWT
 * - Kiểm tra token trong header Authorization: Bearer <token>
 * - Giải mã và gắn user vào req.user
 */
export function auth(required = true) {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      if (required) return unauthorized(res, "Missing token");
      return next();
    }

    jwt.verify(token, env.jwtSecret, (err, decoded) => {
      if (err) return unauthorized(res, "Invalid or expired token");
      req.user = decoded;
      next();
    });
  };
}

/**
 * Middleware kiểm tra quyền theo role
 * @param {...string} roles - danh sách role được phép (vd: "admin", "editor")
 */
export function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user) return unauthorized(res, "Unauthorized");
    if (!roles.includes(req.user.role)) {
      return forbidden(res, "Forbidden: insufficient role");
    }
    next();
  };
}
