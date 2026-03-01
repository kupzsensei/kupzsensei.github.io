'use client';

import { useTypewriter } from '@/hooks';
import { cn } from '@/lib/utils';

interface TerminalTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
  enabled?: boolean;
}

export default function TerminalText({
  text,
  speed = 50,
  startDelay = 0,
  className,
  showCursor = true,
  enabled = true,
}: TerminalTextProps) {
  const { displayed, isDone } = useTypewriter(text, speed, startDelay, enabled);

  return (
    <span className={cn('font-mono', className)}>
      {displayed}
      {showCursor && !isDone && (
        <span className="typing-cursor" />
      )}
    </span>
  );
}
