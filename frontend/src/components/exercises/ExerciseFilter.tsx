import React from 'react';
import { MuscleGroup, SplitType } from '../../types/workout';
import { Search } from 'lucide-react';

interface ExerciseFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedSplit: string;
  onSplitChange: (split: string) => void;
  selectedMuscle: string;
  onMuscleChange: (muscle: string) => void;
}

export const ExerciseFilter: React.FC<ExerciseFilterProps> = ({
  searchTerm,
  onSearchChange,
  selectedSplit,
  onSplitChange,
  selectedMuscle,
  onMuscleChange,
}) => {
  const splits = ['All', 'Push', 'Pull', 'Legs'];
  const muscles: (MuscleGroup | 'All')[] = ['All', 'Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'];

  return (
    <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-4">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search exercises by name or cue..."
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
          />
        </div>

        {/* Category Split Pills */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 w-full sm:w-auto overflow-x-auto">
          {splits.map((s) => (
            <button
              key={s}
              onClick={() => onSplitChange(s)}
              className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedSplit === s
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Muscle Group Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
          Muscle:
        </span>
        {muscles.map((m) => (
          <button
            key={m}
            onClick={() => onMuscleChange(m)}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer ${
              selectedMuscle === m
                ? 'bg-slate-800 text-cyan-400 border-cyan-500/40'
                : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
};
