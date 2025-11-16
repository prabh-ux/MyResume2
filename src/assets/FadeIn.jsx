import React, { useState } from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
