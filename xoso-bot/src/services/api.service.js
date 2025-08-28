import axios from "axios";
import { config } from "../config/env.js";

/**
 * Gửi kết quả OCR đã parse về API nội bộ
 * @param {Object|string} result - Object JSON kết quả xổ số (hoặc string JSON)
 * @returns {Promise<Object>} - Response từ API
 */
export async function sendResultToAPI(result) {
  try {
    // Nếu result là string JSON thì parse
    const payload = typeof result === "string" ? JSON.parse(result) : result;

    const response = await axios.post(config.apiUrl, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(`✅ Đã gửi kết quả lên API [${config.apiUrl}]`, response.data);

    return response.data;
  } catch (error) {
    console.error(
      "❌ API service error:",
      error.response?.data || error.message
    );
    throw new Error("Send result to API failed");
  }
}
