import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Security Operations Dashboard",
    description:
      "Developed a real-time security operations dashboard for monitoring and responding to security incidents.",
    technologies: ["React", "Node.js", "ElasticSearch"],
    github: "https://github.com/username/project1",
    live: "https://project1.demo",
  },
  {
    title: "Threat Intelligence Platform",
    description: "Built an automated threat intelligence platform for collecting and analyzing security threats.",
    technologies: ["Python", "Machine Learning", "AWS"],
    github: "https://github.com/username/project2",
    live: "https://project2.demo",
  },
  {
    title: "Security Compliance Tool",
    description: "Created a tool for automating security compliance checks and generating reports.",
    technologies: ["Go", "Docker", "Kubernetes"],
    github: "https://github.com/username/project3",
    live: "https://project3.demo",
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

export default function Projects() {
  return (
    <div className="space-y-8 p-8">
      <motion.h1
        className="text-4xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 rounded-lg overflow-hidden backdrop-blur-sm group"
          >
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-primary">{project.title}</h2>
              <p className="text-foreground/80">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

