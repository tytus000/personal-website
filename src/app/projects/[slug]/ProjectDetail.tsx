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
          <span className="text-xs text-cyan uppercase tracking-widest">
            {project.category}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          {project.title}
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-surface border border-border p-6 mb-8"
      >
        <p className="text-xs text-muted uppercase tracking-widest mb-4">
          // overview
        </p>
        <p className="text-muted text-sm leading-relaxed">
          {project.description}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-surface border border-border p-6"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-4">
            // key features
          </p>
          <div className="space-y-3">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 text-sm"
              >
                <span className="text-cyan text-xs mt-1">&#9656;</span>
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
          className="bg-surface border border-border p-6"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-4">
            // tech stack
          </p>
          <div className="space-y-2">
            {project.technologies.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="flex items-center gap-3 text-sm"
              >
                <span className="text-cyan/40 text-xs font-mono w-6 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-border" />
                <span className="text-muted">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
