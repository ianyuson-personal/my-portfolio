"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Profile } from "@/types/profile";
import { LoadingContent } from "@/components/ui/loading-content";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code, Trophy, Network, Quote } from "lucide-react";
import Image from "next/image";

const skillItems = [
  {
    icon: Shield,
    title: "Digital Forensics",
    description: "Specializing in cybercrime investigation and data recovery",
  },
  {
    icon: Code,
    title: "Web Security",
    description: "Proficient in identifying and mitigating web vulnerabilities",
  },
  {
    icon: Trophy,
    title: "CTF Competitions",
    description: "Experienced in Capture The Flag cybersecurity challenges",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Strong foundation in Cisco networking concepts",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Profile() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const response = await fetch("/api/supabase/profile");
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setProfiles(data.profiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfiles();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingContent size="lg" />
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {profiles.map((profile) => (
        <motion.div
          key={profile.id}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div
            className="text-center space-y-8 mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-48 h-48 mx-auto mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={profile.profile_picture || "/placeholder-avatar.jpg"}
                alt={profile.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
            </motion.div>
            <h1 className="text-5xl font-bold text-primary">{profile.name}</h1>
            <h2 className="text-2xl text-primary/80">Cybersecurity Expert</h2>
          </motion.div>

          {/* About Section */}
          <motion.div
            className="max-w-4xl mx-auto bg-secondary/30 rounded-lg p-8 shadow-lg backdrop-blur-sm"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed text-center text-foreground mb-6">
              I am a Computer Science student specializing in Digital Forensics
              with a strong passion for cybersecurity. My goal is to leverage
              cutting-edge technologies to enhance digital security and protect
              against evolving cyber threats.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-background/50 p-6 rounded-md shadow-inner">
                <h4 className="font-semibold text-primary mb-4 text-lg">
                  Hands-on Experience
                </h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Trend Micro's Capture the Flag",
                    "PicoCTF competitions",
                    "Creating virtual lab environments",
                    "PortSwigger web security course",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Shield className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-background/50 p-6 rounded-md shadow-inner">
                <h4 className="font-semibold text-primary mb-4 text-lg">
                  Key Skills
                </h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Digital Forensics",
                    "Web Security",
                    "Cisco networking concepts",
                    "Problem-solving mindset",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Code className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            className="my-16 max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <Quote className="w-12 h-12 text-primary mx-auto mb-4" />
            <blockquote className="text-2xl font-semibold text-primary/80 italic">
              "Embrace AI as a tool for innovation and progress. Those who adapt
              and integrate AI will lead; those who resist may find themselves
              left behind."
            </blockquote>
            <cite className="block mt-4 text-lg text-foreground/80">
              - Ian Jay Yuson
            </cite>
          </motion.div>

          {/* Skills Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h3 className="text-3xl font-semibold text-primary text-center mb-8">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillItems.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-background/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <skill.icon className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-xl font-semibold text-primary mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-foreground/80">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Achievement */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold text-primary text-center mb-8">
              Featured Achievement
            </h3>
            <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-8">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
                <p className="text-lg leading-relaxed text-center">
                  Led the implementation of a next-generation Security
                  Operations Center (SOC), resulting in a 75% reduction in
                  incident response time and a 60% increase in threat detection
                  accuracy across the organization.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
