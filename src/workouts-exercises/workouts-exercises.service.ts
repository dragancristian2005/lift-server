import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkoutsExercisesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWorkoutsExercises(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const take = limit;

    return this.prismaService.workoutExercise.findMany({
      skip,
      take,
    });
  }

  async getOneWorkoutsExercises(workoutsExercisesId: string) {
    return this.prismaService.workoutExercise.findUnique({
      where: { id: workoutsExercisesId },
    });
  }
}
