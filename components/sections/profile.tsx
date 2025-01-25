import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Profile } from "@/types/profile";
import { LoadingContent } from "@/components/ui/loading-content";

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
      <div className="flex justify-center items-center h-64">
        <LoadingContent size="lg" />
      </div>
    );

  return (
    <div className="space-y-16 py-8">
      {profiles.map((profile) => (
        <motion.div
          key={profile.id}
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
            className="max-w-3xl mx-auto px-4"
          >
            <p className="text-lg leading-relaxed text-center text-foreground">
              {profile.bio}
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
                Led the implementation of a next-generation Security Operations
                Center (SOC), resulting in a 75% reduction in incident response
                time and a 60% increase in threat detection accuracy across the
                organization.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
