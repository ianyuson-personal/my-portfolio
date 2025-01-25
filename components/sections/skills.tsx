import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, Code, Server, Users, Lightbulb, Zap, Book } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const SkillCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={item}
    className="glass-card p-8 group"
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="mb-6"
    >
      <Icon className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
    </motion.div>
    <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-accent-foreground transition-colors duration-300">
      {title}
    </h3>
    <p className="text-base text-foreground/80 leading-relaxed group-hover:text-accent-foreground/80 transition-colors duration-300">
      {description}
    </p>
  </motion.div>
)

const technicalSkills = [
  {
    icon: Shield,
    title: "Advanced Threat Detection",
    description: "Utilizing AI and machine learning to identify and mitigate complex cyber threats in real-time.",
  },
  {
    icon: Lock,
    title: "Incident Response",
    description: "Developing and implementing robust strategies to effectively manage and resolve security incidents.",
  },
  {
    icon: Code,
    title: "Security Architecture",
    description: "Designing scalable and resilient security infrastructures for diverse technological environments.",
  },
  {
    icon: Server,
    title: "Cloud Security",
    description:
      "Securing cloud-based systems and data with state-of-the-art protection measures and compliance standards.",
  },
  {
    icon: Zap,
    title: "Penetration Testing",
    description: "Conducting thorough security assessments to identify vulnerabilities in systems and networks.",
  },
  {
    icon: Book,
    title: "Security Policies & Procedures",
    description:
      "Developing comprehensive security policies and procedures to ensure organizational compliance and best practices.",
  },
]

const softSkills = [
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Leading and motivating cross-functional teams to achieve cybersecurity goals and foster a security-first culture.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Applying critical thinking and innovative approaches to tackle complex cybersecurity challenges.",
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical")

  return (
    <div className="space-y-16 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <motion.h1
          className="text-4xl font-bold text-primary"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
        >
          Skills & Expertise
        </motion.h1>
      </motion.div>

      <div className="flex justify-center space-x-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab("technical")}
          className={`px-6 py-2 rounded-full ${activeTab === "technical" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
        >
          Technical Skills
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab("soft")}
          className={`px-6 py-2 rounded-full ${activeTab === "soft" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
        >
          Soft Skills
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "technical" ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
            >
              {technicalSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
            >
              {softSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

