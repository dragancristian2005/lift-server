import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MusclesService {
  constructor(private prismaService: PrismaService) {}

  async getAllMuscles(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const take = limit;

    return this.prismaService.muscle.findMany({
      skip,
      take,
    });
  }

  async getOneMuscle(muscleId: string) {
    return this.prismaService.muscle.findUnique({ where: { id: muscleId } });
  }
}
