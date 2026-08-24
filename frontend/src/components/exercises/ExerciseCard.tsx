import React from 'react';
import { ExerciseDef } from '../../types/workout';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Dumbbell, Info } from 'lucide-react';

interface ExerciseCardProps {
  exercise: ExerciseDef;
  onSelect: (exercise: ExerciseDef) => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onSelect }) => {
  return (
    <Card hoverable onClick={() => onSelect(exercise)} className="space-y-3 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant={exercise.category === 'Push' ? 'cyan' : exercise.category === 'Pull' ? 'emerald' : 'violet'}>
            {exercise.category}
          </Badge>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            {exercise.equipment}
          </span>
        </div>

        <h4 className="text-base font-bold text-white flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
          <Dumbbell className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{exercise.name}</span>
        </h4>

        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {exercise.description}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold text-slate-300">
          Target: <span className="text-cyan-400">{exercise.primaryMuscle}</span>
        </span>
        <span className="flex items-center gap-1 text-cyan-400 font-semibold group-hover:underline">
          Details <Info className="w-3.5 h-3.5" />
        </span>
      </div>
    </Card>
  );
};
