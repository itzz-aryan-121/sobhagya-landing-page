"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Eagle_Lake } from "next/font/google";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const eagleLake = Eagle_Lake({ subsets: ["latin"], weight: "400" });

const texts = ["Sobhagya", "सौभाग्य"];
const delayBetween = 5000; 

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, delayBetween);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 md:px-12 h-[80px] md:h-[100px] flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
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
          <div className="ml-6 relative overflow-hidden w-[170px] h-[50px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[textIndex]}
                className={`${eagleLake.className} absolute text-gray-700 text-[24px] md:text-[32px] leading-none`}
                style={{ color: "#F7971D" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {texts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-14 text-gray-700 font-[400] text-[16px] lg:text-[18px]">
          <Link href='/about' className="hover:text-orange-500">About Us</Link>
          <Link href="/services" className="hover:text-orange-500">Services</Link>
          <Link href="https://store.sobhagya.in" target="_blank" className="hover:text-orange-500">Shop</Link>
          <Link href="/contact" className="hover:text-orange-500">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[80px] left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center space-y-6 text-gray-700 font-medium text-lg transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0 z-40" : "opacity-0 -translate-y-10 hidden"
          }`}
        >
          <Link href="/about" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/services" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="https://store.sobhagya.in" target="_blank" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link href="/contact" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[4px] bg-orange-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </header>

      <div className="pt-[80px] md:pt-[100px]" />
    </>
  );
};

export default Header;
