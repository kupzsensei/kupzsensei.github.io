'use client';

import { SectionHeading, TimelineItem } from '@/components/ui';
import siteData from '@/data/site.json';

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="03" title="EXPERIENCE" />

        <div className="space-y-8 md:space-y-0">
          {siteData.experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
