'use client';

import {
  BootSequence,
  Hero,
  About,
  Projects,
  Experience,
  TechStack,
  Contact,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <BootSequence />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-cyan/10 py-8 px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-muted">
            &copy; {new Date().getFullYear()} // BUILT WITH NEURAL PRECISION
          </span>
          <span className="font-mono text-[10px] text-cyan/30">
            Next.js &middot; TypeScript &middot; GSAP &middot; Framer Motion
          </span>
        </div>
      </footer>
    </>
  );
}
