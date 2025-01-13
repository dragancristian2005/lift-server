import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExercisesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllExercises(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const take = limit;

    return this.prismaService.exercise.findMany({
      skip,
      take,
    });
  }

  async getOneExercise(exerciseId: string) {
    return this.prismaService.exercise.findUnique({
      where: { id: exerciseId },
    });
  }
}
