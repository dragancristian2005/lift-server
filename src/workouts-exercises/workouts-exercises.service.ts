import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkoutsExercisesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWorkoutsExercises() {
    return this.prismaService.workoutExercise.findMany();
  }
}
