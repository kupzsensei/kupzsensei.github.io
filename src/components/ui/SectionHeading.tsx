'use client';

import DecodingText from './DecodingText';

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="mb-16 flex items-center gap-4">
      <span className="font-mono text-sm text-cyan glow-cyan">{number}</span>
      <DecodingText
        text={title}
        as="h2"
        className="font-display text-2xl font-bold tracking-wider text-white uppercase md:text-3xl"
        duration={800}
      />
      <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-cyan/30 to-transparent ml-4" />
    </div>
  );
}
