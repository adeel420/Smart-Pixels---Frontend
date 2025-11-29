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

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Smart Pixels Solution
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/portfolio"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/login"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium"
            >
              Signup
            </Link>
            <Link
              href="/admin"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium"
            >
              Admin
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white mt-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white mt-1 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-gray-900/95 backdrop-blur-md border-t border-white/10 rounded-b-2xl">
              <Link
                href="/"
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                Contact
              </Link>
              <Link
                href="/portfolio"
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                Portfolio
              </Link>
              <Link
                href="/login"
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block mx-2 mt-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-center font-medium"
              >
                Signup
              </Link>
              <Link
                href="/admin"
                className="block mx-2 mt-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-center font-medium"
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
