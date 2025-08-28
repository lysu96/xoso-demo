// src/context/XosoContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const XosoContext = createContext();

export const XosoProvider = ({ children }) => {
  const [mien, setMien] = useState("mb"); // mặc định miền Bắc
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // hôm nay
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [last10days, setLast10days] = useState([]); // ✅ dữ liệu 10 ngày gần nhất

  const API_BASE =
    import.meta.env.VITE_API_BASE || "https://xoso-demo.onrender.com/api/xoso";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      let success = false;
      let currentDate = new Date(date);

      for (let i = 0; i < 7; i++) {
        const formattedDate = currentDate.toISOString().split("T")[0];
        const url = `${API_BASE}/${formattedDate}/${mien}`;

        try {
          const res = await fetch(url);
          const result = await res.json();

          // console.log("📌 Gọi API:", url); // log URL API
          // console.log("📌 Kết quả API:", result); // log dữ liệu trả về

          if (res.ok && result?.data) {
            setData(result.data);
            success = true;
            break;
          }
        } catch (err) {
          console.error("❌ Lỗi fetch API:", err);
          setError(err.message);
        }

        // lùi ngày 1
        currentDate.setDate(currentDate.getDate() - 1);
      }

      if (!success) {
        setError("Không có dữ liệu trong 7 ngày gần nhất");
      }

      setLoading(false);
    };

    fetchData();
  }, [mien, date]);

  // Fetch 10 ngày gần nhất
  useEffect(() => {
    const fetchLast10days = async () => {
      try {
        const res = await fetch(`${API_BASE}?mien=${mien}&limit=5`);
        const result = await res.json();

        if (res.ok && result?.data) {
          setLast10days(result.data);
        } else {
          setLast10days([]);
        }
      } catch (err) {
        console.error("❌ Lỗi fetch last10days:", err);
        setLast10days([]);
      }
    };

    fetchLast10days();
  }, [mien]); // khi đổi miền thì load lại

  return (
    <XosoContext.Provider
      value={{ data, last10days, loading, error, mien, setMien, date, setDate }}
    >
      {children}
    </XosoContext.Provider>
  );
};

export const useXoso = () => useContext(XosoContext);
