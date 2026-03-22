"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/content";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs text-muted uppercase tracking-widest">
            {project.category}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">
          {project.title}
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="border-t border-border pt-8 mb-12"
      >
        <p className="text-xs text-muted uppercase tracking-widest mb-4">
          Overview
        </p>
        <p className="text-muted leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-6">
            Key Features
          </p>
          <div className="space-y-4">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 text-sm"
              >
                <span className="text-muted mt-1.5 w-1 h-1 bg-muted rounded-full flex-shrink-0" />
                <span className="text-muted">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-6">
            Technology
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="text-sm px-4 py-2 bg-surface text-muted rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
