import { Controller, Get, Param, Query } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Get()
  getAllWorkouts(@Query('page') page: number, @Query('limit') limit: number) {
    return this.workoutsService.getAllWorkouts(Number(page), Number(limit));
  }

  @Get(':id')
  getOneWorkout(@Param('id') workoutId: string) {
    return this.workoutsService.getOneWorkout(workoutId);
  }

  @Get(':userId/weekly-progress')
  getWeeklyProgress(@Param('userId') userId: string) {
    return this.workoutsService.getWeeklyProgress(userId);
  }
}
