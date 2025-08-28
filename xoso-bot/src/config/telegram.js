import { config } from "./env.js";

export const telegramConfig = {
  token: config.telegramToken,
  webhookUrl: config.webhookUrl,
};
