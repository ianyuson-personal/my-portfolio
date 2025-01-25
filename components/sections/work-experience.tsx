import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Cybersecurity Analyst",
    company: "TechGuard Solutions",
    period: "2019 - Present",
    description: "Lead threat hunting initiatives and manage incident response team.",
  },
  {
    title: "Information Security Specialist",
    company: "DataSafe Corp",
    period: "2016 - 2019",
    description: "Implemented and maintained security infrastructure for enterprise clients.",
  },
  {
    title: "Network Security Engineer",
    company: "SecureNet Systems",
    period: "2014 - 2016",
    description: "Designed and deployed secure network architectures for SMBs.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function WorkExperience() {
  return (
    <div className="space-y-8 p-8">
      <motion.h1
        className="text-4xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h1>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 rounded-lg overflow-hidden backdrop-blur-sm"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-primary mb-2">{exp.title}</h2>
              <div className="space-y-2">
                <div className="flex flex-col text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <span className="text-sm">{exp.period}</span>
                </div>
                <p className="text-foreground/80">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

