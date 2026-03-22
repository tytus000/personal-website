"use client";

import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>{siteConfig.location}</p>
      </div>
    </footer>
  );
}
