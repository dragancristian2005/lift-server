import { Controller, Get, Param, Query, Request } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Get()
  getAllWorkouts(@Query('page') page: number, @Query('limit') limit: number) {
    return this.workoutsService.getAllWorkouts(Number(page), Number(limit));
  }

  @Get('weekly-progress')
  getWeeklyProgress(@Request() req) {
    return this.workoutsService.getWeeklyProgress(req.user.sub);
  }

  @Get('user-workouts')
  getUserWorkouts(
    @Request() req,
    @Query('limit') limit: number,
    @Query('page') page: number,
  ) {
    return this.workoutsService.getUserWorkouts(
      req.user.sub,
      Number(limit),
      Number(page),
    );
  }

  @Get(':id')
  getOneWorkout(@Param('id') workoutId: string) {
    return this.workoutsService.getOneWorkout(workoutId);
  }
}
