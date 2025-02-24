"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 5;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);

    setTimeout(() => {
      setIsLoaded(true);
      onComplete();
      clearInterval(interval);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFDBBB] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Expanding Background Effect */}
      <motion.div
        className="absolute w-screen h-screen bg-white"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: isLoaded ? 50 : 1, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* 3D Zoom-In Animation */}
      <motion.div
        initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
        animate={{
          scale: isLoaded ? 20 : 1,
          rotateX: isLoaded ? -15 : 0,
          rotateY: isLoaded ? 10 : 0,
          opacity: isLoaded ? 0 : 1,
        }}
        transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
        style={{ perspective: "1000px" }}
      >
        <Image
          src="/monk logo (1).png"
          alt="Sobhagya Logo"
          width={150}
          height={150}
          className="drop-shadow-[0px_0px_30px_rgba(255,215,0,0.9)]"
        />
      </motion.div>


      </motion.div>

     
  );
}