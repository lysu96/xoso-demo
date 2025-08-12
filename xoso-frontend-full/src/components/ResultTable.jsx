import React, { useState, useEffect } from 'react';
import MainResultsTable from './MainResultsTable';
import LottoTable from './LottoTable';
const ResultTable = () => {
  const [results, setResults] = useState(null);
  const [date, setDate] = useState('2025-07-19');
  const [mien, setMien] = useState('mb');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const mockData = {
        title: 'XSMB - Kết quả Xổ số Miền Bắc - SXMB hôm nay',
        giaidacbiet: '15306',
        columns: ['2KQ', '3KQ', '8KQ', '11KQ', '14KQ', '15KQ'],
        rows: [
          { label: 'ĐB', values: ['15306'] },
          { label: '1', values: ['32824'] },
          { label: '2', values: ['63233', '03056'] },
          { label: '3', values: ['33063', '02960', '82616', '86394', '02447', '61145'] },
          { label: '4', values: ['8843', '1179', '4275', '2719'] },
          { label: '5', values: ['7864', '3086', '1991', '2619', '6119', '4920'] },
          { label: '6', values: ['647', '646', '118'] },
          { label: '7', values: ['60', '13', '81', '30'] },
        ]
      };
      setResults(mockData);
      setIsLoading(false);
    }, 500);
  }, [date, mien]);

  const handleDateChange = e => setDate(e.target.value);
  const handleMienChange = e => setMien(e.target.value);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-4 max-w-screen-md mx-auto">
      {/* Control panel - Responsive */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-red-700 mb-1">Ngày</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="w-full border border-red-300 rounded-lg px-3 py-2 text-red-700 focus:ring-2 focus:ring-red-300 focus:border-red-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold text-red-700 mb-1">Miền</label>
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

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
          <p className="mt-3 text-red-700 font-medium">Đang tải dữ liệu...</p>
        </div>
      ) : results ? (
      <div className="overflow-hidden">
      {/* Table responsive container */}
      <div className="max-w-4xl mx-auto p-4 font-sans bg-gray-50 min-h-screen">
      {/* Main Results Table */}
      <MainResultsTable />
      {/* Lotto Table - Changed to red theme */}
      <LottoTable />

      {/* Comments Section - Changed to red theme */}
      <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-4 rounded-r shadow-sm">
        <div className="flex items-center mb-3">
          <div className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Nhận định kết quả</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <p className="flex items-start">
            <span className="text-red-600 font-bold mr-2">•</span>
            <span><span className="font-bold">66</span>: Về liên tiếp 3 ngày</span>
          </p>
          <p className="flex items-start">
            <span className="text-red-600 font-bold mr-2">•</span>
            <span><span className="font-bold">33</span>: Về liên tiếp 2 ngày</span>
          </p>
          <p className="flex items-start">
            <span className="text-red-600 font-bold mr-2">•</span>
            <span><span className="font-bold">86</span>: Về liên tiếp 2 ngày</span>
          </p>
          <p className="flex items-start">
            <span className="text-red-600 font-bold mr-2">•</span>
            <span><span className="font-bold">47</span>: Về 2 lần</span>
          </p>
          <p className="flex items-start">
            <span className="text-red-600 font-bold mr-2">•</span>
            <span><span className="font-bold">93</span>: Gan 9 ngày đã về</span>
          </p>
          <p className="flex items-start">
            <span className="text-red-600 font-bold mr-2">•</span>
            <span><span className="font-bold">85</span>: Về liên tiếp 2 ngày</span>
          </p>
          <p className="flex items-start">
            <span className="text-red-600 font-bold mr-2">•</span>
            <span><span className="font-bold">73</span>: Gan 16 ngày đã về</span>
          </p>
          <p className="flex items-start">
            <span className="text-red-600 font-bold mr-2">•</span>
            <span><span className="font-bold">15</span>: Gan 10 ngày đã về</span>
          </p>
        </div>
      </div>

      {/* Statistics Links - Changed to red theme */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <a href="#" className="bg-white hover:bg-red-50 p-3 rounded-lg text-center border border-red-200 transition flex flex-col items-center">
          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span>Lô gan Miền Bắc</span>
        </a>
        <a href="#" className="bg-white hover:bg-red-50 p-3 rounded-lg text-center border border-red-200 transition flex flex-col items-center">
          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span>KQXS 3 miền Hôm nay</span>
        </a>
        <a href="#" className="bg-white hover:bg-red-50 p-3 rounded-lg text-center border border-red-200 transition flex flex-col items-center">
          <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <p className="font-bold text-xl mt-1">Soạn <span className="bg-white text-red-700 px-2 py-1 rounded">XSMB</span> gửi <span className="bg-yellow-400 text-black px-2 py-1 rounded">8136</span></p>
            <p className="text-sm mt-1">(1.500đ/SMS)</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg">
            <p className="font-medium">Kết quả tường thuật</p>
            <p className="font-bold text-xl mt-1">Soạn <span className="bg-white text-red-700 px-2 py-1 rounded">XS MB</span> gửi <span className="bg-yellow-400 text-black px-2 py-1 rounded">8336</span></p>
            <p className="text-sm mt-1">(3.000đ/SMS)</p>
          </div>
        </div>
      </div>
    </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-red-700 mb-2">Không tìm thấy kết quả</h3>
          <p className="text-red-600">Vui lòng thử lại với ngày hoặc miền khác</p>
        </div>
      )}
    </div>
  );
};

export default ResultTable;