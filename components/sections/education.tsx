import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master of Science in Cybersecurity",
    school: "Tech University",
    period: "2012 - 2014",
    description: "Specialized in Network Security and Cryptography",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "State University",
    period: "2008 - 2012",
    description: "Focus on Software Engineering and Information Security",
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

export default function Education() {
  return (
    <div className="space-y-8 p-8">
      <motion.h1
        className="text-4xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h1>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 rounded-lg overflow-hidden backdrop-blur-sm"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-primary">{edu.degree}</h2>
                  <div className="text-muted-foreground">
                    <p className="font-medium">{edu.school}</p>
                    <p className="text-sm">{edu.period}</p>
                  </div>
                  <p className="text-foreground/80">{edu.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

