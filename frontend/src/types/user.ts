export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  currentBodyweightKg: number;
  targetBodyweightKg: number;
  heightCm: number;
  trainingSplit: 'Push/Pull/Legs' | 'Upper/Lower' | 'Full Body' | 'Bro Split';
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  streakDays: number;
  primaryGoal: 'Strength' | 'Hypertrophy' | 'Fat Loss' | 'General Fitness';
  joinedDate: string;
}

export interface OnboardingData {
  name: string;
  currentBodyweightKg: number;
  targetBodyweightKg: number;
  heightCm: number;
  trainingSplit: 'Push/Pull/Legs' | 'Upper/Lower' | 'Full Body' | 'Bro Split';
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  primaryGoal: 'Strength' | 'Hypertrophy' | 'Fat Loss' | 'General Fitness';
}