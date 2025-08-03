import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        background: `radial-gradient(circle, #0f5255 10%, #000000 100%)`,
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
