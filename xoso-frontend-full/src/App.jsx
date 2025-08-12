import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NavbarMenu from './components/NavbarMenu';
import Footer from './components/Footer';
import SEO from './components/SEO';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <Navbar />
      {/* <NavbarMenu /> */}
      {/* Đây là nơi các trang con sẽ render */}
      <div className="flex-grow">
        <Outlet />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;