import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavBarMobile from "../NavBar/NavBarMobile/NavBarMobile";

const Layout = () => {
  return (
    <>
    <div>
    <NavBar />
    </div>
    <div>
    <NavBarMobile />
    </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
