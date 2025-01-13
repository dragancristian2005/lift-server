import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExercisesMusclesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllExercisesMuscles() {
    return this.prismaService.exerciseMuscle.findMany();
  }
}
