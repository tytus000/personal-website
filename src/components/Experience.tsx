"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="02."
          title="experience()"
          subtitle="// career timeline"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative pl-8 md:pl-20"
              >
                {/* Node */}
                <div className="absolute left-0 md:left-8 top-1 w-2 h-2 -translate-x-[3.5px] border border-cyan bg-background" />

                {/* Period tag */}
                <div className="text-xs text-cyan mb-2 tracking-wider">
                  [{exp.period}]
                </div>

                <div className="bg-surface border border-border p-6 hover:border-cyan/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-cyan/70">
                      @ {exp.company}
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 border border-border text-muted hover:text-cyan hover:border-cyan/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
