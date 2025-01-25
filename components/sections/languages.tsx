import { motion } from "framer-motion"
import { LanguagesIcon } from "lucide-react"

const languages = [
  {
    language: "English",
    proficiency: "Native",
    level: 100,
  },
  {
    language: "Spanish",
    proficiency: "Professional",
    level: 85,
  },
  {
    language: "French",
    proficiency: "Intermediate",
    level: 70,
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

export default function Languages() {
  return (
    <div className="space-y-8 p-8">
      <motion.h1
        className="text-4xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Languages
      </motion.h1>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 rounded-lg overflow-hidden backdrop-blur-sm"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <LanguagesIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-primary">{lang.language}</h2>
                    <span className="text-sm text-muted-foreground">{lang.proficiency}</span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

