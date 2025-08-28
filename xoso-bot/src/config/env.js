import dotenv from "dotenv";

dotenv.config();

/**
 * Toàn bộ config tập trung ở đây để dùng đồng bộ trong project
 */
export const config = {
  telegramToken: process.env.TELEGRAM_TOKEN,
  openRouterKey: process.env.OPENROUTER_KEY,
  internalApi: process.env.INTERNAL_API,
  webhookUrl: process.env.WEBHOOK_URL,
  port: process.env.PORT || 4000,
};
