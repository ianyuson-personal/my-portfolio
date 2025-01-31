import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { CertificationModal } from "../certification-modal";

const certifications = [
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    date: "Jan 2022",
    description:
      "Industry-leading certification for information security professionals.",
    image: "/placeholder.svg?height=300&width=500",
    details:
      "The CISSP certification is globally recognized as a standard of achievement for security professionals. It covers critical topics in security today, including cloud computing, mobile security, application development security, and risk management.",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "Mar 2021",
    description:
      "Advanced certification in ethical hacking and penetration testing.",
    image: "/placeholder.svg?height=300&width=500",
    details:
      "The CEH certification validates the skills needed to be a competent professional in the field of ethical hacking. It covers techniques used by malicious hackers and how to secure systems against these threats.",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Jun 2020",
    description: "Fundamental IT security concepts and best practices.",
    image: "/placeholder.svg?height=300&width=500",
    details:
      "CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career. It covers network security, compliance and operation security, threats and vulnerabilities, application, data and host security, access control and identity management, and cryptography.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<{
    name: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
    details: string;
  } | null>(null);

  return (
    <div className="space-y-12 p-8">
      <motion.h1
        className="text-4xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedCertification(cert)}
            className="group relative overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-primary mb-1">
                        {cert.name}
                      </h2>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-primary/60 flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                    View Details <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <CertificationModal
        isOpen={!!selectedCertification}
        onClose={() => setSelectedCertification(null)}
        certification={selectedCertification}
      />
    </div>
  );
}
