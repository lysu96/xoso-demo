import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('trangchu');

  const menuItems = [
    { id: 'trangchu', name: 'Trang chủ', path: '/' },
    { 
      id: 'ketqua', 
      name: 'Kết quả', 
      path: '/ket-qua',
      submenu: [
        { name: 'Miền Bắc', path: '/ket-qua/mien-bac' },
        { name: 'Miền Trung', path: '/ket-qua/mien-trung' },
        { name: 'Miền Nam', path: '/ket-qua/mien-nam' },
        { name: 'Xem theo ngày', path: '/ket-qua/theo-ngay' },
      ]
    },
    { 
      id: 'thongke', 
      name: 'Thống kê', 
      path: '/thong-ke',
      submenu: [
        { name: 'Lô gan', path: '/thong-ke/lo-gan' },
        { name: 'Bạc nhớ', path: '/thong-ke/bac-nho' },
        { name: 'Cầu đặc biệt', path: '/thong-ke/cau-dac-biet' },
        { name: 'Tần suất lô tô', path: '/thong-ke/tan-suat' },
      ]
    },
    { 
      id: 'du-doan', 
      name: 'Dự đoán', 
      path: '/du-doan',
      submenu: [
        { name: 'Dự đoán miền Bắc', path: '/du-doan/mien-bac' },
        { name: 'Dự đoán miền Trung', path: '/du-doan/mien-trung' },
        { name: 'Dự đoán miền Nam', path: '/du-doan/mien-nam' },
        { name: 'Dự đoán VIP', path: '/du-doan/vip' },
      ]
    },
    { id: 'blog', name: 'Blog', path: '/blog' },
    { id: 'vip', name: 'VIP', path: '/vip', highlight: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-red-800 to-red-900 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl mr-2">
                XS
              </div>
              <span className="text-white text-xl font-bold hidden sm:block">
                Xổ Số <span className="text-yellow-400">May Mắn</span>
              </span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${
                    activeMenu === item.id
                      ? 'bg-red-700 text-yellow-300'
                      : 'text-white hover:bg-red-700 hover:text-yellow-200'
                  } ${item.highlight ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-red-900 font-bold' : ''}`}
                  onClick={() => setActiveMenu(item.id)}
                >
                  {item.name}
                  {item.submenu && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </Link>

                {/* Submenu Desktop */}
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-56 rounded-lg shadow-lg bg-gradient-to-b from-red-700 to-red-800 border border-red-600 z-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                    <div className="py-1">
                      {item.submenu.map((subItem, idx) => (
                        <Link
                          key={idx}
                          to={subItem.path}
                          className="block px-4 py-2 text-white hover:bg-red-600 hover:text-yellow-200 transition-colors"
                          onClick={() => {
                            setActiveMenu(item.id);
                            closeMenu();
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Login Button Desktop */}
          <div className="hidden md:flex md:items-center">
            <button className="ml-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              Đăng nhập
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-200 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-red-800 to-red-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.id}>
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeMenu === item.id
                      ? 'bg-red-700 text-yellow-300'
                      : 'text-white hover:bg-red-700 hover:text-yellow-200'
                  } ${item.highlight ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-bold' : ''}`}
                  onClick={() => {
                    setActiveMenu(item.id);
                    closeMenu();
                  }}
                >
                  {item.name}
                </Link>
                
                {/* Submenu Mobile */}
                {item.submenu && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.submenu.map((subItem, idx) => (
                      <Link
                        key={idx}
                        to={subItem.path}
                        className="block px-3 py-2 rounded-md text-sm text-red-100 hover:bg-red-700 hover:text-white"
                        onClick={() => {
                          setActiveMenu(item.id);
                          closeMenu();
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all flex items-center justify-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              Đăng nhập
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;