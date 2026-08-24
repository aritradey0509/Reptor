import { ExerciseDef } from '../types/workout';

export const EXERCISE_DATABASE: ExerciseDef[] = [
  {
    id: 'flat-db-press',
    name: 'Flat Dumbbell Press',
    category: 'Push',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Arms'],
    equipment: 'Dumbbell',
    description: 'Primary compound movement targeting lower and mid chest with greater range of motion than barbell press.',
    tips: [
      'Keep shoulder blades retracted and depressed into the bench.',
      'Slight arch in the lower back with feet firmly planted.',
      'Lower dumbbells under control until chest stretch is felt at bottom.'
    ]
  },
  {
    id: 'incline-db-press',
    name: 'Incline Dumbbell Press',
    category: 'Push',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Arms'],
    equipment: 'Dumbbell',
    description: 'Upper chest focused pressing variation set at a 30-45 degree incline.',
    tips: [
      'Set bench to roughly 30 degrees to minimize anterior delt dominance.',
      'Press up and slightly inward toward the top of the rep.'
    ]
  },
  {
    id: 'db-overhead-press',
    name: 'Seated Dumbbell Shoulder Press',
    category: 'Push',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Arms', 'Chest'],
    equipment: 'Dumbbell',
    description: 'Vertical pressing compound exercise targeting the anterior and lateral deltoids.',
    tips: [
      'Do not flare elbows completely to 90 degrees; tuck slightly in the scapular plane.',
      'Press vertically overhead without hyper-extending the spine.'
    ]
  },
  {
    id: 'incline-db-row',
    name: 'Incline Dumbbell Row',
    category: 'Pull',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Arms'],
    equipment: 'Dumbbell',
    description: 'Chest-supported upper back and lats builder eliminating momentum and lower back fatigue.',
    tips: [
      'Lie face down on an incline bench set to 45 degrees.',
      'Pull elbows toward hips and squeeze shoulder blades together at the peak.'
    ]
  },
  {
    id: 'weighted-pullups',
    name: 'Weighted Pull-Ups',
    category: 'Pull',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Arms', 'Core'],
    equipment: 'Bodyweight',
    description: 'Gold standard vertical pull compound exercise for lat width and upper body pulling strength.',
    tips: [
      'Start from a full dead hang at the bottom.',
      'Drive elbows down and back to pull chin over the bar.'
    ]
  },
  {
    id: 'db-romanian-deadlift',
    name: 'Dumbbell Romanian Deadlift (RDL)',
    category: 'Legs',
    primaryMuscle: 'Legs',
    secondaryMuscles: ['Back', 'Core'],
    equipment: 'Dumbbell',
    description: 'Hip hinge movement targeting hamstrings and gluteus maximus.',
    tips: [
      'Push hips back while maintaining a neutral spine.',
      'Keep dumbbells close to shin line throughout the movement.'
    ]
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    category: 'Legs',
    primaryMuscle: 'Legs',
    secondaryMuscles: ['Core'],
    equipment: 'Dumbbell',
    description: 'Unilateral quad and glute builder with rear foot elevated on a bench.',
    tips: [
      'Place rear foot on bench and lean slightly forward for glute/quad tension.',
      'Descend until front thigh is parallel to the ground.'
    ]
  },
  {
    id: 'db-lateral-raise',
    name: 'Dumbbell Lateral Raise',
    category: 'Push',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: [],
    equipment: 'Dumbbell',
    description: 'Isolation exercise targeting side (lateral) deltoids for shoulder width.',
    tips: [
      'Lead with elbows and keep hands slightly lower than elbows at the top.',
      'Avoid swinging or using leg drive.'
    ]
  },
  {
    id: 'triceps-overhead-ext',
    name: 'Overhead Dumbbell Triceps Extension',
    category: 'Push',
    primaryMuscle: 'Arms',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Dumbbell',
    description: 'Isolation exercise targeting long head of the triceps via overhead stretch.',
    tips: [
      'Keep elbows relatively stationary pointing upward.',
      'Lower dumbbell behind head for full triceps stretch.'
    ]
  },
  {
    id: 'biceps-incline-curl',
    name: 'Incline Dumbbell Biceps Curl',
    category: 'Pull',
    primaryMuscle: 'Arms',
    secondaryMuscles: [],
    equipment: 'Dumbbell',
    description: 'Isolation biceps curl performed on incline bench for maximum long head stretch.',
    tips: [
      'Keep arms hanging perpendicular to the floor.',
      'Supinate wrists at the top of curl.'
    ]
  }
];
