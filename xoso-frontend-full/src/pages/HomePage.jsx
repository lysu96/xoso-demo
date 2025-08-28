import React from "react";
import Banner from "@/components/Banner";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import ResultTable from "@/components/ResultTable";
import BlogSection from "@/components/BlogSection";
import Table from "@/components/Table";
import { useXoso } from "@/context/XosoContext";

const HomePage = () => {
  const { data, loading, error } = useXoso();

  let giaiDB = "";
  let subtitle = "Đang tải dữ liệu...";

  if (loading) {
    subtitle = "⏳ Đang tải dữ liệu...";
  } else if (error) {
    subtitle = "❌ Không có dữ liệu";
  } else if (data) {
    giaiDB = data.giaidacbiet || "";
    subtitle = `Giải đặc biệt ngày ${new Date(data.date).toLocaleDateString(
      "vi-VN"
    )}`;
  }

  return (
    <>
      <Banner
        title="Kết Quả Xổ Số Chính Xác"
        subtitle={subtitle} // ✅ dùng subtitle động
        giaiDB={giaiDB}
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
