"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Code,
  Server,
  Users,
  Lightbulb,
  Zap,
  Book,
} from "lucide-react";
import { SkillCard } from "./skill-card";
import { SkillModal } from "./skill-modal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const technicalSkills = [
  {
    icon: Shield,
    title: "Advanced Threat Detection",
    description:
      "Utilizing AI and machine learning to identify and mitigate complex cyber threats in real-time.",
    details: {
      image: "/placeholder.svg?height=300&width=400",
      content:
        "Our advanced threat detection system employs cutting-edge AI algorithms to analyze network traffic, system logs, and user behavior in real-time. This allows us to identify and respond to potential threats before they can cause significant damage. Key features include:\n\n- Machine learning-based anomaly detection\n- Real-time threat intelligence integration\n- Behavioral analytics for insider threat detection\n- Automated incident response workflows",
    },
  },
  {
    icon: Lock,
    title: "Incident Response",
    description:
      "Developing and implementing robust strategies to effectively manage and resolve security incidents.",
    details: {
      image: "/placeholder.svg?height=300&width=400",
      content:
        "Our incident response team is trained to quickly assess, contain, and mitigate security breaches. We use a combination of automated tools and expert analysis to minimize damage and restore normal operations as quickly as possible. Our approach includes:\n\n- 24/7 security operations center\n- Customized incident response playbooks\n- Digital forensics and malware analysis\n- Post-incident reporting and lessons learned",
    },
  },
  {
    icon: Code,
    title: "Security Architecture",
    description:
      "Designing scalable and resilient security infrastructures for diverse technological environments.",
    details: {
      image: "/placeholder.svg?height=300&width=400",
      content:
        "We design security architectures that are tailored to each client's unique needs and technological landscape. Our approach focuses on creating layered defenses that can adapt to evolving threats while maintaining operational efficiency. Key components include:\n\n- Zero Trust Architecture implementation\n- Secure network segmentation\n- Identity and access management integration\n- Continuous security monitoring and analytics",
    },
  },
  {
    icon: Server,
    title: "Cloud Security",
    description:
      "Securing cloud-based systems and data with state-of-the-art protection measures and compliance standards.",
    details: {
      image: "/placeholder.svg?height=300&width=400",
      content:
        "Our cloud security solutions encompass identity and access management, data encryption, network security, and compliance monitoring. We ensure that your cloud infrastructure is protected against both internal and external threats. Our services include:\n\n- Multi-cloud security strategy development\n- Cloud-native security controls implementation\n- Continuous compliance monitoring and reporting\n- DevSecOps integration for secure cloud deployments",
    },
  },
  {
    icon: Zap,
    title: "Penetration Testing",
    description:
      "Conducting thorough security assessments to identify vulnerabilities in systems and networks.",
    details: {
      image: "/placeholder.svg?height=300&width=400",
      content:
        "Our penetration testing services simulate real-world attacks to identify vulnerabilities in your systems and networks. We provide detailed reports and actionable recommendations to help you strengthen your defenses. Our approach includes:\n\n- Web application penetration testing\n- Network infrastructure security assessments\n- Social engineering and phishing simulations\n- Red team exercises and adversary emulation",
    },
  },
  {
    icon: Book,
    title: "Security Policies & Procedures",
    description:
      "Developing comprehensive security policies and procedures to ensure organizational compliance and best practices.",
    details: {
      image: "/placeholder.svg?height=300&width=400",
      content:
        "We help organizations develop and implement security policies and procedures that align with industry standards and regulatory requirements. Our approach ensures that security best practices are integrated into every aspect of your operations. Key deliverables include:\n\n- Customized information security policies\n- Incident response and business continuity plans\n- Security awareness training programs\n- Compliance gap analysis and remediation roadmaps",
    },
  },
];

const softSkills = [
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Leading and motivating cross-functional teams to achieve cybersecurity goals and foster a security-first culture.",
    details: {
      image: "/placeholder.svg?height=300&width=400",
      content:
        "Our team leadership approach focuses on building collaborative, cross-functional teams that can tackle complex cybersecurity challenges. We emphasize continuous learning, open communication, and a shared commitment to excellence. Key aspects of our leadership style include:\n\n- Agile project management methodologies\n- Mentoring and skill development programs\n- Fostering a culture of innovation and continuous improvement\n- Effective communication strategies for technical and non-technical stakeholders",
    },
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Applying critical thinking and innovative approaches to tackle complex cybersecurity challenges.",
    details: {
      image: "/placeholder.svg?height=300&width=400",
      content:
        "Our problem-solving methodology combines analytical thinking with creative innovation. We approach each challenge from multiple angles, leveraging our diverse expertise to develop comprehensive and effective solutions. Our problem-solving toolkit includes:\n\n- Root cause analysis techniques\n- Design thinking workshops for security challenges\n- Scenario planning and threat modeling\n- Collaborative brainstorming and ideation sessions",
    },
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

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
          className={`px-6 py-2 rounded-full ${
            activeTab === "technical"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          Technical Skills
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab("soft")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "soft"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
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
                <SkillCard
                  key={index}
                  {...skill}
                  onClick={() => handleSkillClick(skill)}
                />
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
                <SkillCard
                  key={index}
                  {...skill}
                  onClick={() => handleSkillClick(skill)}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <SkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        skill={selectedSkill}
      />
    </div>
  );
}
