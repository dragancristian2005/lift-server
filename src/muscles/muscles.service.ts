import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MusclesService {
  constructor(private prismaService: PrismaService) {}

  async getAllMuscles() {
    return this.prismaService.muscle.findMany();
  }
}
