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
    }, 1900);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFDBBB]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: 30,
          opacity: 0
        }}
        transition={{
          duration: 2,
          ease: [0.32, 0, 0.67, 0], // Continuous acceleration curve
        }}
        style={{ perspective: "1200px" }}
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