"use client";

import Link from "next/link";
import { siteConfig, navLinks } from "@/data/content";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 mb-10">
      <Link href="/" className="no-underline">
        <h1 className="text-base font-bold tracking-[0.2em] text-white whitespace-nowrap">
          {siteConfig.title}
        </h1>
      </Link>
      <nav className="flex flex-wrap items-baseline gap-x-1 text-muted text-sm">
        {navLinks.map((link, i) => (
          <span key={link.label}>
            {link.href.startsWith("http") ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white no-underline"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-muted hover:text-white no-underline"
              >
                {link.label}
              </Link>
            )}
            {i < navLinks.length - 1 && (
              <span className="mx-1 text-muted">·</span>
            )}
          </span>
        ))}
      </nav>
    </header>
  );
}
