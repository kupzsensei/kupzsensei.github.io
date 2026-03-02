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
  disabled?: boolean;
}

export default function NeonButton({
  children,
  onClick,
  type = 'button',
  variant = 'cyan',
  className,
  href,
  disabled,
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
        disabled={!href ? disabled : undefined}
        className={cn(
          'inline-block border px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300',
          colors[variant],
          disabled && 'opacity-50 pointer-events-none',
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
