'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks';
import { cn } from '@/lib/utils';

interface DiagnosticBarProps {
  label: string;
  value: number;
  className?: string;
}

export default function DiagnosticBar({ label, value, className }: DiagnosticBarProps) {
  const { ref, inView } = useInView(0.3);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const step = value / 30;
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setDisplayValue(Math.round(current));
    }, 30);

    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <div ref={ref} className={cn('space-y-2', className)}>
      <div className="flex justify-between font-mono text-xs">
        <span className="text-muted uppercase tracking-wider">{label}</span>
        <span className="text-cyan">{displayValue}%</span>
      </div>
      <div className="h-2 w-full bg-surface-light overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan to-blue transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${value}%` : '0%',
            boxShadow: '0 0 8px #00FFFF60',
          }}
        />
      </div>
    </div>
  );
}
