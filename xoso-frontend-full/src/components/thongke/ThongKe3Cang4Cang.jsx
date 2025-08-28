import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ThongKe3Cang4Cang = () => {
  const data = [
    { so: "123", loai: "3 càng", soLan: 1 },
    { so: "4567", loai: "4 càng", soLan: 2 },
    { so: "890", loai: "3 càng", soLan: 3 },
  ];

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle>🔢 Thống kê 3 Càng & 4 Càng</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Số</th>
              <th className="p-2 text-left">Loại</th>
              <th className="p-2 text-left">Số lần về</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{item.so}</td>
                <td className="p-2">{item.loai}</td>
                <td className="p-2">{item.soLan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default ThongKe3Cang4Cang;
