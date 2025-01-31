import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: {
    name: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
    details: string;
  } | null; // Allow null here;
}

export function CertificationModal({
  isOpen,
  onClose,
  certification,
}: CertificationModalProps) {
  if (!isOpen || !certification) return null; // Prevent rendering if null
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[800px] bg-background/95 backdrop-blur-lg border border-primary/20 shadow-lg p-0 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2 h-48 md:h-auto">
                <Image
                  src={certification.image || "/placeholder.svg"}
                  alt={certification.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 p-6">
                <DialogHeader className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <DialogTitle className="text-2xl font-bold text-primary">
                      {certification.name}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-foreground/90 font-medium">
                    {certification.issuer} • {certification.date}
                  </DialogDescription>
                </DialogHeader>
                <motion.div
                  className="mt-6 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-foreground/90 font-medium leading-relaxed">
                    {certification.description}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {certification.details}
                  </p>
                </motion.div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
