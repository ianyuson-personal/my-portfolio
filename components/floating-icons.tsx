import { motion } from 'framer-motion'
import { Shield, Lock, Code, Server, Wifi, Database } from 'lucide-react'

const icons = [Shield, Lock, Code, Server, Wifi, Database]

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Icon size={Math.random() * 40 + 20} />
        </motion.div>
      ))}
    </div>
  )
}

