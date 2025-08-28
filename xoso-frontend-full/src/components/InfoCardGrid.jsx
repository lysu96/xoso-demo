import React from "react";

const items = [
  {
    id: "01",
    bg: "/images/eps1.webp", // đường dẫn ảnh background
    title: "Điều kiện đơn giản nhất",
    content:
      "Nam, nữ từ 18 - 39 tuổi. Không yêu cầu bằng cấp. Sức khỏe tốt, không mắc bệnh truyền nhiễm (HIV), không vi phạm pháp luật.",
    iconColor: "text-orange-500",
  },
  {
    id: "02",
    bg: "/images/eps2.webp",
    title: "Chi phí rẻ nhất",
    content:
      "Chỉ 630usd phí đi. Đặt cọc 100 triệu đồng sau này về nước đúng hạn sẽ lấy lại (cả gốc và lãi). Học tiếng, lệ phí thi không vượt quá 8 con số. Nếu học online lại epstopikvn.com gần như miễn phí",
    iconColor: "text-cyan-600",
  },
  {
    id: "03",
    bg: "/images/eps3.webp",
    title: "Thu nhập cao nhất",
    content:
      "Lương cơ bản năm 2025 là 10,030₩ một giờ, 2,096,270₩ một tháng (tương đương với 38 triệu đồng). Thực tế cộng làm thêm giờ dao động từ 45 - 70 triệu đồng",
    iconColor: "text-red-600",
  },
  {
    id: "04",
    bg: "/images/eps4.webp",
    title: "An tâm, tin tưởng nhất",
    content:
      "Đây là chương trình phi lợi nhuận giữa Bộ lao động hai nước (Việt-Hàn) thực hiện. Mọi thủ tục sẽ thực hiện qua sở LĐTBXH và trung tâm lao động ngoài nước nên hoàn toàn yên tâm",
    iconColor: "text-purple-600",
  },
];

export default function EpsInfo() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative w-[360px] h-[360px] bg-no-repeat bg-contain flex flex-col items-center justify-center text-center p-8"
            style={{
              backgroundImage: `url(${item.bg})`,
            }}
          >
            {/* Icon giả lập (thay bằng SVG hoặc icon thật) */}
            <div className={`mb-4 ${item.iconColor}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 2H8c-1.1 0-2 .9-2 2v16l7-3 7 3V4c0-1.1-.9-2-2-2z" />
              </svg>
            </div>
            {/* Tiêu đề */}
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            {/* Nội dung */}
            <p className="text-sm leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
