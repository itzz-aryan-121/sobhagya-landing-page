"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    if (showWebsite) {
      window.scrollTo(0, 0);
    }
  }, [showWebsite]);

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
          {/* Exclude the footer initially */}
          {React.Children.map(children, (child) => {
            if (
              React.isValidElement(child) &&
              (child.type as any).name === "Footer"
            ) {
              return showWebsite ? child : null;
            }
            return child;
          })}
        </motion.div>
      )}
    </>
  );
}
