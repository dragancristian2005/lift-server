import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(userWhere: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUnique({
      where: userWhere,
    });
  }

  async getAllUsers(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const take = limit;

    return this.prismaService.user.findMany({
      skip,
      take,
    });
  }

  async getOneUser(userId: string) {
    return this.prismaService.user.findUnique({ where: { id: userId } });
  }
}
