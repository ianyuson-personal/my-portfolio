"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingContent({ size = "md", className }: LoadingScreenProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const circleVariants = {
    initial: { scale: 0.8, opacity: 0.3 },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className={cn(
          "rounded-full border-4 border-primary",
          sizeClasses[size]
        )}
        initial="initial"
        animate="animate"
        variants={circleVariants}
      />
    </div>
  );
}
