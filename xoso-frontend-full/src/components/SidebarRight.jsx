import React from 'react';

const SidebarRight = () => {
  const menuItems = [
    { name: 'Thống kê', href: '#', icon: '📊', hot: true },
    { name: 'Lịch sử', href: '#', icon: '📅', hot: true },
    { name: 'Phân tích cầu', href: '#', icon: '🔍', hot: true },
    { name: 'Dự đoán ngày mai', href: '#', icon: '🔮', hot: false },
    { name: 'Cầu đặc biệt', href: '#', icon: '🎯', hot: false },
    { name: 'Con số may mắn', href: '#', icon: '🍀', hot: false },
    { name: 'Lô gan', href: '#', icon: '⏳', hot: false },
    { name: 'Bạc nhớ', href: '#', icon: '🧠', hot: false }
  ];

  return (
    <aside className="bg-gradient-to-b from-red-50 to-amber-50 rounded-xl shadow-lg p-5 border border-red-100">
      {/* Header với gradient */}
      <div className="mb-5 pb-3 border-b border-red-200">
        <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
          Tổng hợp công cụ
        </h2>
        <p className="text-sm text-red-700 mt-1">Phân tích và dự đoán chính xác</p>
      </div>
      
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </li>
        ))}
      </ul>
      
      {/* Banner quảng cáo nhỏ */}
      <div className="mt-6 p-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-center text-white">
        <p className="font-bold mb-2">VIP ĐẶC QUYỀN</p>
        <p className="text-xs mb-3">Truy cập dữ liệu độc quyền và dự đoán chính xác</p>
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-red-900 font-bold text-sm py-2 px-4 rounded-full shadow-md transition-all">
          Nâng cấp ngay
        </button>
      </div>
      
      {/* Số may mắn nổi bật */}
      <div className="mt-6 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border border-red-200">
        <h3 className="font-bold text-red-800 mb-3 text-center">SỐ MAY MẮN HÔM NAY</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {['68', '89', '16', '23', '77', '99'].map((number, idx) => (
            <div 
              key={idx} 
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-red-700 to-red-900 rounded-full text-white font-bold text-lg shadow-lg"
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarRight;