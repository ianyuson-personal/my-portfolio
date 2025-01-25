"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Profile } from "@/types/profile";
import { LoadingContent } from "@/components/ui/loading-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Code, Trophy, Network } from "lucide-react";

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
    <div className="container mx-auto px-4 py-8 space-y-16">
      {profiles.map((profile) => (
        <motion.div
          key={profile.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 mb-12"
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
              {profile.name}
            </motion.h1>
            <motion.h2
              className="text-2xl text-primary/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Cybersecurity Expert
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-4xl mx-auto bg-secondary/30 rounded-lg p-6 shadow-lg"
            >
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-center text-foreground">
                  I am a Computer Science student specializing in Digital
                  Forensics with a strong passion for cybersecurity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-background/50 p-4 rounded-md">
                    <h4 className="font-semibold text-primary mb-2">
                      Hands-on Experience
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Trend Micro's Capture the Flag</li>
                      <li>PicoCTF competitions</li>
                      <li>Creating virtual lab environments</li>
                      <li>PortSwigger web security course</li>
                    </ul>
                  </div>
                  <div className="bg-background/50 p-4 rounded-md">
                    <h4 className="font-semibold text-primary mb-2">
                      Key Skills
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Digital Forensics</li>
                      <li>Web Security</li>
                      <li>Cisco networking concepts</li>
                      <li>Problem-solving mindset</li>
                    </ul>
                  </div>
                </div>
                <p className="text-center text-foreground/80 italic mt-4">
                  Eager to apply my skills and knowledge to strengthen system
                  security.
                </p>
              </div>
            </motion.div>
          </motion.div>
          {/* Skills Section
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-primary text-center mb-6">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Shield,
                  title: "Digital Forensics",
                  description:
                    "Specializing in cybercrime investigation and data recovery",
                },
                {
                  icon: Code,
                  title: "Web Security",
                  description:
                    "Proficient in identifying and mitigating web vulnerabilities",
                },
                {
                  icon: Trophy,
                  title: "CTF Competitions",
                  description:
                    "Experienced in Capture The Flag cybersecurity challenges",
                },
                {
                  icon: Network,
                  title: "Network Security",
                  description: "Strong foundation in Cisco networking concepts",
                },
              ].map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <skill.icon className="w-6 h-6 text-primary" />
                      <span>{skill.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div> */}

          {/* Featured Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-primary text-center mb-6">
              Featured Achievement
            </h3>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
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
