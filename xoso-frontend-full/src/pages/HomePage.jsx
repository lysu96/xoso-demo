import React from 'react';
import Banner from '../components/Banner';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
import ResultTable from '../components/ResultTable';
import Table from '../components/Table';
import BlogSection from '../components/BlogSection';
import HeroSection from '../components/HeroSection';


const HomePage = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <Banner 
        title="Kết Quả Xổ Số Chính Xác" 
        subtitle="Cập nhật kết quả xổ số 3 miền nhanh nhất, chính xác nhất" 
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
        <SidebarLeft />
        <main className="md:col-span-2">
          <ResultTable />
        </main>
        <SidebarRight />
      </div>
      <BlogSection />
    </>
  );
};

export default HomePage;