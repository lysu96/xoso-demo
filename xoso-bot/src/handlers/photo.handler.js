import { handleOCR } from "../services/ocr.service.js";
import { sendResultToAPI } from "../services/api.service.js";
import { config } from "../config/env.js";

/**
 * Xử lý khi nhận ảnh từ Telegram
 * @param {Object} msg - Object tin nhắn Telegram
 * @param {Object} bot - Instance bot Telegram
 */
export async function handlePhoto(msg, bot) {
  try {
    const chatId = msg.chat.id;

    // 1. Lấy fileId của ảnh (chọn ảnh có resolution lớn nhất)
    const fileId = msg.photo[msg.photo.length - 1].file_id;

    // 2. Lấy link ảnh từ Telegram API
    const file = await bot.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${config.telegramToken}/${file.file_path}`;

    // Thông báo đang xử lý
    await bot.sendMessage(chatId, "📸 Đã nhận ảnh, đang xử lý OCR...");

    // 3. Gửi ảnh sang OCR service (OpenRouter)
    const ocrResult = await handleOCR(fileUrl);

    // 4. Gửi kết quả OCR parse về API nội bộ
    const apiRes = await sendResultToAPI(ocrResult);

    // 5. Gửi phản hồi cho user
    if (apiRes?.data?.id) {
      await bot.sendMessage(
        chatId,
        `✅ Đã phân tích xong!\n\nKết quả đã lưu với ID: ${apiRes.data.id}`
      );
    } else {
      await bot.sendMessage(chatId, `⚠️ OCR thành công nhưng lưu DB thất bại.`);
    }
  } catch (err) {
    console.error("❌ Photo handler error:", err.message);
    await bot.sendMessage(
      msg.chat.id,
      "❌ Lỗi khi xử lý ảnh, vui lòng thử lại!"
    );
  }
}
