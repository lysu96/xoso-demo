import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ThongKeLo2So = () => {
  // Mock data
  const data = [
    { cap: "12", soLan: 5 },
    { cap: "45", soLan: 3 },
    { cap: "89", soLan: 7 },
  ];

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle>📊 Thống kê Lô 2 Số</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Cặp số</th>
              <th className="p-2 text-left">Số lần về</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{item.cap}</td>
                <td className="p-2">{item.soLan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default ThongKeLo2So;
