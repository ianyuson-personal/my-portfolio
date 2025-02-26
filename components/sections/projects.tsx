"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectModal } from "../project-modal";

const projects: Project[] = [
  {
    title: "Security Operations Dashboard",
    description:
      "Developed a real-time security operations dashboard for monitoring and responding to security incidents.",
    technologies: ["React", "Node.js", "ElasticSearch"],
    github: "https://github.com/username/project1",
    live: "https://project1.demo",
    date: "2023-11-15",
    details:
      "This dashboard provides real-time monitoring of security events, incident response workflows, and automated alerting capabilities. Built with modern web technologies and scalable architecture to handle large volumes of security data.",
  },
  {
    title: "Threat Intelligence Platform",
    description:
      "Built an automated threat intelligence platform for collecting and analyzing security threats.",
    technologies: ["Python", "Machine Learning", "AWS"],
    github: "https://github.com/username/project2",
    live: "https://project2.demo",
    date: "2023-09-01",
    details:
      "Leveraging machine learning algorithms to analyze and categorize security threats, this platform automates the collection and processing of threat intelligence data from multiple sources.",
  },
  {
    title: "Security Compliance Tool",
    description:
      "Created a tool for automating security compliance checks and generating reports.",
    technologies: ["Go", "Docker", "Kubernetes"],
    github: "https://github.com/username/project3",
    live: "https://project3.demo",
    date: "2023-06-20",
    details:
      "This tool streamlines the compliance process by automatically checking systems against various security standards and generating detailed reports for audit purposes.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sort projects by date (most recent first)
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-12 p-8">
      <motion.h1
        className="text-4xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects Timeline
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative"
      >
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2 hidden md:block" />

        {sortedProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } flex-col`}
          >
            {/* Timeline node */}
            <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block" />

            {/* Project card */}
            <Card
              className={`w-full md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              } cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/30`}
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {format(parseISO(project.date), "MMMM d, yyyy")}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label={`View live demo of ${project.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
}
