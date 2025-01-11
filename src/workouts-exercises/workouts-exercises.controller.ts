import { Controller, Get } from '@nestjs/common';
import { WorkoutsExercisesService } from './workouts-exercises.service';

@Controller('workouts-exercises')
export class WorkoutsExercisesController {
  constructor(
    private readonly workoutsExercisesService: WorkoutsExercisesService,
  ) {}

  @Get()
  getAllWorkoutsExercises() {
    return this.workoutsExercisesService.getAllWorkoutsExercises();
  }
}
