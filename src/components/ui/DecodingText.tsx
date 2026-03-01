'use client';

import { useTextDecoder } from '@/hooks';
import { useInView } from '@/hooks';
import { cn } from '@/lib/utils';

interface DecodingTextProps {
  text: string;
  className?: string;
  duration?: number;
  as?: 'h2' | 'h3' | 'span' | 'p';
}

export default function DecodingText({
  text,
  className,
  duration = 1000,
  as: Tag = 'span',
}: DecodingTextProps) {
  const { ref, inView } = useInView(0.5);
  const displayed = useTextDecoder(text, inView, duration);

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={cn('font-mono', className)}>
      {displayed}
    </Tag>
  );
}
