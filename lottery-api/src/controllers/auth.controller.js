import * as service from "../services/auth.service.js";
import { ok, created, unauthorized } from "../utils/http.js";

export async function register(req, res, next) {
  try {
    const user = await service.register(req.body);
    return created(res, user, "User registered");
  } catch (e) {
    next(e);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const tokens = await service.login(email, password);
    if (!tokens) return unauthorized(res, "Invalid credentials");
    return ok(res, tokens, "Login successful");
  } catch (e) {
    next(e);
  }
}

export async function refreshToken(req, res, next) {
  try {
    const { refresh_token } = req.body;
    const tokens = await service.refreshToken(refresh_token);
    if (!tokens) return unauthorized(res, "Invalid refresh token");
    return ok(res, tokens, "Token refreshed");
  } catch (e) {
    next(e);
  }
}

export async function logout(req, res, next) {
  try {
    await service.logout(req.user.id);
    return ok(res, {}, "Logged out");
  } catch (e) {
    next(e);
  }
}

export async function getMe(req, res, next) {
  try {
    const user = await service.getMe(req.user.id);
    return ok(res, user);
  } catch (e) {
    next(e);
  }
}

export async function forgotPassword(req, res, next) {
  try {
    const { email } = req.body;
    await service.forgotPassword(email);
    return ok(res, {}, "Password reset email sent (demo)");
  } catch (e) {
    next(e);
  }
}

export async function resetPassword(req, res, next) {
  try {
    const { token, new_password } = req.body;
    const okChange = await service.resetPassword(token, new_password);
    if (!okChange) return unauthorized(res, "Invalid or expired token");
    return ok(res, {}, "Password updated");
  } catch (e) {
    next(e);
  }
}
