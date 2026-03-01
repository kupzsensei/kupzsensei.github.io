'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed right-0 top-0 z-40 h-full w-1"
      aria-hidden="true"
    >
      <div
        className="w-full bg-cyan origin-top transition-transform duration-150"
        style={{
          height: '100%',
          transform: `scaleY(${progress})`,
          boxShadow: '0 0 8px #00FFFF, 0 0 16px #00FFFF40',
        }}
      />
    </div>
  );
}
