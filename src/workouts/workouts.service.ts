import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
}
