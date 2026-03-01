'use client';

import { motion } from 'framer-motion';
import { GlitchText, TerminalText, MatrixRain } from '@/components/ui';
import { useBoot } from '@/components/providers/BootProvider';
import siteData from '@/data/site.json';

export default function Hero() {
  const { isBooted } = useBoot();

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <MatrixRain />

      <div className="relative z-10 px-6 text-center">
        <div className="mb-4 font-mono text-xs tracking-widest text-cyan/60">
          &gt; SYSTEM ONLINE
        </div>

        <GlitchText
          text={siteData.name}
          as="h1"
          className="font-display text-5xl font-bold tracking-wider text-white md:text-7xl lg:text-8xl"
        />

        <p className="mt-6 font-mono text-sm text-cyan md:text-base">
          {isBooted ? (
            <TerminalText
              text={siteData.title}
              speed={40}
              startDelay={300}
              enabled={true}
              showCursor={true}
              className="text-cyan"
            />
          ) : (
            <span>&nbsp;</span>
          )}
        </p>

        <div className="mt-12">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 font-mono text-xs text-cyan/50 transition-colors hover:text-cyan"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-lg"
            >
              ▼
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
