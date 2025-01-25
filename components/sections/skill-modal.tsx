"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export const SkillModal = ({ isOpen, onClose, skill }) => {
  if (!isOpen || !skill) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 min-h-screen w-full bg-background/80 backdrop-blur-md p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative mx-auto max-w-6xl bg-card rounded-xl shadow-lg overflow-hidden border border-border"
        >
          {/* Header */}
          <div className="relative w-full bg-muted px-6 py-4 flex items-center justify-between border-b border-border">
            <h2 className="text-2xl font-bold text-foreground">
              {skill.title}
            </h2>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 bg-card text-card-foreground">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
                <Image
                  src={skill.details.image || "/placeholder.svg"}
                  alt={skill.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Description */}
              <div className="space-y-4">
                <div className="prose prose-sm dark:prose-invert">
                  <p className="text-foreground/80 whitespace-pre-line leading-relaxed">
                    {skill.details.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
