

import React from "react";
import { motion } from "framer-motion";
import '../styles/PageTransition.css'

const bars = Array.from({ length: 10 }); // Creates 10 horizontal bars

const PageTransition = () => {
  return (
    <div className="transition-container">
      {bars.map((_, index) => (
        <motion.div
          key={index}
          className="transition-bar"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.1 }}
        />
      ))}
    </div>
  );
};

export default PageTransition;
