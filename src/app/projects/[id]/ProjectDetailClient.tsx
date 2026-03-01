'use client';

import { motion } from 'framer-motion';
import { GlitchText, TechBadge, NeonButton } from '@/components/ui';
import type { Project } from '@/types';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectDetailClient({ project, index }: Props) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-cyan/60 transition-colors hover:text-cyan mb-12 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">&lt;-</span>
            BACK TO ALL PROJECTS
          </a>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-cyan/60 tracking-widest uppercase mb-4">
            Project {num}
          </div>

          <GlitchText
            text={project.title}
            as="h1"
            className="font-display text-3xl font-bold tracking-wider text-white md:text-5xl"
          />

          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </motion.div>

        {/* Meta bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 border border-cyan/10 bg-surface/50 p-6 mb-12 backdrop-blur-sm"
        >
          {project.role && (
            <div>
              <div className="font-mono text-[10px] text-cyan/40 tracking-widest uppercase mb-1">Role</div>
              <div className="font-mono text-sm text-white">{project.role}</div>
            </div>
          )}
          {project.year && (
            <div>
              <div className="font-mono text-[10px] text-cyan/40 tracking-widest uppercase mb-1">Year</div>
              <div className="font-mono text-sm text-white">{project.year}</div>
            </div>
          )}
          <div>
            <div className="font-mono text-[10px] text-cyan/40 tracking-widest uppercase mb-1">Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Long description */}
        {project.longDescription && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 space-y-4"
          >
            <h2 className="font-display text-lg font-bold tracking-wider text-white uppercase">
              Overview
            </h2>
            {project.longDescription.map((paragraph, i) => (
              <p key={i} className="font-mono text-sm leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </motion.div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-display text-lg font-bold tracking-wider text-white uppercase mb-4">
              Key Features
            </h2>
            <div className="border border-cyan/10 bg-surface/50 p-6 backdrop-blur-sm space-y-2">
              {project.features.map((feature, i) => (
                <div key={i} className="font-mono text-sm text-muted flex items-start gap-3">
                  <span className="text-cyan mt-0.5">&#9656;</span>
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Screenshots placeholder */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-display text-lg font-bold tracking-wider text-white uppercase mb-4">
              Screenshots
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {project.screenshots.map((src, i) => (
                <div
                  key={i}
                  className="border border-cyan/10 bg-surface/50 aspect-video flex items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* External link */}
        {project.url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <NeonButton href={project.url} variant="cyan">
              [ VIEW LIVE PROJECT ]
            </NeonButton>
          </motion.div>
        )}

        {/* Big project number watermark */}
        <div
          className="fixed top-1/2 right-8 -translate-y-1/2 font-display text-[20rem] font-bold text-cyan/[0.02] pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          {num}
        </div>
      </div>
    </div>
  );
}
