"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Experience" title="Career" />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-border last:border-b-0"
            >
              {/* Period */}
              <div className="text-sm text-muted pt-1">{exp.period}</div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-3">
                  <h3 className="text-lg font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-muted">{exp.company}</span>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-surface text-muted rounded-full"
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
    </section>
  );
}
