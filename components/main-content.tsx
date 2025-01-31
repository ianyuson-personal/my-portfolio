"use client";

import { motion, AnimatePresence } from "framer-motion";
import Profile from "./sections/profile";
import WorkExperience from "./sections/work-experience";
import Skills from "./sections/skills";
import Certifications from "./sections/certifications";
import Projects from "./sections/projects";
import Education from "./sections/education";
import Languages from "./sections/languages";
import References from "./sections/references";

const contentVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

type Section =
  | "profile"
  | "work-experience"
  | "skills"
  | "certifications"
  | "projects"
  | "education"
  | "languages"
  | "references";

interface MainContentProps {
  activeSection: Section;
}

export default function MainContent({ activeSection }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "work-experience":
        return <WorkExperience />;
      case "skills":
        return <Skills />;
      case "certifications":
        return <Certifications />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      case "languages":
        return <Languages />;
      case "references":
        return <References />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl" />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-10"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
