import React, { useState, useMemo } from 'react';
import { ExerciseDef } from '../types/workout';
import { EXERCISE_DATABASE } from '../services/exerciseData';
import { ExerciseFilter } from '../components/exercises/ExerciseFilter';
import { ExerciseCard } from '../components/exercises/ExerciseCard';
import { ExerciseModal } from '../components/exercises/ExerciseModal';
import { BookOpen } from 'lucide-react';

export default function ExercisesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSplit, setSelectedSplit] = useState('All');
  const [selectedMuscle, setSelectedMuscle] = useState('All');
  const [activeExercise, setActiveExercise] = useState<ExerciseDef | null>(null);

  const filteredExercises = useMemo(() => {
    return EXERCISE_DATABASE.filter((ex) => {
      const matchesSearch =
        ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSplit = selectedSplit === 'All' || ex.category === selectedSplit;
      const matchesMuscle = selectedMuscle === 'All' || ex.primaryMuscle === selectedMuscle;

      return matchesSearch && matchesSplit && matchesMuscle;
    });
  }, [searchTerm, selectedSplit, selectedMuscle]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-cyan-400" /> Curated Exercise Library
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Browse PPL compound movements, execution cues, and muscle target specifications
          </p>
        </div>
        <span className="text-xs font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-800/60 self-start sm:self-auto">
          {filteredExercises.length} Exercises Loaded
        </span>
      </div>

      {/* Filter Component */}
      <ExerciseFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedSplit={selectedSplit}
        onSplitChange={setSelectedSplit}
        selectedMuscle={selectedMuscle}
        onMuscleChange={setSelectedMuscle}
      />

      {/* Grid Display */}
      {filteredExercises.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl text-center text-slate-500 space-y-2">
          <p className="text-base font-semibold">No exercises found matching filters.</p>
          <p className="text-xs text-slate-600">Try adjusting your search query or muscle filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              onSelect={(ex) => setActiveExercise(ex)}
            />
          ))}
        </div>
      )}

      {/* Detail Modal */}
      <ExerciseModal
        exercise={activeExercise}
        onClose={() => setActiveExercise(null)}
      />
    </div>
  );
}
