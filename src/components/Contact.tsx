"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-cyan mb-4 tracking-widest">04. contact()</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let&apos;s Build Something
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-10 max-w-md mx-auto">
            I&apos;m always interested in hearing about new projects, especially
            those involving AI solutions and complex technical challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2 px-8 py-3 border border-cyan text-cyan text-sm hover:bg-cyan hover:text-background transition-all duration-300"
            >
              <span className="text-muted group-hover:text-background">$</span>
              send_message
            </a>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-6 mt-8"
          >
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan transition-colors text-sm"
            >
              github
            </a>
            <span className="text-border">|</span>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan transition-colors text-sm"
            >
              linkedin
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
