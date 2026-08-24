import React from 'react';
import { ExerciseDef } from '../../types/workout';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { Dumbbell, Target, CheckCircle2, Lightbulb } from 'lucide-react';

interface ExerciseModalProps {
  exercise: ExerciseDef | null;
  onClose: () => void;
}

export const ExerciseModal: React.FC<ExerciseModalProps> = ({ exercise, onClose }) => {
  if (!exercise) return null;

  return (
    <Modal isOpen={!!exercise} onClose={onClose} title={exercise.name}>
      <div className="space-y-5">
        {/* Badges */}
        <div className="flex items-center gap-2">
          <Badge variant={exercise.category === 'Push' ? 'cyan' : exercise.category === 'Pull' ? 'emerald' : 'violet'}>
            {exercise.category}
          </Badge>
          <Badge variant="slate">{exercise.equipment}</Badge>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-cyan-400" /> Target Muscles
          </h4>
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <span className="font-bold text-white bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
              Primary: <span className="text-cyan-400">{exercise.primaryMuscle}</span>
            </span>
            {exercise.secondaryMuscles.length > 0 && (
              <span className="text-xs text-slate-400">
                Secondary: {exercise.secondaryMuscles.join(', ')}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1.5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
          <p className="text-xs text-slate-300 leading-relaxed">
            {exercise.description}
          </p>
        </div>

        {/* Form Cues & Pro Tips */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-400" /> Execution Cues & Form Checklist
          </h4>
          <ul className="space-y-2">
            {exercise.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};
