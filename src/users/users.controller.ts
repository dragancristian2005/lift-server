import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserInfoDto } from './dto/update-user-info';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(@Query('page') page: number, @Query('limit') limit: number) {
    return this.usersService.getAllUsers(Number(page), Number(limit));
  }

  @Post('user-info')
  updateUserInfo(@Request() req, @Body() updateUserInfoDto: UpdateUserInfoDto) {
    return this.usersService.updateUserInfo(req.user.sub, updateUserInfoDto);
  }

  @Get(':id')
  getOneUser(@Param('id') userId: string) {
    return this.usersService.getOneUser(userId);
  }
}
