'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui';
import siteData from '@/data/site.json';
import { useInView } from '@/hooks';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export default function TechStack() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="tech" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="04" title="TECH STACK" />

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {siteData.techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px #00FFFF30',
                borderColor: 'rgba(0, 255, 255, 0.4)',
              }}
              className="flex flex-col items-center gap-3 border border-cyan/10 bg-surface/50 p-6 backdrop-blur-sm transition-colors cursor-default"
            >
              <span className="font-display text-2xl font-bold text-cyan">
                {tech.icon}
              </span>
              <span className="font-mono text-xs text-muted tracking-wider uppercase">
                {tech.name}
              </span>
              <span className="font-mono text-[10px] text-cyan/40 tracking-widest uppercase">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
