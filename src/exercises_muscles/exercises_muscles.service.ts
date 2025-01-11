import { Injectable } from '@nestjs/common';
import { CreateExercisesMuscleDto } from './dto/create-exercises_muscle.dto';
import { UpdateExercisesMuscleDto } from './dto/update-exercises_muscle.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExercisesMusclesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllExercisesMuscles() {
    return this.prismaService.exerciseMuscle.findMany();
  }
}
