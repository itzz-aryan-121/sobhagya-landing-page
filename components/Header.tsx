"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { Eagle_Lake } from "next/font/google";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const eagleLake = Eagle_Lake({ subsets: ["latin"], weight: "400" });

const texts = ["Sobhagya", "सौभाग्य"];
const typingSpeed = 100;
const eraseSpeed = 50;
const delayBetween = 1200;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setCharIndex(0);
      }
    };

    const interval = setInterval(handleTyping, isDeleting ? eraseSpeed : typingSpeed);
    return () => clearInterval(interval);
  }, [charIndex, isDeleting, textIndex]);

  // Scroll Progress Bar Logic
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
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 md:px-12 h-[80px] md:h-[100px] flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <Image
            src="/monk logo (1).png"
            alt="Sobhagya"
            width={65}
            height={65}
            priority
            className="w-[50px] md:w-[65px] h-auto"
          />
          <motion.span
            className={`${eagleLake.className} text-gray-700 ml-3 text-[24px] md:text-[32px]`}
            style={{ color: "#F7971D" }}
            key={displayText}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {displayText}
          </motion.span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-14 text-gray-700 font-[400] text-[16px] lg:text-[18px]">
          <button 
            onClick={() => router.push('/about')} 
            className="hover:text-orange-500 transition duration-300"
          >
            About Us
          </button>
          <button 
            onClick={() => router.push('/services')} 
            className="hover:text-orange-500 transition duration-300"
          >
            Services
          </button>
          <button 
            onClick={() => router.push('/shop')} 
            className="hover:text-orange-500 transition duration-300"
          >
            Shop
          </button>
          <button 
            onClick={() => router.push('/contact')} 
            className="hover:text-orange-500 transition duration-300"
          >
            Contact Us
          </button>
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
        {isOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center space-y-6 text-gray-700 font-medium text-lg">
            <button 
              onClick={() => { router.push('/about'); setIsOpen(false); }} 
              className="hover:text-orange-500"
            >
              About Us
            </button>
            <button 
              onClick={() => { router.push('/services'); setIsOpen(false); }} 
              className="hover:text-orange-500"
            >
              Services
            </button>
            <button 
              onClick={() => { router.push('/shop'); setIsOpen(false); }} 
              className="hover:text-orange-500"
            >
              Shop
            </button>
            <button 
              onClick={() => { router.push('/contact'); setIsOpen(false); }} 
              className="hover:text-orange-500"
            >
              Contact Us
            </button>
          </div>
        )}

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[4px] bg-orange-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </header>

      {/* Add padding to prevent content overlap */}
      <div className="pt-[80px] md:pt-[100px]" />
    </>
  );
};

export default Header;
