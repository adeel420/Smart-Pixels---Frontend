"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dark = !isScrolled;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10"
          : "bg-white/70 backdrop-blur-md border-b border-gray-200/50"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className={`text-xl font-bold transition-colors duration-300 ${
              dark
                ? "bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            }`}
          >
            Smart Pixels Solution
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className={`transition-colors font-medium text-sm ${
                dark
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`transition-colors font-medium text-sm ${
                dark
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`transition-colors font-medium text-sm ${
                dark
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={`transition-colors font-medium text-sm ${
                dark
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`transition-colors font-medium text-sm ${
                dark
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/portfolio"
              className={`transition-colors font-medium text-sm ${
                dark
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/login"
              className={`transition-colors font-medium text-sm ${
                dark
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium text-sm"
            >
              Signup
            </Link>
            <Link
              href="/admin"
              className={`px-5 py-2 rounded-full border font-medium text-sm transition-all duration-300 ${
                dark
                  ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "border-white/20 text-white/90 hover:bg-white/10"
              }`}
            >
              Admin
            </Link>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              dark ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-center">
              <span
                className={`block h-0.5 w-5 transition-all duration-300 ${
                  dark ? "bg-gray-700" : "bg-white"
                } ${isMenuOpen ? "rotate-45 translate-y-[4px]" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-5 mt-[3px] transition-all duration-300 ${
                  dark ? "bg-gray-700" : "bg-white"
                } ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-5 mt-[3px] transition-all duration-300 ${
                  dark ? "bg-gray-700" : "bg-white"
                } ${isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-6 space-y-1 rounded-b-2xl border-t ${
              isScrolled
                ? "bg-gray-900/95 backdrop-blur-md border-white/10"
                : "bg-white/95 backdrop-blur-md border-gray-200/50"
            }`}>
              {["Home", "Services", "Pricing", "About", "Contact", "Portfolio", "Login"].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`block px-4 py-2.5 rounded-xl transition-all text-sm font-medium ${
                      isScrolled
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item}
                  </Link>
                )
              )}
              <div className="flex gap-2 px-2 mt-3">
                <Link
                  href="/signup"
                  className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium text-sm"
                >
                  Signup
                </Link>
                <Link
                  href="/admin"
                  className={`flex-1 text-center px-4 py-2.5 rounded-xl font-medium text-sm border ${
                    isScrolled
                      ? "border-white/20 text-white/90"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
