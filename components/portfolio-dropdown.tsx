"use client";

import * as React from "react";
import { Paperclip, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  { name: "Resume", path: "/path-to-resume.pdf" },
  { name: "CV", path: "/path-to-cv.pdf" },
  { name: "Cover Letter", path: "/path-to-cover-letter.pdf" },
  { name: "All", path: "/path-to-all-documents.zip" },
];

export function PortfolioDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-primary"
        >
          <Paperclip className="h-5 w-5" />
          <ChevronDown className="h-3 w-3 ml-1" />
          <span className="sr-only">Download Portfolio</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-background border border-border"
      >
        {portfolioItems.map((item) => (
          <DropdownMenuItem
            key={item.name}
            className="text-foreground hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary cursor-pointer"
          >
            <a href={item.path} download className="flex w-full items-center">
              <Paperclip className="mr-2 h-4 w-4" />
              {item.name}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
