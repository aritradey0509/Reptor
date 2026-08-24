import React from 'react';
import { Card } from '../common/Card';
import { Trophy, Dumbbell, Award, Flame } from 'lucide-react';

export const PRWall: React.FC = () => {
  const prs = [
    { exercise: 'Flat Dumbbell Press', weight: 30.0, reps: 7, est1RM: 37.0, date: 'Recent' },
    { exercise: 'Incline Dumbbell Row', weight: 32.5, reps: 10, est1RM: 43.3, date: '1 wk ago' },
    { exercise: 'Dumbbell Romanian Deadlift', weight: 35.0, reps: 10, est1RM: 46.6, date: '2 wks ago' },
    { exercise: 'Weighted Pull-ups', weight: 15.0, reps: 6, est1RM: 18.0, date: 'Recent' },
    { exercise: 'Standing DB Overhead Press', weight: 22.5, reps: 8, est1RM: 28.5, date: '3 wks ago' },
    { exercise: 'Bulgarian Split Squats', weight: 24.0, reps: 10, est1RM: 32.0, date: 'Recent' },
  ];

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" /> Personal Records (PR) Wall
        </h3>
        <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-800/60">
          6 Active PRs
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {prs.map((pr, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                <Award className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-mono text-slate-400">{pr.date}</span>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white truncate">{pr.exercise}</h4>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-xl font-extrabold text-cyan-400">{pr.weight} kg</span>
                <span className="text-xs text-slate-400">× {pr.reps} reps</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Est. 1RM:</span>
              <span className="font-bold text-amber-400 font-mono">{pr.est1RM} kg</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
