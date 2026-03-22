"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              Let&apos;s work together
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              I&apos;m always interested in hearing about new projects, especially
              those involving AI implementation, digital transformation, and
              complex technical challenges.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors duration-200"
            >
              Get in Touch
            </a>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-6 mt-10"
            >
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
