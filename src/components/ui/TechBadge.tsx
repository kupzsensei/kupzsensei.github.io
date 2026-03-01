'use client';

import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block border border-cyan/30 px-2 py-0.5 font-mono text-[10px] tracking-wider text-cyan/80 uppercase',
        className
      )}
    >
      {name}
    </span>
  );
}
