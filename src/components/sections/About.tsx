'use client';

import { motion } from 'framer-motion';
import { SectionHeading, DiagnosticBar } from '@/components/ui';
import { useInView } from '@/hooks';
import siteData from '@/data/site.json';

export default function About() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="01" title="ABOUT" />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {siteData.about.bio.map((paragraph, i) => (
              <p key={i} className="font-mono text-sm leading-relaxed text-muted">
                <span className="text-cyan">&gt;</span> {paragraph}
              </p>
            ))}
          </motion.div>

          {/* System Diagnostics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-cyan/10 bg-surface/50 p-6 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-2 font-mono text-xs text-cyan">
              <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
              SYSTEM DIAGNOSTICS — ALL NOMINAL
            </div>
            <div className="space-y-5">
              {siteData.about.skills.map((skill) => (
                <DiagnosticBar
                  key={skill.label}
                  label={skill.label}
                  value={skill.value}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
