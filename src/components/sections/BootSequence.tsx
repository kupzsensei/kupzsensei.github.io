'use client';

import { useEffect, useRef, useState } from 'react';
import { useBoot } from '@/components/providers/BootProvider';
import { BOOT_LINES } from '@/lib/constants';

export default function BootSequence() {
  const { isBooted, setBooted } = useBoot();
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [flashing, setFlashing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isBooted) return;

    let lineIndex = 0;
    const lineInterval = setInterval(() => {
      if (lineIndex < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[lineIndex]]);
        setProgress(((lineIndex + 1) / BOOT_LINES.length) * 100);
        lineIndex++;
      } else {
        clearInterval(lineInterval);
        setTimeout(() => {
          setFlashing(true);
          setTimeout(() => setBooted(), 400);
        }, 300);
      }
    }, 200);

    return () => clearInterval(lineInterval);
  }, [isBooted, setBooted]);

  useEffect(() => {
    const handleKeyDown = () => {
      if (!isBooted) setBooted();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBooted, setBooted]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-base transition-opacity duration-300 ${
        flashing || isBooted ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={isBooted}
    >
      {flashing && (
        <div className="fixed inset-0 bg-cyan/20 z-[70]" />
      )}

      <div className="w-full max-w-2xl px-8 font-mono text-sm">
        <div className="mb-6 text-cyan glow-cyan text-xs">
          {'>'} CYBERDECK SYSTEMS v3.7.2
        </div>

        <div className="space-y-1 mb-8">
          {lines.map((line, i) => (
            <div
              key={i}
              className="text-green/80 text-xs"
            >
              [{new Date().toISOString().slice(11, 19)}] {line}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted">
            <span>LOADING SYSTEM</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 w-full bg-surface-light overflow-hidden">
            <div
              className="h-full bg-cyan transition-all duration-200"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 8px #00FFFF',
              }}
            />
          </div>
        </div>

        <div className="mt-6 text-xs text-muted/50">
          Press any key to skip...
        </div>
      </div>
    </div>
  );
}
