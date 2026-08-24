export type MuscleGroup = 'Chest' | 'Back' | 'Legs' | 'Shoulders' | 'Arms' | 'Core';

export type EquipmentType = 'Dumbbell' | 'Barbell' | 'Cable' | 'Machine' | 'Bodyweight';

export type SplitType = 'Push' | 'Pull' | 'Legs' | 'Upper' | 'Lower' | 'Full Body';

export interface ExerciseDef {
  id: string;
  name: string;
  category: SplitType;
  primaryMuscle: MuscleGroup;
  secondaryMuscles: MuscleGroup[];
  equipment: EquipmentType;
  description: string;
  tips: string[];
  imagePlaceholder?: string;
}

export interface WorkoutSet {
  id: string;
  setNumber: number;
  weightKg: number;
  reps: number;
  rpe?: number;
  isCompleted: boolean;
  isPR?: boolean;
}

export interface ExerciseLog {
  id: string;
  exerciseId: string;
  exerciseName: string;
  category: SplitType;
  sets: WorkoutSet[];
  notes?: string;
}

export interface WorkoutSession {
  id: string;
  title: string;
  date: string; // ISO string
  split: SplitType;
  bodyweightKg: number;
  durationMinutes: number;
  exercises: ExerciseLog[];
  notes?: string;
}

export interface WorkoutRecord {
  bodyweight_kg: number;
  exercise: string;
  weight_kg: number;
  notes: string;
}

export interface PersonalRecord {
  exerciseId: string;
  exerciseName: string;
  weightKg: number;
  reps: number;
  estimated1RM: number;
  achievedDate: string;
}
