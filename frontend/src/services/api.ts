import { WorkoutRecord } from '../types/workout';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string) || 'http://localhost:8000/api';

export interface StitchStatusResponse {
  status: string;
  serverUrl: string;
  hasApiKey: boolean;
  header: string;
}

export const MOCK_WORKOUT_DATA: WorkoutRecord[] = [
  {
    bodyweight_kg: 63.6,
    exercise: 'Flat Dumbbell Press',
    weight_kg: 30.0,
    notes: 'Approximate current working weight; around 7 reps mentioned',
  },
  {
    bodyweight_kg: 63.6,
    exercise: 'Incline Dumbbell Press',
    weight_kg: 26.0,
    notes: '3 sets of 8 reps, strong upper chest drive',
  },
  {
    bodyweight_kg: 63.5,
    exercise: 'Standing Dumbbell Overhead Press',
    weight_kg: 22.5,
    notes: 'Strict form overhead press, 4 sets of 8',
  },
  {
    bodyweight_kg: 63.5,
    exercise: 'Incline Dumbbell Row',
    weight_kg: 32.5,
    notes: 'Heavy pull focus, 3 sets of 10 reps',
  },
  {
    bodyweight_kg: 63.4,
    exercise: 'Weighted Pull-ups',
    weight_kg: 15.0,
    notes: 'Bodyweight + 15kg plate, clean chin over bar',
  },
  {
    bodyweight_kg: 63.4,
    exercise: 'Dumbbell Romanian Deadlift',
    weight_kg: 35.0,
    notes: 'Posterior chain focus, controlled hinge',
  },
  {
    bodyweight_kg: 63.3,
    exercise: 'Bulgarian Split Squats',
    weight_kg: 24.0,
    notes: '24kg per hand, 3 sets of 10 per leg',
  },
  {
    bodyweight_kg: 63.6,
    exercise: 'Flat Dumbbell Press',
    weight_kg: 30.0,
    notes: 'Repeat set with 30kg DBs, 8 reps hitting failure',
  },
  {
    bodyweight_kg: 63.2,
    exercise: 'Dumbbell Lateral Raises',
    weight_kg: 12.5,
    notes: 'Strict side delt isolation, 4 sets of 12',
  },
  {
    bodyweight_kg: 63.6,
    exercise: 'Dumbbell Triceps Extensions',
    weight_kg: 20.0,
    notes: 'Controlled overhead stretch, 3 sets of 12',
  },
];

export async function fetchWorkouts(): Promise<{ data: WorkoutRecord[] }> {
  try {
    const response = await fetch(`${API_BASE_URL}/workouts`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.warn('Backend API connection unavailable. Using mock dataset fallback:', error);
    return { data: MOCK_WORKOUT_DATA };
  }
}

export async function fetchHealth(): Promise<{ status: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error('Health check failed');
    return await response.json();
  } catch {
    return { status: 'offline' };
  }
}

export async function fetchStitchStatus(): Promise<StitchStatusResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/stitch/status`);
    if (!response.ok) throw new Error('Stitch status request failed');
    return await response.json();
  } catch {
    return {
      status: 'offline',
      serverUrl: 'https://stitch.googleapis.com/mcp',
      hasApiKey: false,
      header: 'X-Goog-Api-Key',
    };
  }
}
