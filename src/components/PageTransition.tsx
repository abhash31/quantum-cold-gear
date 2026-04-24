import { motion } from "framer-motion";
import { ReactNode } from "react";

// This creates a subtle fade and blur effect, perfect for a high-tech vibe
const pageVariants = {
  initial: { opacity: 0, y: 15, filter: "blur(5px)" },
  in: { opacity: 1, y: 0, filter: "blur(0px)" },
  out: { opacity: 0, y: -15, filter: "blur(5px)" }
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};