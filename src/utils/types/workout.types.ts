export type WorkoutTypes = {
  id: string;
  name: string;
  sets: {
    id: string;
    weight: number;
    reps: number;
  }[];
}[];
