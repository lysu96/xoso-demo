import { Router } from "express";
import * as ctrl from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.js";
import { auth } from "../middlewares/auth.js";
import {
  loginSchema,
  registerSchema,
  refreshSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "../validators/auth.schema.js";

const r = Router();

r.post("/auth/register", validate(registerSchema), ctrl.register);
r.post("/auth/login", validate(loginSchema), ctrl.login);
r.post("/auth/refresh", validate(refreshSchema), ctrl.refreshToken);
r.post("/auth/logout", auth(), ctrl.logout);

r.get("/auth/me", auth(), ctrl.getMe);

r.post(
  "/auth/forgot-password",
  validate(forgotPasswordSchema),
  ctrl.forgotPassword
);
r.post(
  "/auth/reset-password",
  validate(resetPasswordSchema),
  ctrl.resetPassword
);

export default r;
