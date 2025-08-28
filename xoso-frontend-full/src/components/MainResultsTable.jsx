import React from "react";

const MainResultsTable = ({ data }) => {
  //console.log("MainResultsTable data:", data);
  // Parse dữ liệu
  const parsed = {
    mien: data.mien,
    date: data.date.split("T")[0],
    rows: [
      { label: "ĐB", values: [data.giaidacbiet] },
      ...Object.entries(JSON.parse(data.giaithuong)).map(([label, values]) => ({
        label,
        values,
      })),
    ],
  };

  // Nếu chưa có dữ liệu thì không render
  if (!parsed || !parsed.rows) return null;

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white p-4 rounded-t-lg shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Kết quả Xổ số{" "}
          {parsed.mien === "mb"
            ? "Miền Bắc"
            : parsed.mien === "mt"
            ? "Miền Trung"
            : "Miền Nam"}
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">
            XS{parsed.mien?.toUpperCase()}
          </span>
          <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">
            Ngày {parsed.date}
          </span>
        </div>
      </div>

      {/* Prize Codes */}
      <div className="bg-red-100 p-4 flex flex-wrap gap-2 justify-center border-b border-red-200">
        {parsed.rows.map((row, idx) => (
          <span
            key={idx}
            className="bg-white border-2 border-red-400 px-3 py-1 rounded-lg font-bold text-red-700 shadow-sm"
          >
            {row.label}
          </span>
        ))}
      </div>

      {/* Main Results Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="p-3 w-1/6 text-center font-semibold text-gray-700">
                Giải
              </th>
              <th className="p-3 text-center text-1xl font-bold text-gray-700">
                Số trúng
              </th>
            </tr>
          </thead>
          <tbody>
            {parsed.rows.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-200">
                <td className="p-3 text-center font-bold bg-gray-50 text-gray-700">
                  {row.label}
                </td>
                <td className="p-3">
                  <div
                    className={`flex ${
                      row.values.length > 3
                        ? "flex-wrap gap-4 justify-center"
                        : "justify-center gap-8"
                    }`}
                  >
                    {row.values.map((num, i) => (
                      <span
                        key={i}
                        className={`${
                          row.label === "ĐB"
                            ? "text-3xl font-bold text-red-600"
                            : row.label === "1"
                            ? "text-2xl font-bold text-black"
                            : "text-xl font-bold text-black"
                        }`}
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainResultsTable;
