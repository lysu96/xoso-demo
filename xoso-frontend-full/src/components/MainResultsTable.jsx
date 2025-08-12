import React from 'react';

const MainResultsTable = () => {
  return (
    <>
      {/* Header Section - Changed to red gradient */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white p-4 rounded-t-lg shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Kết quả Xổ số Miền Bắc</h1>
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">XSMB</span>
          <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">XSMB Thứ 6</span>
          <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">25/07/2025</span>
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
    </>
  );
};

export default MainResultsTable;