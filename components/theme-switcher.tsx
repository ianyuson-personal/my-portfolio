"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
type Theme = "light" | "dark";

interface ThemeSwitcherProps {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

export default function ThemeSwitcher({
  currentTheme,
  setTheme,
}: ThemeSwitcherProps) {
  useEffect(() => {
    // Update the document class when theme changes
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, [currentTheme]);

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setTheme("light")}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentTheme === "light"
            ? "bg-primary text-primary-foreground"
            : "bg-primary/20 text-primary hover:bg-primary/30"
        }`}
        title="Light theme"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentTheme === "dark"
            ? "bg-primary text-primary-foreground"
            : "bg-primary/20 text-primary hover:bg-primary/30"
        }`}
        title="Dark theme"
      >
        <Moon size={16} />
      </button>
    </div>
  );
}
