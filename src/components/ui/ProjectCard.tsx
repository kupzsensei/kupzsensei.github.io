'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        className="relative flex h-[70vh] w-[80vw] max-w-4xl flex-shrink-0 flex-col justify-between border border-cyan/20 bg-surface/80 p-8 backdrop-blur-sm md:p-12 cursor-pointer group"
        whileHover={{ borderColor: 'rgba(0, 255, 255, 0.5)' }}
      >
        {/* Project number */}
        <div className="absolute top-4 right-4 font-display text-6xl font-bold text-cyan/10 md:text-8xl">
          {String(index + 1).padStart(2, '0')}
        </div>

        <div className="relative z-10 space-y-6">
          <div className="font-mono text-xs text-cyan/60 tracking-widest uppercase">
            Project {String(index + 1).padStart(2, '0')}
          </div>

          <h3 className="font-display text-2xl font-bold tracking-wider text-white md:text-3xl">
            {project.title}
          </h3>

          <p className="max-w-lg font-mono text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <span className="inline-block border border-cyan px-6 py-3 font-mono text-xs tracking-widest text-cyan uppercase transition-all group-hover:bg-cyan/10 group-hover:shadow-[0_0_20px_#00FFFF40]">
            [ VIEW PROJECT ]
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
