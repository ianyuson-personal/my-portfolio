import type React from "react"; // Added import for React
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: {
    title: string;
    icon: React.ElementType;
    description: string;
    details: {
      image: string;
      content: string;
    };
  } | null;
}

export function SkillModal({ isOpen, onClose, skill }: SkillModalProps) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[800px] bg-background/95 backdrop-blur-lg border border-primary/20 shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <skill.icon className="w-6 h-6" />
                {skill.title}
              </DialogTitle>
            </DialogHeader>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src={skill.details.image || "/placeholder.svg"}
                  alt={skill.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="text-foreground/90 leading-relaxed">
                {skill.description}
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Details</h3>
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                  {skill.details.content}
                </p>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
