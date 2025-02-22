"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eagle_Lake } from "next/font/google";
import { Menu, X } from "lucide-react";

const eagleLake = Eagle_Lake({ subsets: ["latin"], weight: "400" });

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full h-[80px] md:h-[100px] px-6 md:px-12 flex items-center justify-between shadow-md relative">
      {/* Logo and Brand Name */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/monk logo (1).png"
            alt="Sobhagya"
            width={65}
            height={65}
            priority
            className="w-[50px] md:w-[65px] h-auto"
          />
        </Link>
        <span
          className={`${eagleLake.className} text-gray-700 ml-3 text-[24px] md:text-[32px]`}
          style={{ color: "#F7971D" }}
        >
          Sobhagya
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-10 lg:space-x-14 text-gray-700 font-[400] text-[16px] lg:text-[18px]">
        <Link href="/about" className="hover:text-orange-500">
          About Us
        </Link>
        <Link href="/services" className="hover:text-orange-500">
          Services
        </Link>
        <Link href="/shop" className="hover:text-orange-500">
          Shop
        </Link>
        <Link href="/contact" className="hover:text-orange-500">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 p-2 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu - FIXED */}
      <div
        className={`absolute top-[80px] left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center space-y-6 text-gray-700 font-medium text-lg transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 z-40" : "opacity-0 -translate-y-10 hidden"
        }`}
      >
        <Link href="/about" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <Link href="/services" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link href="/shop" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>
          Shop
        </Link>
        <Link href="/contact" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
