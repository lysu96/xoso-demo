import React from "react";
import { useXoso } from "@/context/XosoContext";
import { useLocation } from "react-router-dom";
import ResultTable from "@/components/ResultTable";

export default function ResultPage() {
  const { data, loading, error, mien, date } = useXoso();
  const location = useLocation();

  // Map màu nền theo page
  const bgMap = {
    "/ket-qua": "bg-gradient-to-br from-red-50 to-red-100",
    "/thong-ke": "bg-gradient-to-br from-green-50 to-green-100",
    "/du-doan": "bg-gradient-to-br from-blue-50 to-blue-100",
  };

  const bgClass = bgMap[location.pathname] || "bg-gray-50";

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center h-64 text-gray-500 ${bgClass}`}
      >
        Đang tải kết quả...
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-4 ${bgClass}`}>
        <div className="bg-red-100 text-red-600 rounded-lg p-3">❌ {error}</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={`p-4 ${bgClass}`}>
        <div className="bg-yellow-100 text-yellow-600 rounded-lg p-3">
          Không có dữ liệu
        </div>
      </div>
    );
  }

  let giaithuong = {};
  try {
    giaithuong = JSON.parse(data.giaithuong);
  } catch (e) {
    return (
      <div className={`${bgClass} text-red-500 p-4`}>
        Lỗi dữ liệu giải thưởng
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 md:p-6 ${bgClass}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {location.pathname === "/ket-qua" && "KẾT QUẢ XỔ SỐ"}
          {location.pathname === "/thong-ke" && "THỐNG KÊ XỔ SỐ"}
          {location.pathname === "/du-doan" && "DỰ ĐOÁN XỔ SỐ"}
        </h1>
        <p className="text-gray-500">
          Ngày {new Date(date).toISOString().split("T")[0]} (
          {mien.toUpperCase()})
        </p>
      </div>

      {/* Trang ket-qua*/}
      {location.pathname === "/ket-qua" && (
        <div className="space-y-4">
          <ResultTable />
        </div>
      )}

      {/* Nội dung riêng cho thong-ke */}
      {location.pathname === "/thong-ke" && <ResultTable />}

      {/* Nội dung riêng cho du-doan */}
      {location.pathname === "/du-doan" && <ResultTable />}
    </div>
  );
}
