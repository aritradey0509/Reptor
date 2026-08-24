import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
}) => {
  const base = 'inline-flex items-center font-bold tracking-wider rounded-lg border uppercase';

  const variants = {
    cyan: 'bg-cyan-950/60 text-cyan-400 border-cyan-800/60',
    violet: 'bg-violet-950/60 text-violet-400 border-violet-800/60',
    emerald: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60',
    amber: 'bg-amber-950/60 text-amber-400 border-amber-800/60',
    rose: 'bg-rose-950/60 text-rose-400 border-rose-800/60',
    slate: 'bg-slate-900 text-slate-300 border-slate-700/60',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};
