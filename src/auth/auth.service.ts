import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { FilesService } from '../files/files.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
    private filesService: FilesService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne({
      username,
      password: createHash('sha256').update(pass).digest('base64'),
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(
    email: string,
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const existingUser = await this.usersService.findOne({
      username,
      password: pass,
      email,
    });
    if (existingUser) {
      throw new BadRequestException('Account already exists!');
    }

    const user = await this.prismaService.user.create({
      data: {
        email,
        username,
        password: createHash('sha256').update(pass).digest('base64'),
        height: 0,
        weight: 0,
        bodyFat: 0,
        goalWeight: 0,
        goalBodyFat: 0,
        calorieIntake: 0,
      },
    });

    const payload = { sub: user.id, username: user.username };

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async getProfile(userId: string) {
    return this.usersService.findOne({ id: userId });
  }

  async updateProfilePicture(userId: string, file: Express.Multer.File) {
    const user = await this.usersService.findOne({ id: userId });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const fileRecord = await this.filesService.createFile(file, userId);
    await this.prismaService.user.update({
      where: { id: userId },
      data: { avatarId: fileRecord.id },
    });
    return fileRecord;
  }
}
