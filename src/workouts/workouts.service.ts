import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns';
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
      orderBy: {
        date: 'desc',
      },
    });
  }

  async createNewWorkout(
    workoutExercises: WorkoutTypes,
    workoutName: string,
    startTime: Date,
    endTime: Date,
    userId: string,
  ) {
    return this.prismaService.workout.create({
      data: {
        id: createId(),
        name: workoutName,
        date: new Date(startTime),
        finished: new Date(endTime),
        user: {
          connect: {
            id: userId,
          },
        },
        workoutExercise: {
          create: workoutExercises
            .filter((exercise) => exercise.sets.length !== 0)
            .map((exercise) => ({
              id: createId(),
              exercise: {
                connect: {
                  id: exercise.id,
                },
              },
              workoutExerciseSet: {
                create: exercise.sets
                  .filter((set) => set.weight !== 0 && set.reps !== 0)
                  .map((set) => ({
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

  async getLatestWorkout(userId: string) {
    return this.prismaService.workout.findFirst({
      where: {
        userId,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async getWeekStreak(userId: string) {
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
    const endDate = endOfWeek(new Date(), { weekStartsOn: 1 });

    const workouts = await this.prismaService.workout.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        date: true,
      },
    });

    const weekStreak: Record<string, boolean> = {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    };

    workouts.forEach((workout) => {
      const dayName = format(workout.date, 'EEE');
      const formattedDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);
      if (weekStreak[formattedDay] !== undefined) {
        weekStreak[formattedDay] = true;
      }
    });

    return weekStreak;
  }
}
