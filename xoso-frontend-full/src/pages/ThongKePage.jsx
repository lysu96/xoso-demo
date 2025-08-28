import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import các components con
import ThongKeLo2So from "@/components/thongke/ThongKeLo2So";
import ThongKeLoXien from "@/components/thongke/ThongKeLoXien";
import ThongKeDe from "@/components/thongke/ThongKeDe";
import ThongKe3Cang4Cang from "@/components/thongke/ThongKe3Cang4Cang";

export default function ThongKePage() {
  const [activeTab, setActiveTab] = useState("lo2so");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          📊 Thống Kê Xổ Số
        </h1>

        {/* Tabs chọn loại thống kê */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 gap-2 mb-6">
            <TabsTrigger value="lo2so">Lô 2 số</TabsTrigger>
            <TabsTrigger value="loxien">Lô xiên</TabsTrigger>
            <TabsTrigger value="de">Đề</TabsTrigger>
            <TabsTrigger value="cang">3 càng / 4 càng</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="bg-white shadow rounded-2xl p-6">
            <TabsContent value="lo2so">
              <ThongKeLo2So />
            </TabsContent>
            <TabsContent value="loxien">
              <ThongKeLoXien />
            </TabsContent>
            <TabsContent value="de">
              <ThongKeDe />
            </TabsContent>
            <TabsContent value="cang">
              <ThongKe3Cang4Cang />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
