import express from "express";
import { handlePhoto } from "../handlers/photo.handler.js";

const router = express.Router();

/**
 * Webhook cho Telegram
 * URL: /webhook/telegram
 */
router.post("/telegram", async (req, res) => {
  try {
    const bot = req.app.get("bot"); // instance bot được inject từ app.js
    const update = req.body;

    if (update.message) {
      const msg = update.message;

      if (msg.photo) {
        // Nếu có ảnh → gọi handler xử lý OCR
        await handlePhoto(msg, bot);
      } else {
        // Nếu không có ảnh → gửi nhắc nhở
        await bot.sendMessage(
          msg.chat.id,
          "⚠️ Vui lòng gửi ảnh kết quả xổ số để tôi xử lý!"
        );
      }
    }

    // Phản hồi 200 OK cho Telegram để tránh retry
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("❌ Webhook error:", err.message);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;
