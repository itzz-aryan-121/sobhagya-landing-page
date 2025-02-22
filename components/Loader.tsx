"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      onComplete(); 
    }, 3000); 
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFDBBB]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Smooth Zoom-In and Out Animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{
          scale: [0.5, 1.1, 0.9, 1.5, 2, 5, 20], 
          opacity: [1, 1, 1, 0.9, 0.8, 0.5, 0], 
          rotateX: [10, 5, 0, -5, 0], 
        }}
        transition={{
          duration: 3, 
          ease: "easeInOut",
        }}
        style={{ perspective: "1000px" }}
      >
        <Image
          src="/monk logo (1).png"
          alt="Sobhagya Logo"
          width={200}
          height={200}
          className="drop-shadow-[0px_0px_30px_rgba(255,215,0,0.9)]"
        />
      </motion.div>
    </motion.div>
  );
}
