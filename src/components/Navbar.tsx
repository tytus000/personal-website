"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/content";

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-cyan font-bold text-lg tracking-wider glitch-hover"
        >
          <span className="text-muted">&gt; </span>
          {siteConfig.initials}
          <span className="cursor-blink text-cyan">_</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="text-sm text-muted hover:text-cyan transition-colors duration-200"
            >
              <span className="text-cyan/50">0{i + 1}.</span> {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cyan p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-px bg-cyan transition-transform ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cyan transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cyan transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted hover:text-cyan transition-colors"
                >
                  <span className="text-cyan/50">0{i + 1}.</span> {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
