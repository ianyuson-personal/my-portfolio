"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Github, X } from "lucide-react"

const navItems = [
  { title: "Profile", key: "profile" },
  { title: "Skills", key: "skills" },
  { title: "Work Experience", key: "work-experience" },
  { title: "Projects", key: "projects" },
  { title: "Education", key: "education" },
  { title: "Certifications", key: "certifications" },
  { title: "Languages", key: "languages" },
  { title: "References", key: "references" },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/yourusername" },
  { icon: Instagram, href: "https://instagram.com/yourusername" },
  { icon: Github, href: "https://github.com/yourusername" },
]

export default function Sidebar({ activeSection, setActiveSection, isSidebarOpen, setIsSidebarOpen }) {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [expandedItems, setExpandedItems] = useState([])

  const toggleExpanded = (key) => {
    setExpandedItems((prev) => (prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]))
  }

  const sidebarContent = (
    <>
      <div className="text-center mb-8">
        <motion.div
          className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          <span className="text-4xl font-bold text-primary">IJY</span>
        </motion.div>
        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-primary mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Ian Jay D. Yuson
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-1"
        >
          <a
            href="mailto:contact@example.com"
            className="text-sm text-primary hover:text-primary/80 transition-colors block"
          >
            contact@example.com
          </a>
          <a href="tel:+1234567890" className="text-sm text-primary hover:text-primary/80 transition-colors block">
            +1 (234) 567-890
          </a>
          <div className="flex justify-center space-x-4 mt-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.key
            const isExpanded = expandedItems.includes(item.key)
            return (
              <motion.li
                key={item.key}
                onHoverStart={() => setHoveredItem(item.key)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <button
                  onClick={() => {
                    if (item.subItems) {
                      toggleExpanded(item.key)
                    } else {
                      setActiveSection(item.key)
                      setIsSidebarOpen(false)
                    }
                  }}
                  className={`w-full text-left py-2 px-4 relative group ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  <span className="relative z-10 text-sm font-medium" data-text={item.title}>
                    {item.title}
                  </span>
                  {item.subItems && (
                    <span className={`ml-2 transition-transform ${isExpanded ? "rotate-180" : ""}`}>▼</span>
                  )}
                  <AnimatePresence>
                    {(hoveredItem === item.key || isActive) && (
                      <motion.div
                        className={`absolute inset-0 rounded-lg ${
                          isActive ? "bg-primary/20" : "bg-primary/10"
                        } backdrop-blur-sm`}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{
                          scaleX: 1,
                          opacity: 1,
                          transition: {
                            duration: 0.2,
                            ease: [0.23, 1, 0.32, 1],
                          },
                        }}
                        exit={{
                          scaleX: 0,
                          opacity: 0,
                          transition: {
                            duration: 0.15,
                            ease: [0.23, 1, 0.32, 1],
                          },
                        }}
                        style={{ originX: 0 }}
                      />
                    )}
                  </AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 w-1 h-full bg-primary rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </button>
                {item.subItems && isExpanded && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <motion.li
                        key={subItem.key}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button
                          onClick={() => {
                            setActiveSection(subItem.key)
                            setIsSidebarOpen(false)
                          }}
                          className={`w-full text-left py-1 px-4 text-sm ${
                            activeSection === subItem.key ? "text-primary" : "text-foreground/70"
                          }`}
                        >
                          {subItem.title}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-8 pt-4 text-center text-sm text-primary/60 border-t border-primary/10">
        © 2024 Cybersecurity Portfolio
      </div>
    </>
  )

  return (
    <>
      <aside className="lg:p-8">
        <div className="lg:hidden">
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              >
                <div
                  className="fixed inset-y-0 left-0 w-[280px] bg-background shadow-lg z-50 p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 text-primary">
                    <X size={24} />
                  </button>
                  {sidebarContent}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="hidden lg:block">{sidebarContent}</div>
      </aside>
    </>
  )
}

