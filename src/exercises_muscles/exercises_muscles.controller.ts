import { Controller, Get } from '@nestjs/common';
import { ExercisesMusclesService } from './exercises_muscles.service';

@Controller('exercises-muscles')
export class ExercisesMusclesController {
  constructor(
    private readonly exercisesMusclesService: ExercisesMusclesService,
  ) {}

  @Get()
  getAllExercisesMuscles() {
    return this.exercisesMusclesService.getAllExercisesMuscles();
  }
}
