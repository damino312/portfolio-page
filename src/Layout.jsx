import React, { useLayoutEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
import { useBodyScrollable } from "./hooks";

export default function Layout() {
  const { pathname } = useLocation();

  const name = pathname.split("/")?.[1];

  const scrollbarWidth = getScrollbarWidth();
  const bodyScrollable = useBodyScrollable();

  useLayoutEffect(() => {
    if (bodyScrollable) {
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }, [bodyScrollable]);

  function getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll"; // forcing scrollbar to appear
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement("div");
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
  }
  return (
    <div className="layout">
      <Header />
      <Outlet />
      {name !== "about" && <Footer />}

      <ScrollToTop />
    </div>
  );
}
