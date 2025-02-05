import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { endOfWeek, startOfWeek } from 'date-fns';
import { camelCase, uniq } from 'lodash';
import { WorkoutTypes } from '../utils/types/workout.types';
import { createId } from '@paralleldrive/cuid2';

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
    return this.prismaService.workout.findUnique({
      where: { id: workoutId },
      include: {
        workoutExercise: {
          select: {
            exercise: true,
            workoutExerciseSet: {
              select: { reps: true, weight: true },
            },
          },
        },
      },
    });
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
      include: {
        workoutExercise: {
          include: {
            exercise: {
              include: {
                exerciseMuscle: {
                  include: {
                    muscle: {
                      select: {
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return workouts
      .map((workout) => workout.workoutExercise)
      .flatMap((workoutExercise) =>
        uniq(
          workoutExercise
            .flatMap((we) => we.exercise.exerciseMuscle)
            .map((exerciseMuscle) => exerciseMuscle.muscle.name),
        ),
      )
      .reduce(
        (acc, cur) => ({
          ...acc,
          [camelCase(cur)]: Math.min(
            acc[camelCase(cur)] ? acc[camelCase(cur)] + 1 : 1,
            2,
          ),
        }),
        {},
      );
  }

  async getUserWorkouts(userId: string, limit: number, page: number) {
    const skip = (page - 1) * limit;
    const take = limit;

    return this.prismaService.workout.findMany({
      skip,
      take,
      where: { userId },
      include: {
        workoutExercise: {
          include: {
            exercise: {
              select: {
                name: true,
              },
            },
            workoutExerciseSet: {
              select: {
                reps: true,
                weight: true,
              },
            },
          },
        },
      },
    });
  }

  async createNewWorkout(
    workoutExercises: WorkoutTypes,
    workoutName: string,
    userId: string,
  ) {
    return this.prismaService.workout.create({
      data: {
        id: createId(),
        name: workoutName,
        date: new Date(),
        finished: new Date(),
        user: {
          connect: {
            id: userId,
          },
        },
        workoutExercise: {
          create: workoutExercises.map((exercise) => ({
            id: createId(),
            exercise: {
              connect: {
                id: exercise.id,
              },
            },
            workoutExerciseSet: {
              create: exercise.sets.map((set) => ({
                id: createId(),
                reps: set.reps,
                weight: set.weight,
              })),
            },
          })),
        },
      },
      include: {
        workoutExercise: {
          include: {
            workout: true,
            exercise: true,
          },
        },
      },
    });
  }
}
