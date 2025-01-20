import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkoutsExercisesSetsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWorkoutsExercisesSets(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const take = limit;

    return this.prismaService.workoutExerciseSet.findMany({
      skip,
      take,
    });
  }

  async getOneWorkoutsExercisesSets(workoutsExercisesSetsId: string) {
    return this.prismaService.workoutExerciseSet.findUnique({
      where: { id: workoutsExercisesSetsId },
    });
  }

  async getWorkoutsExercisesSetsIds(workoutsExercisesSetsId: string) {
    return this.prismaService.workoutExerciseSet.findMany({
      where: { workoutExerciseId: workoutsExercisesSetsId },
    });
  }
}
