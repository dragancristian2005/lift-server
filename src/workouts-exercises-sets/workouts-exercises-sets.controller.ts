import { Controller, Get, Param, Query } from '@nestjs/common';
import { WorkoutsExercisesSetsService } from './workouts-exercises-sets.service';

@Controller('workouts-exercises-sets')
export class WorkoutsExercisesSetsController {
  constructor(
    private readonly workoutsExercisesSetsService: WorkoutsExercisesSetsService,
  ) {}

  @Get()
  getAllWorkoutsExercisesSets(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.workoutsExercisesSetsService.getAllWorkoutsExercisesSets(
      Number(page),
      Number(limit),
    );
  }

  @Get(':id')
  getOneWorkoutsExercisesSets(@Param('id') workoutsExercisesSets: string) {
    return this.workoutsExercisesSetsService.getOneWorkoutsExercisesSets(
      workoutsExercisesSets,
    );
  }
}
