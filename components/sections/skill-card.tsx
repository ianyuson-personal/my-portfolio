"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export const SkillCard = ({ icon: Icon, title, description, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={item}
      className="glass-card p-8 group relative cursor-pointer"
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-6"
      >
        <Icon className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-accent-foreground transition-colors duration-300">
        {title}
      </h3>
      <p className="text-base text-foreground/80 leading-relaxed group-hover:text-accent-foreground/80 transition-colors duration-300">
        {description}
      </p>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium"
      >
        Click to Learn More
      </motion.div>
    </motion.div>
  );
};
