"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-linear-to-r from-amber-500 via-pink-500 to-amber-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">Audi</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            Docker
          </a>
          <a href="#" className="hover:text-gray-200">
            AWS
          </a>
          <a href="#" className="hover:text-gray-200">
            Digital Ocean
          </a>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-4">
          <a href="#">Home</a>
          <a href="#">Docker</a>
          <a href="#">AWS</a>
          <a href="#">Digital Ocean</a>
        </div>
      )}
    </header>
  );
}
