import TelegramBot from "node-telegram-bot-api";
import axios from "axios";
import { telegramConfig } from "../config/telegram.js";
import { config } from "../config/env.js";
import { handleOCR } from "./ocr.service.js";

// Khởi tạo bot Telegram
export const bot = new TelegramBot(telegramConfig.token);

// Hàm setup webhook & xử lý ảnh
export function setupTelegramRoutes(app) {
  // Webhook endpoint
  app.post(`/webhook/${telegramConfig.token}`, async (req, res) => {
    const update = req.body;

    if (update.message?.photo) {
      const chatId = update.message.chat.id;
      const fileId = update.message.photo.pop().file_id;
      const fileUrl = await bot.getFileLink(fileId);

      await bot.sendMessage(chatId, "📸 Đang xử lý ảnh...");

      try {
        // OCR pipeline
        const result = await handleOCR(fileUrl);

        // Gửi kết quả về Telegram
        await bot.sendMessage(chatId, `✅ Kết quả OCR:\n${result}`);

        // Đẩy dữ liệu sang API nội bộ
        await axios.post(config.internalApi, JSON.parse(result));
      } catch (e) {
        console.error("❌ OCR pipeline error:", e.message);
        await bot.sendMessage(chatId, "❌ Lỗi khi xử lý OCR");
      }
    }

    res.sendStatus(200);
  });
}
