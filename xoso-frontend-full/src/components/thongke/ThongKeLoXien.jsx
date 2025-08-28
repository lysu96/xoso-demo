import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ThongKeLoXien = () => {
  const data = [
    { xien: "12-34", soLan: 2 },
    { xien: "45-67", soLan: 4 },
    { xien: "89-90", soLan: 1 },
  ];

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle>🎯 Thống kê Lô Xiên</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Xiên</th>
              <th className="p-2 text-left">Số lần về</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{item.xien}</td>
                <td className="p-2">{item.soLan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default ThongKeLoXien;
