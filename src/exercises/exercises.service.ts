import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExercisesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllExercises() {
    return this.prismaService.exercise.findMany();
  }
}
