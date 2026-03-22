"use client";

import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p>
          <span className="text-cyan/40">&gt;</span> {siteConfig.name} &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <p className="text-muted/50">
          built with next.js + tailwind + framer-motion
        </p>
      </div>
    </footer>
  );
}
