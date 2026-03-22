"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { aboutText, skills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="About" title="Background" />

        <div className="grid lg:grid-cols-[1fr_1px_auto] gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 max-w-2xl"
          >
            {aboutText.map((paragraph, i) => (
              <p key={i} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block bg-border" />

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="min-w-[240px]"
          >
            <p className="text-sm text-muted tracking-widest uppercase mb-6">
              Capabilities
            </p>
            <div className="space-y-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
