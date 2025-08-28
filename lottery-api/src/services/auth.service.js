import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import * as repo from "../repositories/auth.repo.js";

function generateTokens(user) {
  const payload = { id: user.id, email: user.email, role: user.role };
  const accessToken = jwt.sign(payload, env.jwtSecret, { expiresIn: "15m" });
  const refreshToken = jwt.sign(payload, env.jwtSecret, { expiresIn: "7d" });
  return { access_token: accessToken, refresh_token: refreshToken };
}

export async function register({ email, password, name }) {
  const hashed = await bcrypt.hash(password, 10);
  const id = await repo.createUser({
    email,
    password: hashed,
    name,
    role: "user",
  });
  return { id, email, name };
}

export async function login(email, password) {
  const user = await repo.findByEmail(email);
  if (!user) return null;
  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;
  const tokens = generateTokens(user);
  await repo.saveRefreshToken(user.id, tokens.refresh_token);
  return tokens;
}

export async function refreshToken(refreshToken) {
  try {
    const decoded = jwt.verify(refreshToken, env.jwtSecret);
    const exists = await repo.checkRefreshToken(decoded.id, refreshToken);
    if (!exists) return null;
    const user = await repo.findById(decoded.id);
    return generateTokens(user);
  } catch {
    return null;
  }
}

export async function logout(userId) {
  return repo.deleteRefreshTokens(userId);
}

export async function getMe(userId) {
  return repo.findById(userId);
}

export async function forgotPassword(email) {
  // Demo: thường thì generate token và gửi email
  const user = await repo.findByEmail(email);
  if (!user) return;
  const token = jwt.sign({ id: user.id }, env.jwtSecret, { expiresIn: "15m" });
  // TODO: gửi email với link reset password
  console.log("Reset token (demo):", token);
}

export async function resetPassword(token, newPassword) {
  try {
    const decoded = jwt.verify(token, env.jwtSecret);
    const hashed = await bcrypt.hash(newPassword, 10);
    return await repo.updatePassword(decoded.id, hashed);
  } catch {
    return false;
  }
}
