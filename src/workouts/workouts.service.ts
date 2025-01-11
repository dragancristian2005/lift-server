import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkoutsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWorkouts() {
    return this.prismaService.workout.findMany();
  }
}
