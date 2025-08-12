const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="bg-gray-200 border-2 border-dashed w-full h-full rounded-l-full opacity-10"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Giải pháp <span className="text-blue-400">công nghệ</span> cho doanh nghiệp hiện đại
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Chúng tôi cung cấp các giải pháp công nghệ hàng đầu giúp doanh nghiệp của bạn phát triển bền vững trong kỷ nguyên số.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                Bắt đầu ngay
              </a>
              <a 
                href="#" 
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Hero Image</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
