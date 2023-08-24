import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  const name = pathname.split("/")?.[1];
  return (
    <div className="layout">
      <Header />
      <Outlet />
      {name !== "about" && <Footer />}

      <ScrollToTop />
    </div>
  );
}
