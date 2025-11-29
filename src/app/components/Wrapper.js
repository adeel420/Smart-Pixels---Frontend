"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  const location = usePathname();

  const isHideHeaderFooter = [
    "/login",
    "/signup",
    "/forgot-password",
    "/admin",
  ];

  const shouldHideHeaderFooter = isHideHeaderFooter.includes(location);

  return (
    <div>
      {!shouldHideHeaderFooter && <Header />}

      {/* This was missing */}
      <main>{children}</main>

      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

export default Wrapper;
