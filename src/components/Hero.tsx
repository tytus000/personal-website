"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleGrid from "./ParticleGrid";
import { siteConfig } from "@/data/content";

function useTypingEffect(text: string, speed = 50, delay = 1000) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed: nameText, done: nameDone } = useTypingEffect(
    siteConfig.name,
    60,
    800
  );
  const { displayed: roleText } = useTypingEffect(
    siteConfig.role,
    30,
    800 + siteConfig.name.length * 60 + 300
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleGrid />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal-style intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-xs text-muted tracking-widest uppercase">
            // initializing portfolio...
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-foreground">{nameText}</span>
          {!nameDone && (
            <span className="cursor-blink text-cyan text-4xl sm:text-5xl md:text-7xl">
              |
            </span>
          )}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-cyan text-glow mb-8"
        >
          {roleText}
          <span className="cursor-blink text-cyan">|</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="text-sm text-muted max-w-md mx-auto mb-12"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-cyan text-cyan text-sm hover:bg-cyan hover:text-background transition-all duration-300"
          >
            <span className="text-muted group-hover:text-background">
              $
            </span>
            view_projects
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              --all
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted text-sm hover:border-cyan hover:text-cyan transition-all duration-300"
          >
            <span>$</span> contact --init
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-cyan to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
