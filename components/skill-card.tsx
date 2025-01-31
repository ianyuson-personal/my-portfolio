import type React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
}

export function SkillCard({
  icon: Icon,
  title,
  description,
  onClick,
}: SkillCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-secondary/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="p-6 space-y-4">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-6"
        >
          <Icon className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
        </motion.div>
        <h3 className="text-xl font-semibold text-primary group-hover:text-accent-foreground transition-colors duration-300">
          {title}
        </h3>
        <p className="text-base text-foreground/80 leading-relaxed group-hover:text-accent-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
