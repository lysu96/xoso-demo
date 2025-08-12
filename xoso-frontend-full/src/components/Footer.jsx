import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-900 text-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo và mô tả */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl mr-2">
                XS
              </div>
              <span className="text-xl font-bold text-yellow-300">Xổ Số Nhanh</span>
            </div>
            <p className="text-red-100 mb-4">
              Cung cấp thông tin kết quả xổ số nhanh chóng, chính xác và đầy đủ nhất. Đồng hành cùng bạn trên hành trình may mắn!
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'youtube', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label={`Theo dõi chúng tôi trên ${social}`}
                >
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Liên kết nhanh */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-red-600">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {[
                { name: 'Trang chủ', path: '/' },
                { name: 'Kết quả xổ số', path: '/ket-qua' },
                { name: 'Thống kê', path: '/thong-ke' },
                { name: 'Dự đoán', path: '/du-doan' },
                { name: 'Blog kiến thức', path: '/blog' },
                { name: 'VIP đặc quyền', path: '/vip' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-red-100 hover:text-yellow-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Thông tin pháp lý */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-red-600">Thông tin pháp lý</h3>
            <ul className="space-y-2">
              {[
                'Điều khoản sử dụng',
                'Chính sách bảo mật',
                'Chính sách cookie',
                'Quy định thành viên',
                'Cảnh báo người chơi'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-red-100 hover:text-yellow-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Liên hệ */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-red-600">Liên hệ chúng tôi</h3>
            <ul className="space-y-3 text-red-100">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>Email: support@xosonhanh.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>Hotline: 1900 8888</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Địa chỉ: Tầng 10, Tòa nhà Alpha, 123 Trần Hưng Đạo, Hà Nội</span>
              </li>
            </ul>
            
            {/* Google Ads Disclaimer */}
            <div className="mt-6 p-3 bg-red-900 rounded-lg text-xs text-red-200">
              <p className="font-bold mb-1">Thông báo Quảng cáo:</p>
              <p>Trang web này chứa quảng cáo từ Google Ads. Chúng tôi sử dụng cookie để cá nhân hóa quảng cáo và phân tích lưu lượng truy cập.</p>
            </div>
          </div>
        </div>
        
        {/* Copyright và thanh điều hướng dưới cùng */}
        <div className="border-t border-red-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-red-200">
              &copy; {currentYear} Xổ Số Nhanh. Mọi quyền được bảo lưu.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <img 
              src="https://via.placeholder.com/100x40?text=Google+Ads" 
              alt="Google Ads Certified" 
              className="h-8 object-contain"
            />
            <img 
              src="https://via.placeholder.com/80x40?text=SSL" 
              alt="SSL Secure" 
              className="h-8 object-contain"
            />
            <img 
              src="https://via.placeholder.com/80x40?text=DMCA" 
              alt="DMCA Protected" 
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;