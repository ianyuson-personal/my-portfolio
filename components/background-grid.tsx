import { motion } from 'framer-motion'

export function BackgroundGrid() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 grid grid-cols-12 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-primary rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.01,
              ease: [0.23, 1, 0.32, 1],
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

