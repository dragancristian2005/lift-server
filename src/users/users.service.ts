import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(userWhere: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUnique({
      where: userWhere,
      include: { avatar: { select: { filePath: true } } },
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

  async updateUserInfo(
    userId: string,
    updateUserInfoDto: Prisma.UserUpdateInput,
  ) {
    return this.prismaService.user.update({
      where: { id: userId },
      data: updateUserInfoDto,
    });
  }
}
