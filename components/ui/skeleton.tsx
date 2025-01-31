"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "line" | "circle" | "rectangle";
}

export function Skeleton({ className, variant = "line" }: SkeletonProps) {
  const variants = {
    line: "h-4 w-full rounded",
    circle: "h-12 w-12 rounded-full",
    rectangle: "h-24 w-full rounded-md",
  };

  return (
    <motion.div
      className={cn("bg-muted", variants[variant], className)}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}
