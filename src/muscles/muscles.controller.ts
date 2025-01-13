import { Controller, Get, Param, Query } from '@nestjs/common';
import { MusclesService } from './muscles.service';

@Controller('muscles')
export class MusclesController {
  constructor(private readonly musclesService: MusclesService) {}

  @Get()
  getAllMuscles(@Query('page') page: number, @Query('limit') limit: number) {
    return this.musclesService.getAllMuscles(Number(page), Number(limit));
  }

  @Get(':id')
  getOneMuscle(@Param('id') muscleId: string) {
    return this.musclesService.getOneMuscle(muscleId);
  }
}
