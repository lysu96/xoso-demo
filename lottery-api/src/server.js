import app from "./app.js";
import { env } from "./config/env.js";
import { getPool } from "./config/db.js";
import { logger } from "./utils/logger.js";

async function bootstrap() {
  try {
    // Kiểm tra kết nối MySQL trước khi start server
    await getPool().query("SELECT 1");
    logger.info("✅ MySQL connected");
  } catch (e) {
    logger.error("❌ MySQL connection failed:", e.message);
    process.exit(1);
  }

  app.listen(env.port, () => {
    logger.info(`🚀 Server is running at http://localhost:${env.port}`);
  });
}

bootstrap();
