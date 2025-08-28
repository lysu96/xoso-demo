import React from "react";

const BannerAd = ({ title, subtitle, giaiDB }) => {
  // Nếu có giải đặc biệt thì tách từng số, nếu không thì mảng rỗng
  const digits = giaiDB ? giaiDB.split("") : [];

  return (
    <div className="relative h-64 md:h-80 bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center overflow-hidden">
      {/* Lớp overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Các số may mắn nhảy từ giải đặc biệt */}
      {digits.length > 0 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
          <div className="flex gap-2">
            {digits.map((number, idx) => (
              <div
                key={idx}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full text-red-900 font-extrabold text-lg shadow-lg animate-bounce"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {number}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Nội dung chính */}
      <div className="relative text-center px-4 z-20">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-yellow-200 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
};

export default BannerAd;
