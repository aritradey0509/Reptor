export interface RegisterData {
    name: string;
    email: string;
    password: string;

    weight: number;
    height: number;
    age: number;

    experience:
        | "Beginner"
        | "Intermediate"
        | "Advanced";

    goal:
        | "Hypertrophy"
        | "Strength"
        | "Fat Loss";

    split:
        | "PPL"
        | "Upper Lower"
        | "Arnold"
        | "Full Body"
        | "Custom";

    trainingDays: number;
}