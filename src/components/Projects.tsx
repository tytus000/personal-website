"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="03."
          title="projects()"
          subtitle="// featured work"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="group bg-surface border border-border p-6 h-full hover:border-cyan/40 transition-all duration-300 relative overflow-hidden">
                  {/* Category + year */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-cyan/60 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 border border-border text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-muted">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View link */}
                  <div className="text-xs text-cyan opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <span>$ cat details</span>
                    <span className="text-cyan">&#8594;</span>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan/0 group-hover:border-cyan/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan/0 group-hover:border-cyan/30 transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
