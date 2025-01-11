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
}
