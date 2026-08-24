import React from 'react';
import { WorkoutSet } from '../../types/workout';
import { Check, Trash2 } from 'lucide-react';

interface SetRowProps {
  set: WorkoutSet;
  onUpdate: (updatedSet: WorkoutSet) => void;
  onDelete: (id: string) => void;
}

export const SetRow: React.FC<SetRowProps> = ({ set, onUpdate, onDelete }) => {
  // Calculate 1RM using Epley Formula: Weight * (1 + Reps/30)
  const estimated1RM =
    set.weightKg > 0 && set.reps > 0
      ? Math.round(set.weightKg * (1 + set.reps / 30) * 10) / 10
      : 0;

  return (
    <tr
      className={`transition-colors ${
        set.isCompleted ? 'bg-emerald-950/20' : 'hover:bg-slate-900/50'
      }`}
    >
      {/* Set Number */}
      <td className="py-2.5 px-4 font-mono font-bold text-xs text-slate-400">
        #{set.setNumber}
      </td>

      {/* Weight Input */}
      <td className="py-2.5 px-4">
        <div className="flex items-center gap-1">
          <input
            type="number"
            step="0.5"
            min="0"
            value={set.weightKg || ''}
            onChange={(e) =>
              onUpdate({ ...set, weightKg: parseFloat(e.target.value) || 0 })
            }
            placeholder="0"
            className="w-20 bg-slate-950/80 border border-slate-800 focus:border-cyan-500/60 rounded-lg px-2.5 py-1.5 text-sm text-center font-bold text-white focus:outline-none"
          />
          <span className="text-xs text-slate-400 font-semibold">kg</span>
        </div>
      </td>

      {/* Reps Input */}
      <td className="py-2.5 px-4">
        <div className="flex items-center gap-1">
          <input
            type="number"
            min="0"
            value={set.reps || ''}
            onChange={(e) =>
              onUpdate({ ...set, reps: parseInt(e.target.value, 10) || 0 })
            }
            placeholder="0"
            className="w-20 bg-slate-950/80 border border-slate-800 focus:border-cyan-500/60 rounded-lg px-2.5 py-1.5 text-sm text-center font-bold text-white focus:outline-none"
          />
          <span className="text-xs text-slate-400 font-semibold">reps</span>
        </div>
      </td>

      {/* Estimated 1RM */}
      <td className="py-2.5 px-4 font-mono text-xs text-slate-300">
        {estimated1RM > 0 ? (
          <span className="text-cyan-400 font-semibold">{estimated1RM} kg</span>
        ) : (
          <span className="text-slate-600">—</span>
        )}
      </td>

      {/* Completed Checkbox Button */}
      <td className="py-2.5 px-4 text-center">
        <button
          type="button"
          onClick={() => onUpdate({ ...set, isCompleted: !set.isCompleted })}
          className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all cursor-pointer ${
            set.isCompleted
              ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 border border-slate-700 text-slate-500 hover:border-slate-500'
          }`}
        >
          <Check className="w-4 h-4" />
        </button>
      </td>

      {/* Delete Action */}
      <td className="py-2.5 px-4 text-right">
        <button
          type="button"
          onClick={() => onDelete(set.id)}
          className="text-slate-500 hover:text-rose-400 transition-colors p-1"
          title="Delete Set"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};
