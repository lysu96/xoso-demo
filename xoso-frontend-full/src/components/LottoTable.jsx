import React from "react";

const LottoTable = ({ data }) => {
  if (!data) return <p>Không có dữ liệu</p>;

  // Parse chuỗi JSON giải thưởng
  const prizes = data.giaithuong ? JSON.parse(data.giaithuong) : {};

  // Gom tất cả số về mảng
  let numbers = [];
  numbers.push(data.giaidacbiet);
  Object.values(prizes).forEach((arr) => {
    numbers = numbers.concat(arr);
  });

  // Lấy 2 số cuối
  const lotoNumbers = numbers.map((num) => num.toString().slice(-2));

  // Gom theo đầu
  const lotoData = {};
  for (let i = 0; i <= 9; i++) {
    const nums = lotoNumbers.filter((n) => n.startsWith(i.toString()));

    // Gom số trùng lại
    const grouped = nums.reduce((acc, n) => {
      acc[n] = (acc[n] || 0) + 1;
      return acc;
    }, {});

    // Tạo mảng [số, count]
    lotoData[i] = Object.entries(grouped).map(([num, count]) => ({
      num,
      count,
    }));
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th
              colSpan={2}
              className="p-3 bg-red-700 text-white font-bold text-2xl md:text-3xl"
            >
              Bảng Lô Tô {data.mien.toUpperCase()} -{" "}
              {new Date(data.date).toLocaleDateString("vi-VN")}
            </th>
          </tr>
          <tr className="bg-red-100 text-gray-800">
            <th className="p-2 border border-gray-300 w-20">Đầu</th>
            <th className="p-2 border border-gray-300">Lô tô</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(lotoData).map((head) => (
            <tr key={head} className="hover:bg-gray-50 transition-colors">
              <td className="border border-gray-300 p-2 font-bold bg-gray-50 text-gray-700 text-center">
                {head}
              </td>
              <td className="border border-gray-300 p-2 text-left">
                {lotoData[head].length > 0 ? (
                  lotoData[head].map(({ num, count }, idx) => (
                    <span
                      key={idx}
                      className="inline-block mx-1 mb-1 px-2 py-1 rounded-lg shadow-sm bg-red-50 text-red-700 font-bold"
                    >
                      {count > 1 ? `${num}(${count} lần)` : num}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400 italic">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LottoTable;
