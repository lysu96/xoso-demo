import React from 'react';

const LotteryResults = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans bg-gray-50 min-h-screen">
      {/* Header Section - Changed to red gradient */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white p-4 rounded-t-lg shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Kết quả Xổ số Miền Bắc</h1>
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">XSMB</span>
          <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">XSMB Thứ 6</span>
          <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">25/07/2025 (Hải Phòng)</span>
        </div>
      </div>

      {/* Prize Codes - Changed to red theme */}
      <div className="bg-red-100 p-4 flex flex-wrap gap-2 justify-center border-b border-red-200">
        {['2KG', '3KG', '9KG', '10KG', '13KG', '14KG', '15KG', '18KG'].map(code => (
          <span key={code} className="bg-white border-2 border-red-400 px-3 py-1 rounded-lg font-bold text-red-700 shadow-sm">
            {code}
          </span>
        ))}
      </div>

      {/* Main Results Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="p-3 w-1/6 text-center font-semibold text-gray-700">Giải</th>
              <th className="p-3 text-center text-1xl font-bold text-gray-700">Số trúng</th>
            </tr>
          </thead>
          <tbody>
            {/* Đặc biệt - Special Prize (Red text, larger size) */}
            <tr className="border-b border-gray-200">
              <td className="p-3 text-center font-bold bg-gray-50 text-gray-700">ĐB</td>
              <td className="p-3">
                <div className="flex justify-center">
                  <span className="text-3xl font-bold text-red-600">
                    85676
                  </span>
                </div>
              </td>
            </tr>
            
            {/* Giải Nhất - First Prize (Black text, smaller size) */}
            <tr className="border-b border-gray-200">
              <td className="p-3 text-center font-bold bg-gray-50 text-gray-700">1</td>
              <td className="p-3">
                <div className="flex justify-center">
                  <span className="text-2xl font-bold text-black">
                    80867
                  </span>
                </div>
              </td>
            </tr>
            
            {/* Giải Nhì - Second Prize (Increased gap) */}
            <tr className="border-b border-gray-200">
              <td className="p-3 text-center font-bold bg-gray-50 text-gray-700">2</td>
              <td className="p-3">
                <div className="flex justify-center gap-8 md:gap-12">
                  <span className="text-2xl font-bold text-black">72966</span>
                  <span className="text-2xl font-bold text-black">59074</span>
                </div>
              </td>
            </tr>
            
            {/* Giải Ba - Third Prize */}
            <tr className="border-b border-gray-200">
              <td className="p-3 text-center font-bold bg-gray-50 text-gray-700">3</td>
              <td className="p-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
                  {['07335', '37081', '43233', '76886', '85847', '33147'].map(num => (
                    <span key={num} className="text-xl font-bold text-black">
                      {num}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
            
            {/* Giải Tư - Fourth Prize (Increased gap) */}
            <tr className="border-b border-gray-200">
              <td className="p-3 text-center font-bold bg-gray-50 text-gray-700">4</td>
              <td className="p-3">
                <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
                  {['5175', '3566', '7393', '3085'].map(num => (
                    <span key={num} className="text-xl font-bold text-black">
                      {num}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
            
            {/* Giải Năm - Fifth Prize */}
            <tr className="border-b border-gray-200">
              <td className="p-3 text-center font-bold bg-gray-50 text-gray-700">5</td>
              <td className="p-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
                  {['3273', '9285', '9205', '9145', '4512', '9153'].map(num => (
                    <span key={num} className="text-xl font-bold text-black">
                      {num}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
            
            {/* Giải Sáu - Sixth Prize (Increased gap) */}
            <tr className="border-b border-gray-200">
              <td className="p-3 text-center font-bold bg-gray-50 text-gray-700">6</td>
              <td className="p-3">
                <div className="flex justify-center gap-6 md:gap-12">
                  {['615', '560', '643'].map(num => (
                    <span key={num} className="text-xl font-bold text-black">
                      {num}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
            
            {/* Giải Bảy - Seventh Prize (Increased gap) */}
            <tr>
              <td className="p-3 text-center font-bold bg-gray-50 text-gray-700">7</td>
              <td className="p-3">
                <div className="flex justify-center gap-6 md:gap-12">
                  {['53', '68', '11', '42'].map(num => (
                    <span key={num} className="text-xl font-bold text-black">
                      {num}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lotto Table - Changed to red theme */}
      <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-red-800 text-white p-3">
          <h2 className="text-xl font-bold text-center">Bảng Loto Miền Bắc</h2>
        </div>
        
        <table className="w-full">
          <thead>
            <tr className="bg-red-100">
              <th className="p-2 border-r text-center">Đầu</th>
              <th className="p-2 border-r text-center">Đuôi</th>
              <th className="p-2 border-r text-center">Đầu</th>
              <th className="p-2 text-center">Đuôi</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0', '5', '6', '0'],
              ['1', '2,5,1', '8,1', '1'],
              ['2', '-', '1,4', '2'],
              ['3', '5,3', '3,9,7,5,4,5', '3'],
              ['4', '7,7,5,3,2', '7', '4'],
              ['5', '3,3', '3,7,8,8,0,4,1', '5'],
              ['6', '7,6,6,0,8', <span className="text-red-600 font-bold">7,6,8,6</span>, '6'],
              ['7', <span className="text-red-600 font-bold">6,4,5,3</span>, '6,4,4', '7'],
              ['8', '1,6,5,5', '6', '8'],
              ['9', '3', '-', '9'],
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-2 border-r text-center font-bold">{row[0]}</td>
                <td className="p-2 border-r text-center">{row[1]}</td>
                <td className="p-2 border-r text-center">{row[2]}</td>
                <td className="p-2 text-center font-bold">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
  );
};

export default LotteryResults;