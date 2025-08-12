import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'analysis', name: 'Phân tích' },
    { id: 'statistics', name: 'Thống kê' },
    { id: 'experience', name: 'Kinh nghiệm' },
    { id: 'prediction', name: 'Dự đoán' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: "Bí quyết soi cầu lô đề chính xác nhất năm 2024",
      excerpt: "Khám phá những phương pháp soi cầu hiệu quả được các chuyên gia xổ số chia sẻ để tăng tỷ lệ trúng thưởng. Bài viết cung cấp cái nhìn toàn diện từ cơ bản đến nâng cao.",
      date: "27/09/2024",
      readTime: "8 phút",
      category: "experience",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Cách phân tích bạc nhớ lô tô miền Bắc cho người mới",
      excerpt: "Hướng dẫn chi tiết cách sử dụng bạc nhớ để dự đoán các con số có khả năng về cao trong ngày. Phương pháp này đã được kiểm chứng qua nhiều năm.",
      date: "26/09/2024",
      readTime: "6 phút",
      category: "analysis",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Thống kê lô gan dài nhất năm 2024 - Cập nhật mới nhất",
      excerpt: "Tổng hợp danh sách các con lô gan dài nhất tại miền Bắc và chiến thuật đánh lô gan hiệu quả. Dữ liệu được cập nhật hàng tuần.",
      date: "25/09/2024",
      readTime: "5 phút",
      category: "statistics",
      image: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 4,
      title: "Hướng dẫn cách đánh lô xiên hiệu quả nhất",
      excerpt: "Phương pháp đánh lô xiên mang lại tỷ lệ trúng cao với vốn đầu tư hợp lý. Bài viết chia sẻ kinh nghiệm từ các cao thủ lâu năm.",
      date: "24/09/2024",
      readTime: "7 phút",
      category: "experience",
      image: "https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Dự đoán cầu lô đẹp miền Bắc tuần này",
      excerpt: "Phân tích và dự đoán các cầu lô đẹp có khả năng về cao trong tuần tại miền Bắc. Cập nhật dữ liệu mới nhất từ hệ thống thống kê.",
      date: "23/09/2024",
      readTime: "4 phút",
      category: "prediction",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 6,
      title: "Bí mật đằng sau các con số may mắn",
      excerpt: "Khám phá ý nghĩa và nguồn gốc của các con số may mắn trong văn hóa xổ số. Tại sao một số con số lại được ưa chuộng hơn những số khác?",
      date: "22/09/2024",
      readTime: "9 phút",
      category: "analysis",
      image: "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-red-50 to-amber-50 min-h-screen">
      {/* Banner */}
      <Banner 
        title="Kiến Thức Xổ Số" 
        subtitle="Cập nhật tin tức, phân tích và bí quyết từ các chuyên gia hàng đầu" 
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-red-900 mb-6 pb-2 border-b-2 border-red-200 inline-block">
            Bài Viết Nổi Bật
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-red-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between text-sm text-red-700 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-red-900 mb-3">
                    <Link to={`/blog/${post.id}`} className="hover:text-red-700 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-red-800 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition-colors"
                  >
                    Đọc tiếp
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog List */}
          <div className="w-full lg:w-2/3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-red-900">
                Tất Cả Bài Viết
              </h2>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-red-700 text-white'
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              {filteredPosts.map(post => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-red-100 flex flex-col md:flex-row"
                >
                  <div className="md:w-1/3">
                    <div className="relative h-48 md:h-full overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 md:w-2/3">
                    <div className="flex justify-between text-sm text-red-700 mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-red-900 mb-3">
                      <Link to={`/blog/${post.id}`} className="hover:text-red-700 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-red-800 mb-4">{post.excerpt}</p>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition-colors"
                    >
                      Đọc tiếp
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(page => (
                  <button
                    key={page}
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-medium ${
                      page === 1
                        ? 'bg-red-700 text-white'
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-800 hover:bg-red-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gradient-to-b from-red-50 to-amber-50 rounded-xl shadow-lg p-5 border border-red-100 mb-8">
              <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text mb-4">
                Tìm kiếm bài viết
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập từ khóa..."
                  className="w-full border-2 border-red-200 bg-white px-4 py-3 rounded-lg focus:border-red-500 text-red-800"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-red-50 to-amber-50 rounded-xl shadow-lg p-5 border border-red-100 mb-8">
              <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text mb-4">
                Chuyên mục
              </h3>
              <ul className="space-y-2">
                {categories.slice(1).map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors ${
                        activeCategory === category.id
                          ? 'bg-red-600 text-white'
                          : 'text-red-800 hover:bg-red-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                        {blogPosts.filter(post => post.category === category.id).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-red-50 to-amber-50 rounded-xl shadow-lg p-5 border border-red-100">
              <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text mb-4">
                Tags phổ biến
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Lô đề', 'Soi cầu', 'Bạc nhớ', 'Lô gan', 'Dự đoán', 'Xổ số miền Bắc', 'Thống kê', 'Chiến thuật'].map(tag => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;