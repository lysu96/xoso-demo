import axios from "axios";
import { config } from "../config/env.js";

/**
 * Hàm gọi OpenRouter OCR để phân tích ảnh xổ số
 * @param {string} imageUrl - link ảnh từ Telegram
 * @returns {Promise<Object>} - Object JSON kết quả OCR
 */
export async function handleOCR(imageUrl) {
  try {
    const prompt = `
Bạn là một hệ thống OCR cho kết quả Xổ Số Miền Bắc, Miền Trung, Miền Nam.
Khi nhận được ảnh, hãy làm các bước sau:

1. Thực hiện OCR toàn bộ nội dung số trong ảnh, giữ nguyên định dạng, không bỏ sót.
2. Xác định ngày quay số, loại xổ số (ví dụ: XSMB), và từng giải thưởng.
3. Kết quả trả về phải ở định dạng JSON **chuẩn**, KHÔNG bao gồm chữ thừa hoặc giải thích.
4. Nếu không tìm thấy giá trị nào, để mảng trống.
5. Không dịch, không viết bình luận.
6. Nếu ảnh mờ, hãy dự đoán hợp lý nhất có thể dựa trên phần số nhìn thấy.
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemini-2.0-flash-exp:free",
        messages: [
          {
            role: "system",
            content: "Bạn là OCR chuyên nhận diện kết quả xổ số Việt Nam.",
          },
          {
            role: "user",
            content: prompt,
          },
          {
            role: "user",
            content: `Ảnh kết quả xổ số: ${imageUrl}`,
          },
        ],
        temperature: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${config.openrouterKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    let result = response.data?.choices?.[0]?.message?.content?.trim() || "{}";

    // Xóa bỏ phần bọc ```json ... ``` nếu có
    if (result.startsWith("```")) {
      result = result.replace(/```json|```/g, "").trim();
    }

    // Parse JSON an toàn
    try {
      return JSON.parse(result);
    } catch (err) {
      console.error("❌ JSON parse error:", result);
      throw new Error("OCR response không hợp lệ JSON");
    }
  } catch (error) {
    console.error("OCR service error:", error.response?.data || error.message);
    throw new Error("OCR failed");
  }
}
