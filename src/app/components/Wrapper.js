"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedCursor from "@/components/ui/animated-cursor";

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
    <div className="flex flex-col min-h-screen">
      <AnimatedCursor />
      {!shouldHideHeaderFooter && <Header />}

      <main>{children}</main>

      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

export default Wrapper;
