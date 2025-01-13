import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(@Query('page') page: number, @Query('limit') limit: number) {
    return this.usersService.getAllUsers(Number(page), Number(limit));
  }

  @Get(':id')
  getOneUser(@Param('id') userId: string) {
    return this.usersService.getOneUser(userId);
  }
}
