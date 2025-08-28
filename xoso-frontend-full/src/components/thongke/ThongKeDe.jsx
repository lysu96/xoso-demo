import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ThongKeDe = () => {
  const data = [
    { so: "12", soLan: 3 },
    { so: "45", soLan: 6 },
    { so: "89", soLan: 2 },
  ];

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle>💰 Thống kê Đề</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Số đề</th>
              <th className="p-2 text-left">Số lần về</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{item.so}</td>
                <td className="p-2">{item.soLan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default ThongKeDe;
