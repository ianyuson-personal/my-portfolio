import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certifications = [
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    date: "Jan 2022",
    description: "Industry-leading certification for information security professionals.",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "Mar 2021",
    description: "Advanced certification in ethical hacking and penetration testing.",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Jun 2020",
    description: "Fundamental IT security concepts and best practices.",
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

export default function Certifications() {
  return (
    <div className="space-y-8 p-8">
      <motion.h1
        className="text-4xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h1>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 rounded-lg overflow-hidden backdrop-blur-sm"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-primary">{cert.name}</h2>
                  <div className="text-muted-foreground">
                    <p className="font-medium">{cert.issuer}</p>
                    <p className="text-sm">{cert.date}</p>
                  </div>
                  <p className="text-foreground/80">{cert.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

