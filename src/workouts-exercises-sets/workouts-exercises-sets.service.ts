import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkoutsExercisesSetsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWorkoutsExercisesSets() {
    return this.prismaService.workoutExerciseSet.findMany();
  }
}
