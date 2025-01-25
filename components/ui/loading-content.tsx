"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingContent({ size = "md", className }: SpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  const circleVariants = {
    start: { opacity: 0.4, rotate: 0 },
    end: { opacity: 1, rotate: 360 },
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute inset-0 rounded-full border-2 border-primary dark:border-primary-foreground",
            {
              "border-[1.5px]": size === "sm",
              "border-2": size === "md",
              "border-3": size === "lg",
            }
          )}
          style={{
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
          }}
          initial="start"
          animate="end"
          variants={circleVariants}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: index * 0.2,
          }}
        />
      ))}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-background dark:bg-background",
          {
            "w-3 h-3": size === "sm",
            "w-5 h-5": size === "md",
            "w-8 h-8": size === "lg",
          }
        )}
      />
    </div>
  );
}
