import { motion } from "framer-motion"
import { Shield, Lock, Code, Server, Users, Lightbulb } from "lucide-react"

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
  <motion.div variants={item} className="glass-card p-8" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <Icon className="h-10 w-10 text-primary mb-6" />
    <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
    <p className="text-base text-foreground/80 leading-relaxed">{description}</p>
  </motion.div>
)

export default function Profile() {
  return (
    <div className="space-y-16 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <motion.h1
          className="text-5xl font-bold text-primary"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
        >
          Ian Jay D. Yuson
        </motion.h1>
        <motion.h2
          className="text-2xl text-primary/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cybersecurity Expert
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-3xl mx-auto px-4"
      >
        <p className="text-lg leading-relaxed text-center text-foreground">
          With over a decade of experience in the cybersecurity field, I specialize in protecting digital assets and
          implementing cutting-edge security measures. My expertise spans from threat detection to incident response and
          innovative security architecture design.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="space-y-6 px-4"
      >
        <motion.h3
          className="text-2xl font-semibold text-primary text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Featured Achievement
        </motion.h3>
        <motion.div
          className="glass-card p-8"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <p className="text-lg leading-relaxed text-center text-foreground">
            Led the implementation of a next-generation Security Operations Center (SOC), resulting in a 75% reduction
            in incident response time and a 60% increase in threat detection accuracy across the organization.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

