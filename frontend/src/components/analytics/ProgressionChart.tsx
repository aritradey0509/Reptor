import React from 'react';
import { Card } from '../common/Card';
import { TrendingUp, Calendar } from 'lucide-react';

export const ProgressionChart: React.FC = () => {
  // Mock historical weight progression data points
  const points = [
    { week: 'W1', weight: 24.0, volume: 1800 },
    { week: 'W2', weight: 26.0, volume: 2100 },
    { week: 'W3', weight: 26.0, volume: 2250 },
    { week: 'W4', weight: 28.0, volume: 2400 },
    { week: 'W5', weight: 28.0, volume: 2500 },
    { week: 'W6', weight: 30.0, volume: 2750 },
  ];

  const maxWeight = 32;

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" /> Flat DB Press Strength Progression
          </h3>
          <p className="text-xs text-slate-400">Working weight & total volume progression over 6 weeks</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-800/60">
          <Calendar className="w-3.5 h-3.5" /> 6 Week Trend
        </div>
      </div>

      {/* Interactive Bar/Line Graph */}
      <div className="h-56 flex items-end justify-between gap-3 pt-6 px-2">
        {points.map((p, idx) => {
          const heightPercent = (p.weight / maxWeight) * 100;
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <div className="text-[11px] font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {p.weight}kg
              </div>
              <div
                style={{ height: `${heightPercent}%` }}
                className="w-full bg-gradient-to-t from-cyan-600 to-blue-500 rounded-t-xl group-hover:from-cyan-400 group-hover:to-blue-400 transition-all relative overflow-hidden shadow-lg shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                {p.week}
              </span>
            </div>
          );
        })}
      </div>

      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span>Initial Baseline: <strong className="text-white">24.0 kg</strong></span>
        <span className="text-emerald-400 font-bold">+25% Load Increase (+6.0 kg)</span>
      </div>
    </Card>
  );
};
