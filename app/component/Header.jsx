"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-linear-to-r from-amber-500 via-pink-500 to-amber-600 text-white sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-10 py-4">
        {/* Logo */}

        <div className="flex items-center gap-2 font-bold text-lg">
          <a href="">
            <img src="/image/0001.png" width={160} height={32} alt="#" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a
            href="/"
            className=" hover:text-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:underline hover:font-bold"
          >
            Home
          </a>
          <a
            href="../Services"
            className="hover:text-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:underline hover:font-bold"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:underline hover:font-bold"
          >
            Location Dealer
          </a>
          <a
            href="#"
            className="hover:text-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:underline hover:font-bold"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-4">
          <a href="/">Home</a>
          <a href="../Services">Services</a>
          <a href="#">Location Dealer</a>
          <a href="#">Contact Us</a>
        </div>
      )}
    </header>
  );
}
