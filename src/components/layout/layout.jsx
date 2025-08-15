import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Pad2 from "../../assets/Pad2.png";

import Pad3 from "../../assets/Pad3.png";

const Layout = () => {
  return (
    <div
      className="relative"
      style={{
        background: `radial-gradient(circle, #0f5255 10%, #000000 100%)`,
      }}
    >
      <img src={Pad2} className="absolute bottom-[30%] z-0 lg:block hidden" />

      <img
        src={Pad3}
        className="absolute top-[20%] right-0 z-0 lg:block hidden"
      />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
