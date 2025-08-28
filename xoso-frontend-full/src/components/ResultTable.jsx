import React from "react";
import { useXoso } from "@/context/XosoContext";
import MainResultsTable from "@/components/MainResultsTable";
import LottoTable from "@/components/LottoTable";
import CommentsSection from "@/components/CommentsSection";

const ResultTable = () => {
  const { data, date, setDate, mien, setMien, loading, error, fetchResults } =
    useXoso();
  // console.log("Dữ liệu từ context:", data);
  const handleDateChange = (e) => {
    setDate(e.target.value);
    fetchResults(new Date(e.target.value), mien);
  };

  const handleMienChange = (e) => {
    setMien(e.target.value);
    fetchResults(date, e.target.value); // gọi API khi đổi miền
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-4 max-w-screen-md mx-auto">
      {/* Control panel */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-red-700 mb-1">
            Ngày
          </label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="w-full border border-red-300 rounded-lg px-3 py-2 text-red-700 focus:ring-2 focus:ring-red-300 focus:border-red-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold text-red-700 mb-1">
            Miền
          </label>
          <select
            value={mien}
            onChange={handleMienChange}
            className="w-full border border-red-300 rounded-lg px-3 py-2 text-red-700 focus:ring-2 focus:ring-red-300 focus:border-red-500"
          >
            <option value="mb">Miền Bắc</option>
            <option value="mt">Miền Trung</option>
            <option value="mn">Miền Nam</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
          <p className="mt-3 text-red-700 font-medium">Đang tải dữ liệu...</p>
        </div>
      ) : error ? (
        <div className="text-center py-8 text-red-600">{error}</div>
      ) : data ? (
        <div className="overflow-hidden">
          <div className="max-w-4xl mx-auto p-4 font-sans bg-gray-50">
            <MainResultsTable data={data} />

            <LottoTable data={data} />
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-red-700 mb-2">
            Không tìm thấy kết quả
          </h3>
          <p className="text-red-600">
            Vui lòng thử lại với ngày hoặc miền khác
          </p>
        </div>
      )}

      {/* Comments Section - Changed to red theme */}
      <CommentsSection />

      {/* Statistics Links - Changed to red theme */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <a
          href="#"
          className="bg-white hover:bg-red-50 p-3 rounded-lg text-center border border-red-200 transition flex flex-col items-center"
        >
          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <span>Lô gan Miền Bắc</span>
        </a>
        <a
          href="#"
          className="bg-white hover:bg-red-50 p-3 rounded-lg text-center border border-red-200 transition flex flex-col items-center"
        >
          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span>KQXS 3 miền Hôm nay</span>
        </a>
        <a
          href="#"
          className="bg-white hover:bg-red-50 p-3 rounded-lg text-center border border-red-200 transition flex flex-col items-center"
        >
          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span>Thống kê giải đặc biệt</span>
        </a>
      </div>

      {/* SMS Information - Changed to red theme */}
      <div className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <div className="bg-white/20 p-3 rounded-lg">
            <p className="font-medium">Nhận KQXS Miền Bắc</p>
            <p className="font-bold text-xl mt-1">
              Soạn{" "}
              <span className="bg-white text-red-700 px-2 py-1 rounded">
                XSMB
              </span>{" "}
              gửi{" "}
              <span className="bg-yellow-400 text-black px-2 py-1 rounded">
                8136
              </span>
            </p>
            <p className="text-sm mt-1">(1.500đ/SMS)</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg">
            <p className="font-medium">Kết quả tường thuật</p>
            <p className="font-bold text-xl mt-1">
              Soạn{" "}
              <span className="bg-white text-red-700 px-2 py-1 rounded">
                XS MB
              </span>{" "}
              gửi{" "}
              <span className="bg-yellow-400 text-black px-2 py-1 rounded">
                8336
              </span>
            </p>
            <p className="text-sm mt-1">(3.000đ/SMS)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
