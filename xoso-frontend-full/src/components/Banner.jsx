import React from 'react';

const BannerAd = ({ title, subtitle }) => {
  return (
    <div className="relative h-64 md:h-80 bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center overflow-hidden">
      {/* Lớp overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Các số may mắn nhảy */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
        <div className="flex gap-2">
          {['88', '99', '18', '68', '89'].map((number, idx) => (
            <div 
              key={idx} 
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full text-red-900 font-bold text-lg shadow-lg animate-bounce"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
      
      {/* Nội dung chính - có thể tuỳ chỉnh */}
      <div className="relative text-center px-4 z-20">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default BannerAd;