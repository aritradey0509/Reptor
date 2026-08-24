import React from 'react';
import { Card } from '../common/Card';
import { PieChart, ShieldCheck } from 'lucide-react';

export const MuscleSplitPie: React.FC = () => {
  const splits = [
    { name: 'Push (Chest/Delts/Triceps)', percent: 45, color: 'bg-cyan-500', text: 'text-cyan-400' },
    { name: 'Pull (Back/Lats/Biceps)', percent: 35, color: 'bg-emerald-500', text: 'text-emerald-400' },
    { name: 'Legs (Quads/Hamstrings)', percent: 20, color: 'bg-violet-500', text: 'text-violet-400' },
  ];

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <PieChart className="w-5 h-5 text-violet-400" /> PPL Volume Distribution
        </h3>
        <span className="text-xs font-semibold text-slate-400">Past 30 Days</span>
      </div>

      {/* Stacked Progress Bar Representation */}
      <div className="space-y-2">
        <div className="h-4 w-full rounded-xl overflow-hidden bg-slate-900 flex">
          {splits.map((s, idx) => (
            <div
              key={idx}
              style={{ width: `${s.percent}%` }}
              className={`${s.color} h-full transition-all duration-500`}
              title={`${s.name}: ${s.percent}%`}
            />
          ))}
        </div>
      </div>

      {/* Legend & Breakdown */}
      <div className="space-y-3 pt-2">
        {splits.map((s, idx) => (
          <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className={`w-3 h-3 rounded-full ${s.color}`} />
              <span className="text-xs font-semibold text-slate-200">{s.name}</span>
            </div>
            <span className={`text-xs font-bold ${s.text}`}>{s.percent}%</span>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Balanced Push/Pull distribution maintains shoulder health & postural balance.</span>
      </div>
    </Card>
  );
};
