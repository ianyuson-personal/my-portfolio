import { motion } from "framer-motion"
import { User } from "lucide-react"

const references = [
  {
    name: "John Smith",
    position: "Chief Information Security Officer",
    company: "TechCorp International",
    reference: "An exceptional cybersecurity professional with deep technical knowledge and leadership skills.",
  },
  {
    name: "Sarah Johnson",
    position: "Security Director",
    company: "Global Systems Inc.",
    reference: "Demonstrated excellence in threat detection and incident response management.",
  },
  {
    name: "Michael Chen",
    position: "VP of Information Security",
    company: "SecureNet Solutions",
    reference: "Outstanding ability to develop and implement comprehensive security strategies.",
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

export default function References() {
  return (
    <div className="space-y-8 p-8">
      <motion.h1
        className="text-4xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        References
      </motion.h1>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
        {references.map((ref, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 rounded-lg overflow-hidden backdrop-blur-sm"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-primary">{ref.name}</h2>
                  <div className="text-muted-foreground">
                    <p className="font-medium">{ref.position}</p>
                    <p className="text-sm">{ref.company}</p>
                  </div>
                  <p className="text-foreground/80 italic">"{ref.reference}"</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

