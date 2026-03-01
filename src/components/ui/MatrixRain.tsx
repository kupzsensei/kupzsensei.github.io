'use client';

import { useEffect, useRef } from 'react';
import { MATRIX_CHARS } from '@/lib/constants';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const fontSize = 14;
    let columns: number;
    let drops: number[];
    let lastTime = 0;
    const frameDuration = 80; // ms between frames — higher = slower

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      columns = Math.floor(canvas!.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100);
      // Clear canvas fully on resize
      ctx!.fillStyle = '#0A0A0F';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
    }

    resize();
    window.addEventListener('resize', resize);

    function draw(time: number = 0) {
      animationId = requestAnimationFrame(draw);

      if (time - lastTime < frameDuration) return;
      lastTime = time;

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      ctx!.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] < 0) {
          drops[i]++;
          continue;
        }

        const x = i * fontSize;

        // Draw a short trail (last 15 characters)
        const trailLength = 15;
        for (let j = 0; j < trailLength; j++) {
          const trailY = (drops[i] - j) * fontSize;
          if (trailY < 0 || trailY > canvas!.height) continue;

          const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
          const alpha = j === 0 ? 0.9 : Math.max(0, (1 - j / trailLength) * 0.4);

          ctx!.fillStyle = `rgba(0, 255, 255, ${alpha})`;
          ctx!.fillText(char, x, trailY);
        }

        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -20);
        }
        drops[i]++;
      }

    }

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-40"
      aria-hidden="true"
    />
  );
}
