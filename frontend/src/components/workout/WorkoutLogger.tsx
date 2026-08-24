import React, { useState } from 'react';
import { ExerciseLog, WorkoutSet, SplitType } from '../../types/workout';
import { EXERCISE_DATABASE } from '../../services/exerciseData';
import { SetRow } from './SetRow';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Plus, Save, Dumbbell, Sparkles, CheckCircle2 } from 'lucide-react';

export const WorkoutLogger: React.FC = () => {
  const [split, setSplit] = useState<SplitType>('Push');
  const [workoutTitle, setWorkoutTitle] = useState<string>('Push Day - Heavy Dumbbell Focus');
  const [exerciseLogs, setExerciseLogs] = useState<ExerciseLog[]>([
    {
      id: 'log-1',
      exerciseId: 'flat-db-press',
      exerciseName: 'Flat Dumbbell Press',
      category: 'Push',
      sets: [
        { id: 's1', setNumber: 1, weightKg: 30.0, reps: 8, isCompleted: true },
        { id: 's2', setNumber: 2, weightKg: 30.0, reps: 7, isCompleted: true },
        { id: 's3', setNumber: 3, weightKg: 28.0, reps: 8, isCompleted: false },
      ],
      notes: 'Approximate current working weight; felt strong on set 1.',
    },
    {
      id: 'log-2',
      exerciseId: 'incline-db-press',
      exerciseName: 'Incline Dumbbell Press',
      category: 'Push',
      sets: [
        { id: 's4', setNumber: 1, weightKg: 26.0, reps: 8, isCompleted: true },
        { id: 's5', setNumber: 2, weightKg: 26.0, reps: 8, isCompleted: false },
      ],
      notes: 'Upper chest focus at 30 degree incline.',
    },
  ]);

  const [selectedExerciseId, setSelectedExerciseId] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Add selected exercise to current workout session
  const handleAddExercise = () => {
    if (!selectedExerciseId) return;
    const target = EXERCISE_DATABASE.find((e) => e.id === selectedExerciseId);
    if (!target) return;

    const newLog: ExerciseLog = {
      id: `log-${Date.now()}`,
      exerciseId: target.id,
      exerciseName: target.name,
      category: target.category,
      sets: [
        { id: `set-${Date.now()}-1`, setNumber: 1, weightKg: 20, reps: 10, isCompleted: false },
      ],
      notes: '',
    };

    setExerciseLogs((prev) => [...prev, newLog]);
    setSelectedExerciseId('');
  };

  // Add set to specific exercise
  const handleAddSet = (logId: string) => {
    setExerciseLogs((prev) =>
      prev.map((log) => {
        if (log.id !== logId) return log;
        const lastSet = log.sets[log.sets.length - 1];
        const newSet: WorkoutSet = {
          id: `set-${Date.now()}`,
          setNumber: log.sets.length + 1,
          weightKg: lastSet ? lastSet.weightKg : 20,
          reps: lastSet ? lastSet.reps : 10,
          isCompleted: false,
        };
        return { ...log, sets: [...log.sets, newSet] };
      })
    );
  };

  // Update set
  const handleUpdateSet = (logId: string, updatedSet: WorkoutSet) => {
    setExerciseLogs((prev) =>
      prev.map((log) => {
        if (log.id !== logId) return log;
        return {
          ...log,
          sets: log.sets.map((s) => (s.id === updatedSet.id ? updatedSet : s)),
        };
      })
    );
  };

  // Delete set
  const handleDeleteSet = (logId: string, setId: string) => {
    setExerciseLogs((prev) =>
      prev.map((log) => {
        if (log.id !== logId) return log;
        const filtered = log.sets.filter((s) => s.id !== setId);
        // Re-number sets
        const renumbered = filtered.map((s, idx) => ({ ...s, setNumber: idx + 1 }));
        return { ...log, sets: renumbered };
      })
    );
  };

  // Save Workout Session
  const handleSaveWorkout = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Session Title & Split Selector */}
      <Card className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Workout Session Name
            </label>
            <input
              type="text"
              value={workoutTitle}
              onChange={(e) => setWorkoutTitle(e.target.value)}
              className="w-full text-xl font-bold bg-slate-950/60 border border-slate-800 focus:border-cyan-500 rounded-xl px-3 py-1.5 text-white focus:outline-none"
            />
          </div>

          {/* Split Buttons */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Training Split
            </label>
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {(['Push', 'Pull', 'Legs', 'Upper', 'Lower'] as SplitType[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSplit(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    split === cat
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Exercise Logs */}
      {exerciseLogs.map((log) => (
        <Card key={log.id} className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{log.exerciseName}</h3>
                <Badge variant={log.category === 'Push' ? 'cyan' : log.category === 'Pull' ? 'emerald' : 'violet'}>
                  {log.category}
                </Badge>
              </div>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleAddSet(log.id)}
              icon={<Plus className="w-3.5 h-3.5" />}
            >
              Add Set
            </Button>
          </div>

          {/* Sets Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                  <th className="py-2.5 px-4">Set</th>
                  <th className="py-2.5 px-4">Weight</th>
                  <th className="py-2.5 px-4">Reps</th>
                  <th className="py-2.5 px-4">Est. 1RM</th>
                  <th className="py-2.5 px-4 text-center">Status</th>
                  <th className="py-2.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {log.sets.map((set) => (
                  <SetRow
                    key={set.id}
                    set={set}
                    onUpdate={(updated) => handleUpdateSet(log.id, updated)}
                    onDelete={(setId) => handleDeleteSet(log.id, setId)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes Input */}
          <input
            type="text"
            value={log.notes || ''}
            onChange={(e) => {
              const val = e.target.value;
              setExerciseLogs((prev) =>
                prev.map((l) => (l.id === log.id ? { ...l, notes: val } : l))
              );
            }}
            placeholder="Add exercise notes (e.g. form feeling, RPE, tempo)..."
            className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 rounded-xl px-3 py-2 text-xs text-slate-300 placeholder-slate-500 focus:outline-none"
          />
        </Card>
      ))}

      {/* Add New Exercise Selector */}
      <Card className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 w-full">
          <select
            value={selectedExerciseId}
            onChange={(e) => setSelectedExerciseId(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
          >
            <option value="">Select Exercise to Add...</option>
            {EXERCISE_DATABASE.map((ex) => (
              <option key={ex.id} value={ex.id}>
                {ex.name} ({ex.category} • {ex.primaryMuscle})
              </option>
            ))}
          </select>
        </div>

        <Button
          variant="secondary"
          size="md"
          onClick={handleAddExercise}
          disabled={!selectedExerciseId}
          icon={<Plus className="w-4 h-4" />}
        >
          Add Exercise
        </Button>
      </Card>

      {/* Save Session CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        {isSaved ? (
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>Workout Session Logged Successfully!</span>
          </div>
        ) : (
          <span className="text-xs text-slate-400">
            {exerciseLogs.length} exercises • {exerciseLogs.reduce((acc, l) => acc + l.sets.length, 0)} total sets
          </span>
        )}

        <Button
          variant="primary"
          size="lg"
          onClick={handleSaveWorkout}
          icon={<Save className="w-5 h-5" />}
        >
          Save Workout Session
        </Button>
      </div>
    </div>
  );
};
