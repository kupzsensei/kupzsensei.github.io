'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import TechBadge from './TechBadge';
import { useInView } from '@/hooks';

interface TimelineItemProps {
  item: Experience;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const { ref, inView } = useInView(0.3);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8">
      {/* Left content or spacer */}
      <div className={isLeft ? 'md:text-right' : 'md:order-3'}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-3 border border-cyan/10 bg-surface/50 p-6 backdrop-blur-sm"
        >
          <div className="font-mono text-xs text-cyan tracking-widest">{item.period}</div>
          <h3 className="font-display text-lg font-bold text-white tracking-wider">
            {item.role}
          </h3>
          <div className="font-mono text-sm text-magenta">{item.company}</div>
          <ul className="space-y-1">
            {item.description.map((d, i) => (
              <li key={i} className="font-mono text-xs text-muted leading-relaxed">
                &gt; {d}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center line + dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-px flex-1 bg-cyan/20" />
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="h-4 w-4 rounded-full border-2 border-cyan bg-base"
          style={{ boxShadow: '0 0 10px #00FFFF60' }}
        />
        <div className="w-px flex-1 bg-cyan/20" />
      </div>

      {/* Right spacer or content */}
      <div className={isLeft ? 'hidden md:block md:order-3' : 'hidden md:block'} />
    </div>
  );
}
