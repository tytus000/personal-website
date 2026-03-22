"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  index,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-2">
        <span className="text-cyan text-sm font-mono">{index}</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="hidden sm:block flex-1 h-px bg-border" />
      </div>
      {subtitle && (
        <p className="text-muted text-sm ml-12">{subtitle}</p>
      )}
    </motion.div>
  );
}
