"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showWebsite, setShowWebsite] = useState(false);

  return (
    <>
      {!showWebsite && <Loader onComplete={() => setShowWebsite(true)} />}
      {showWebsite && (
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="shadow-[0px_0px_50px_rgba(255,215,0,0.3)]"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
