'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'cyan' | 'magenta';
  className?: string;
  href?: string;
}

export default function NeonButton({
  children,
  onClick,
  type = 'button',
  variant = 'cyan',
  className,
  href,
}: NeonButtonProps) {
  const colors = {
    cyan: 'border-cyan text-cyan hover:bg-cyan/10 hover:shadow-[0_0_20px_#00FFFF40]',
    magenta: 'border-magenta text-magenta hover:bg-magenta/10 hover:shadow-[0_0_20px_#FF00FF40]',
  };

  const Comp = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Comp
        href={href}
        onClick={onClick}
        type={href ? undefined : type}
        className={cn(
          'inline-block border px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300',
          colors[variant],
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
