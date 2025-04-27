"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Xybercoin
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 items-center">
        <Link
          href="#about"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          About Xyber
        </Link>
        <Link
          href="#maproad"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          Map Road of Xyber
        </Link>
        <Link
          href="#whitepaper"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          White Paper
        </Link>
        <Link href="#purchase">
          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            Purchase Xybercoin
          </button>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-blue-600"
          >
            About Xyber
          </Link>
          <Link
            href="#maproad"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-blue-600"
          >
            Map Road of Xyber
          </Link>
          <Link
            href="#whitepaper"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-blue-600"
          >
            White Paper
          </Link>
          <Link href="#purchase" onClick={() => setMenuOpen(false)}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Purchase Xybercoin
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
