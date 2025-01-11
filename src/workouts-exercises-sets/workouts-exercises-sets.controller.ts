import { Controller, Get } from '@nestjs/common';
import { WorkoutsExercisesSetsService } from './workouts-exercises-sets.service';

@Controller('workouts-exercises-sets')
export class WorkoutsExercisesSetsController {
  constructor(
    private readonly workoutsExercisesSetsService: WorkoutsExercisesSetsService,
  ) {}

  @Get()
  getAllWorkoutsExercisesSets() {
    return this.workoutsExercisesSetsService.getAllWorkoutsExercisesSets();
  }
}
