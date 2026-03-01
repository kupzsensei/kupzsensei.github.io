'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export function useTypewriter(text: string, speed = 50, startDelay = 0, enabled = true) {
  const [displayed, setDisplayed] = useState('');
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cleanup = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
  }, []);

  useEffect(() => {
    cleanup();

    if (!enabled) {
      setDisplayed('');
      setIsDone(false);
      return;
    }

    setDisplayed('');
    setIsDone(false);
    indexRef.current = 0;

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        indexRef.current++;
        setDisplayed(text.slice(0, indexRef.current));

        if (indexRef.current >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsDone(true);
        }
      }, speed);
    }, startDelay);

    return cleanup;
  }, [text, speed, startDelay, enabled, cleanup]);

  return { displayed, isDone };
}
