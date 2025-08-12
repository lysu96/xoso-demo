import React from 'react';

const SidebarLeft = () => {
  const provinces = [
    { name: 'Hà Nội', hot: true },
    { name: 'Nam Định', hot: true },
    { name: 'Bắc Ninh', hot: true },
    { name: 'Hải Phòng', hot: false },
    { name: 'Quảng Ninh', hot: false },
    { name: 'Hưng Yên', hot: false },
    { name: 'Thái Bình', hot: false },
    { name: 'Vĩnh Phúc', hot: false },
    { name: 'Hải Dương', hot: false },
    { name: 'Bắc Giang', hot: false },
    { name: 'Phú Thọ', hot: false },
    { name: 'Thái Nguyên', hot: false },
  ];

  return (
    <aside className="bg-gradient-to-b from-red-50 to-amber-50 rounded-xl shadow-lg p-5 border border-red-100">
      {/* Header với hiệu ứng gradient */}
      <div className="mb-5 pb-3 border-b border-red-200">
        <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
          Miền Bắc
        </h2>
        <p className="text-sm text-red-700 mt-1">Chọn tỉnh để xem kết quả</p>
      </div>
      
      <ul className="space-y-2">
        {provinces.map((province) => (
          <li key={province.name}>
            <a 
              href="#" 
              className="flex items-center justify-between p-3 rounded-lg hover:bg-red-100 transition-all duration-300 group"
            >
              <span className="font-medium text-red-900 group-hover:text-red-700">
                {province.name}
              </span>
              
              {province.hot && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <svg 
                    className="w-3 h-3 mr-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                  </svg>
                  Hot
                </span>
              )}
              
              <svg 
                className="w-4 h-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </li>
        ))}
      </ul>
      
      {/* Bộ lọc */}
      <div className="mt-6 pt-4 border-t border-red-200">
        <h3 className="font-semibold text-red-800 mb-2">Bộ lọc</h3>
        <div className="flex flex-wrap gap-2">
          {['XSMB', 'Xổ số đặc biệt', 'Lô tô', 'Giải 8', '3 càng'].map((filter) => (
            <button 
              key={filter}
              className="text-xs bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-full transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarLeft;