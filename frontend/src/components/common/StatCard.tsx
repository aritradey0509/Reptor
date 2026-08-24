import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  subtitle?: string;
  icon: React.ReactNode;
  accentColor?: 'cyan' | 'violet' | 'emerald' | 'amber';
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  unit,
  subtitle,
  icon,
  accentColor = 'cyan',
}) => {
  const colorMap = {
    cyan: {
      badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      unitColor: 'text-cyan-400',
      subtitleColor: 'text-emerald-400',
    },
    violet: {
      badgeBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
      unitColor: 'text-violet-400',
      subtitleColor: 'text-violet-400',
    },
    emerald: {
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      unitColor: 'text-emerald-400',
      subtitleColor: 'text-emerald-400',
    },
    amber: {
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      unitColor: 'text-amber-400',
      subtitleColor: 'text-slate-400',
    },
  };

  const currentTheme = colorMap[accentColor];

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="glass-card glass-card-hover p-5 rounded-2xl relative overflow-hidden group"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {title}
        </span>
        <div className={`p-2 rounded-xl border ${currentTheme.badgeBg}`}>
          {icon}
        </div>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-white">{value}</span>
        {unit && <span className={`text-sm font-bold ${currentTheme.unitColor}`}>{unit}</span>}
      </div>
      {subtitle && (
        <p className={`mt-2 text-xs truncate ${currentTheme.subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
