import { useXoso } from "@/context/XosoContext";

export default function SidebarRight() {
  const { data } = useXoso();

  if (!data) return <div>Loading...</div>;

  // parse chuỗi JSON
  let giaithuong = {};
  try {
    giaithuong = JSON.parse(data.giaithuong);
  } catch (e) {
    console.error("Lỗi parse giaithuong:", e);
    return <div>Lỗi dữ liệu giải thưởng</div>;
  }

  // Gom tất cả số
  const allNumbers = [];
  Object.values(giaithuong).forEach((arr) => {
    arr.forEach((num) => {
      allNumbers.push(num);
    });
  });
  allNumbers.push(data.giaidacbiet); // thêm giải DB

  // lấy 2 số cuối
  const loto = allNumbers.map((n) => n.slice(-2));

  // đếm tần suất
  const freq = {};
  loto.forEach((num) => {
    freq[num] = (freq[num] || 0) + 1;
  });

  // lọc số có tần suất ≥ 2 và sort giảm dần
  const luckyNumbers = Object.entries(freq)
    .filter(([_, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1]);

  const menuItems = [
    { name: "Thống kê", href: "#", icon: "📊", hot: true },
    { name: "Lịch sử", href: "#", icon: "📅", hot: true },
    { name: "Phân tích cầu", href: "#", icon: "🔍", hot: true },
    { name: "Dự đoán ngày mai", href: "#", icon: "🔮", hot: false },
    { name: "Cầu đặc biệt", href: "#", icon: "🎯", hot: false },
    { name: "Con số may mắn", href: "#", icon: "🍀", hot: false },
    { name: "Lô gan", href: "#", icon: "⏳", hot: false },
    { name: "Bạc nhớ", href: "#", icon: "🧠", hot: false },
  ];

  return (
    <aside className="bg-gradient-to-b from-red-50 to-amber-50 rounded-xl shadow-lg p-5 border border-red-100">
      {/* Header */}
      <div className="mb-5 pb-3 border-b border-red-200">
        <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
          Tổng hợp công cụ
        </h2>
        <p className="text-sm text-red-700 mt-1">
          Phân tích và dự đoán chính xác
        </p>
      </div>

      {/* Menu */}
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="flex items-center p-3 rounded-lg hover:bg-red-100 group transition-all duration-300"
            >
              <span className="text-xl mr-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-medium text-red-900 group-hover:text-red-700">
                {item.name}
              </span>

              {item.hot && (
                <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  Hot
                </span>
              )}

              <svg
                className="w-4 h-4 ml-auto text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </li>
        ))}
      </ul>

      {/* Banner quảng cáo */}
      <div className="mt-6 p-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-center text-white">
        <p className="font-bold mb-2">VIP ĐẶC QUYỀN</p>
        <p className="text-xs mb-3">
          Truy cập dữ liệu độc quyền và dự đoán chính xác
        </p>
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-red-900 font-bold text-sm py-2 px-4 rounded-full shadow-md transition-all">
          Nâng cấp ngay
        </button>
      </div>

      {/* Lucky numbers */}
      <div className="mt-6 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border border-red-200">
        <h3 className="font-bold text-red-800 mb-3 text-center">
          SỐ MAY MẮN HÔM NAY
        </h3>

        {luckyNumbers.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-2">
            {luckyNumbers.map(([num, count]) => (
              <div
                key={num}
                className="w-12 h-12 flex flex-col items-center justify-center bg-gradient-to-b from-red-700 to-red-900 rounded-full text-white font-bold text-lg shadow-lg"
              >
                {num}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Không có số nào lặp lại</p>
        )}
      </div>
    </aside>
  );
}
