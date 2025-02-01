"use client";

import { useState, useEffect, SetStateAction, Dispatch } from "react";
import Sidebar from "@/components/sidebar";
import MainContent from "@/components/main-content";
import ThemeSwitcher from "@/components/theme-switcher";
import { AnimatedBackground } from "@/components/animated-background";
import { PortfolioDropdown } from "@/components/portfolio-dropdown";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { SidebarProps } from "@/types/components";

type Theme = "light" | "dark";

type Section =
  | "profile"
  | "work-experience"
  | "skills"
  | "certifications"
  | "projects"
  | "education"
  | "languages"
  | "references";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("profile");
  const [theme, setTheme] = useState<Theme>("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <AnimatedBackground />
      <div
        className={`artistic-bg artistic-bg-dark ${
          theme === "dark" ? "active" : ""
        }`}
      />
      <div
        className={`artistic-bg artistic-bg-light ${
          theme === "light" ? "active" : ""
        }`}
      />

      <div className="min-h-screen p-6 lg:p-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center mb-8 lg:hidden">
            <button
              className="text-primary p-2 hover:bg-primary/10 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-4">
              <PortfolioDropdown />
              <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
            </div>
          </header>

          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="lg:w-80 lg:shrink-0">
              <div className="glass-effect rounded-2xl lg:sticky lg:top-10">
                <Sidebar
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              </div>
            </div>

            <main className="flex-1 mt-8 lg:mt-0 relative z-0">
              <div className="glass-effect rounded-2xl relative">
                <div className="absolute top-6 right-6 items-center space-x-4 hidden lg:flex">
                  <PortfolioDropdown />
                  <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
                </div>
                <div className="p-8 lg:p-10">
                  <MainContent activeSection={activeSection} />
                </div>
              </div>
            </main>
          </div>
          <div className="lg:hidden">
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div
                    className="fixed inset-y-0 left-0 w-[280px] bg-background shadow-lg z-50 p-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Sidebar
                      activeSection={activeSection}
                      setActiveSection={setActiveSection}
                      isSidebarOpen={isSidebarOpen}
                      setIsSidebarOpen={setIsSidebarOpen}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
