import mysql from "mysql2/promise";
import { env } from "./env.js";

let pool;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: env.db.host,
      port: env.db.port,
      user: env.db.user,
      password: env.db.password,
      database: env.db.database,
      connectionLimit: 10,
      timezone: "Z",
      charset: "utf8mb4_general_ci",
    });
  }
  return pool;
}
