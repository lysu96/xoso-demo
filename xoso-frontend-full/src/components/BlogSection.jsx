import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Bí quyết soi cầu lô đề chính xác nhất",
      date: "27 Tháng 09, 2024",
      excerpt: "Khám phá những phương pháp soi cầu hiệu quả được các chuyên gia xổ số chia sẻ để tăng tỷ lệ trúng thưởng.",
      category: "Kinh nghiệm",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Cách phân tích bạc nhớ lô tô miền Bắc",
      date: "26 Tháng 09, 2024",
      excerpt: "Hướng dẫn chi tiết cách sử dụng bạc nhớ để dự đoán các con số có khả năng về cao trong ngày.",
      category: "Phân tích",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Thống kê lô gan dài nhất năm 2024",
      date: "25 Tháng 09, 2024",
      excerpt: "Tổng hợp danh sách các con lô gan dài nhất tại miền Bắc và chiến thuật đánh lô gan hiệu quả.",
      category: "Thống kê",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            Bài Viết <span className="text-red-600">Mới Nhất</span>
          </h2>
          <p className="text-lg text-red-800 max-w-2xl mx-auto">
            Khám phá những bài viết chuyên sâu và cập nhật kiến thức mới nhất từ đội ngũ chuyên gia của chúng tôi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-red-100"
            >
              {/* Hình ảnh thumbnail với overlay đỏ */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent z-10"></div>
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {post.category}
                </div>
              </div>
              
              {/* Nội dung bài viết */}
              <div className="p-6">
                <div className="flex justify-between text-sm text-red-700 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-red-900 mb-3 hover:text-red-600 transition-colors">
                  <Link to={`/blog/${post.id}`} className="line-clamp-2">{post.title}</Link>
                </h3>
                
                <p className="text-red-800 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex justify-between items-center mt-6">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-red-600 font-medium hover:text-red-800 transition-colors flex items-center"
                  >
                    Xem Thêm
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  
                  <div className="flex items-center">
                    <div className="bg-red-500 border-2 border-white rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                      CG
                    </div>
                    <span className="ml-2 text-sm text-red-600 font-medium">Chuyên gia</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white font-medium py-3 px-8 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Xem Tất Cả Bài Viết
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;