import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
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

  // Xử lý scroll để thay đổi màu nền header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cập nhật thời gian thực
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  // Định dạng thời gian
  const formatTime = (date) => {
    return date.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Định dạng ngày
  const formatDate = (date) => {
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-red-800 to-red-900 shadow-xl py-2' 
          : 'bg-gradient-to-r from-red-700 to-red-800 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl mr-2">
                XS
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-white">
                  Xổ Số <span className="text-yellow-300">May Mắn</span>
                </h1>
                <p className="text-xs text-yellow-100 font-medium">
                  Kết quả nhanh nhất - Chính xác nhất
                </p>
              </div>
            </Link>
          </div>

          {/* Menu Desktop - Center */}
          <div className="hidden md:flex flex-1 justify-center mx-8">
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-lg flex items-center transition-all duration-200 ${
                      activeMenu === item.id
                        ? 'bg-red-600 text-yellow-300'
                        : 'text-white hover:bg-red-600 hover:text-yellow-200'
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
          </div>

          {/* Right Section: Time and Actions */}
          <div className="flex items-center space-x-4">
            {/* Time - Hidden on mobile */}
            <div className="hidden md:block text-right">
              <div className="text-white font-semibold">
                {formatTime(currentTime)}
              </div>
              <div className="text-yellow-100 text-xs">
                {formatDate(currentTime)}
              </div>
            </div>

            {/* Search and Login - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="text-yellow-100 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <button className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold py-2 px-4 rounded-full text-sm transition-all duration-200 shadow-md">
                Đăng nhập
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-yellow-200 focus:outline-none"
              >
                {isMenuOpen ? (
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-red-800 to-red-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Time Display on Mobile */}
            <div className="pt-2 text-center text-yellow-100">
              <div className="font-semibold">{formatTime(currentTime)}</div>
              <div className="text-sm">{formatDate(currentTime)}</div>
            </div>

            {/* Mobile Menu Items */}
            <div className="pt-4">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      activeMenu === item.id
                        ? 'bg-red-600 text-yellow-300'
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
            </div>

            {/* Login Button on Mobile */}
            <button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-red-900 font-bold py-2 px-4 rounded-full shadow-md transition-all">
              Đăng nhập
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;