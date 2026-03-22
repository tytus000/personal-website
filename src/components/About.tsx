"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { aboutText, skills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="01."
          title="about()"
          subtitle="// who am I"
        />

        <div className="grid md:grid-cols-[1fr_auto] gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {aboutText.map((paragraph, i) => (
              <p key={i} className="text-muted text-sm leading-relaxed">
                <span className="text-cyan/40 select-none">
                  {String(i + 1).padStart(2, "0")} |{" "}
                </span>
                {paragraph}
              </p>
            ))}

            {/* Terminal-style info block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-surface border border-border p-4 text-xs"
            >
              <div className="flex items-center gap-2 mb-3 text-muted">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="ml-2">system_info.sh</span>
              </div>
              <div className="space-y-1 text-muted">
                <p>
                  <span className="text-cyan">$</span> cat /etc/profile
                </p>
                <p>
                  <span className="text-foreground">ROLE</span>=&quot;Software
                  Developer & AI Solutions Architect&quot;
                </p>
                <p>
                  <span className="text-foreground">FOCUS</span>=&quot;Enterprise
                  AI, Full-Stack Development&quot;
                </p>
                <p>
                  <span className="text-foreground">APPROACH</span>=&quot;Ship
                  fast, iterate, measure, repeat&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="min-w-[200px]"
          >
            <p className="text-xs text-muted mb-4 uppercase tracking-widest">
              tech_stack
            </p>
            <div className="space-y-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3 text-sm group"
                >
                  <span className="text-cyan text-xs">&#9656;</span>
                  <span className="text-muted group-hover:text-foreground transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
