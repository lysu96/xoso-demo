import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { XosoProvider } from "@/context/XosoContext";

const App = () => {
  return (
    <XosoProvider>
      <div className="min-h-screen flex flex-col">
        <SEO />
        <Header />
        <Navbar />
        {/* Đây là nơi các trang con sẽ render */}
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </XosoProvider>
  );
};

export default App;
