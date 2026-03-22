"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Projects" title="Selected Work" />

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="group relative bg-surface border border-border p-8 h-full hover:border-border-light transition-all duration-300">
                  {/* Category + year */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs text-muted uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-muted leading-relaxed mb-8">
                    {project.summary}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-background text-muted rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-muted px-3 py-1">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-8 right-8 text-muted opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1">
                    &#8599;
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
