'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    function animate() {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 12}px, ${pos.current.y - 12}px)`;
      }
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Crosshair */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#00FFFF" strokeWidth="1" opacity="0.6" />
        <line x1="12" y1="0" x2="12" y2="8" stroke="#00FFFF" strokeWidth="1" />
        <line x1="12" y1="16" x2="12" y2="24" stroke="#00FFFF" strokeWidth="1" />
        <line x1="0" y1="12" x2="8" y2="12" stroke="#00FFFF" strokeWidth="1" />
        <line x1="16" y1="12" x2="24" y2="12" stroke="#00FFFF" strokeWidth="1" />
        <circle cx="12" cy="12" r="2" fill="#00FFFF" opacity="0.8" />
      </svg>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: '0 0 12px #00FFFF60, 0 0 24px #00FFFF30',
        }}
      />
    </div>
  );
}
