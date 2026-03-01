'use client';

import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

export function useTextDecoder(text: string, enabled = false, duration = 1000) {
  const [displayed, setDisplayed] = useState(text);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      return;
    }

    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealedCount = Math.floor(progress * text.length);

      const result = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < revealedCount) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplayed(result);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, enabled, duration]);

  return displayed;
}
