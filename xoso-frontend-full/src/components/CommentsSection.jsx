import { useXoso } from "@/context/XosoContext";

export default function CommentsSection() {
  const { last10days } = useXoso(); // mảng 10 ngày gần nhất

  if (!last10days || last10days.length === 0) return null;

  // Gom loto cho từng ngày
  const dailyLoto = last10days.map((day) => {
    let giai = {};
    try {
      giai = JSON.parse(day.giaithuong);
    } catch {
      giai = {};
    }
    const nums = [];
    Object.values(giai).forEach((arr) =>
      arr.forEach((n) => nums.push(n.slice(-2)))
    );
    nums.push(day.giaidacbiet.slice(-2));
    return new Set(nums); // dùng Set để nhanh kiểm tra có xuất hiện không
  });

  // Tính streak liên tiếp
  const streaks = {};
  const seen = {};

  // duyệt từ ngày gần nhất -> xa nhất
  dailyLoto.forEach((lotoday, idx) => {
    lotoday.forEach((num) => {
      if (seen[num]) {
        // nếu hôm qua có rồi → tiếp tục cộng streak
        if (idx > 0 && dailyLoto[idx - 1].has(num)) {
          streaks[num] = (streaks[num] || 1) + 1;
        } else {
          streaks[num] = 1;
        }
      } else {
        seen[num] = true;
        streaks[num] = 1;
      }
    });
  });

  // Lọc streak ≥ 2
  const hot = Object.entries(streaks)
    .filter(([_, streak]) => streak >= 2)
    .sort((a, b) => b[1] - a[1]);

  return (
    <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-4 rounded-r shadow-sm">
      <div className="flex items-center mb-3">
        <div className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="font-bold text-lg">Nhận định kết quả</h3>
      </div>

      {hot.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {hot.map(([num, streak]) => (
            <p key={num} className="flex items-start">
              <span className="text-red-600 font-bold mr-2">•</span>
              <span>
                <span className="font-bold">{num}</span>: Về {streak} lần trong
                10 ngày gần nhất
              </span>
            </p>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Không có số nào về liên tiếp</p>
      )}
    </div>
  );
}
