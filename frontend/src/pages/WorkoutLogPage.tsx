import React from 'react';
import { WorkoutLogger } from '../components/workout/WorkoutLogger';
import { RestTimer } from '../components/common/RestTimer';

export default function WorkoutLogPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Logger */}
        <div className="lg:col-span-2 space-y-6">
          <WorkoutLogger />
        </div>

        {/* Sidebar Utilities: Rest Timer & Quick Tips */}
        <div className="space-y-6">
          <RestTimer />

          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              💡 Pro Tip for Flat DB Press
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Aim for a 2-3 second controlled eccentric (lowering) phase. Keep shoulder blades retracted firmly against the bench.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
