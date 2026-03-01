'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading, ProjectCard } from '@/components/ui';
import siteData from '@/data/site.json';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': function () {
          const track = trackRef.current!;
          const totalWidth = track.scrollWidth - window.innerWidth;

          gsap.to(track, {
            x: -totalWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              end: () => `+=${totalWidth}`,
              invalidateOnRefresh: true,
            },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading number="02" title="PROJECTS" />
      </div>

      {/* Single DOM — CSS handles the layout switch */}
      <div
        ref={trackRef}
        className="flex flex-col gap-8 md:flex-row md:pl-[10vw]"
      >
        {siteData.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
