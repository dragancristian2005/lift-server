import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { endOfWeek, startOfWeek } from 'date-fns';
import { convertKeysToCamelCase } from '../utils/camelCase.util';

@Injectable()
export class WorkoutsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWorkouts(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const take = limit;

    return this.prismaService.workout.findMany({
      skip,
      take,
    });
  }

  async getOneWorkout(workoutId: string) {
    return this.prismaService.workout.findUnique({ where: { id: workoutId } });
  }

  async getWeeklyProgress(userId: string) {
    const startWeek = startOfWeek(new Date());
    const endWeek = endOfWeek(new Date());

    const workouts = await this.prismaService.workout.findMany({
      where: {
        userId: userId,
        date: {
          gte: startWeek,
          lte: endWeek,
        },
      },
    });

    let muscle_heatmap = {};

    for (const workout of workouts) {
      let workoutsExercisesIds = [];

      const workoutsExercises =
        await this.prismaService.workoutExercise.findMany({
          where: { workoutId: workout.id },
        });
      workoutsExercises.forEach((exercise) => {
        workoutsExercisesIds.push(exercise.exerciseId);
      });
      const exercises = [];
      for (const workoutsExerciseId of workoutsExercisesIds) {
        const exercise = await this.prismaService.exercise.findMany({
          where: { id: workoutsExerciseId },
        });
        exercise.forEach((ex) => exercises.push(ex));
      }

      let musclesIds = [];
      for (const exercise of exercises) {
        const muscleIdList = await this.prismaService.exerciseMuscle.findMany({
          where: { exerciseId: exercise.id },
        });
        muscleIdList.forEach((muscleId) => {
          if (!musclesIds.some((mId) => mId.muscleId === muscleId.muscleId))
            musclesIds.push(muscleId);
        });
      }

      let muscles = [];
      for (const muscleId of musclesIds) {
        const muscleList = await this.prismaService.muscle.findMany({
          where: { id: muscleId.muscleId },
        });
        muscleList.forEach((muscle) => muscles.push(muscle));
      }
      muscles.forEach((muscle) => {
        if (muscle_heatmap[muscle.name]) {
          muscle_heatmap[muscle.name]++;
        } else {
          muscle_heatmap[muscle.name] = 1;
        }
      });
    }
    return convertKeysToCamelCase(muscle_heatmap);
  }
}
