"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paperclip, ChevronDown, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const portfolioItems = [
  { name: "Resume", path: "/path-to-resume.pdf", icon: "📄" },
  { name: "CV", path: "/path-to-cv.pdf", icon: "📋" },
  { name: "Cover Letter", path: "/path-to-cover-letter.pdf", icon: "✉️" },
  { name: "All Documents", path: "/path-to-all-documents.zip", icon: "📁" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export function PortfolioDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <TooltipProvider>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="px-3 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Paperclip className="h-4 w-4 mr-2" />
                Portfolio
                <ChevronDown
                  className="h-3 w-3 ml-1 transition-transform duration-300"
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Download portfolio items</p>
          </TooltipContent>
        </Tooltip>
        <AnimatePresence>
          {isOpen && (
            <DropdownMenuContent
              align="end"
              className="w-56 p-2 bg-background/95 backdrop-blur-sm border border-primary/10 rounded-lg shadow-lg"
              asChild
            >
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {portfolioItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                  >
                    <DropdownMenuItem className="flex items-center px-3 py-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary cursor-pointer transition-colors duration-300">
                      <a
                        href={item.path}
                        download
                        className="flex w-full items-center group"
                      >
                        <span className="mr-2 text-lg">{item.icon}</span>
                        <span className="flex-grow">{item.name}</span>
                        <Download className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </DropdownMenuItem>
                  </motion.div>
                ))}
              </motion.div>
            </DropdownMenuContent>
          )}
        </AnimatePresence>
      </DropdownMenu>
    </TooltipProvider>
  );
}
