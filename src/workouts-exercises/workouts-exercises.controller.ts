import { Controller, Get, Param, Query } from '@nestjs/common';
import { WorkoutsExercisesService } from './workouts-exercises.service';

@Controller('workouts-exercises')
export class WorkoutsExercisesController {
  constructor(
    private readonly workoutsExercisesService: WorkoutsExercisesService,
  ) {}

  @Get()
  getAllWorkoutsExercises(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.workoutsExercisesService.getAllWorkoutsExercises(
      Number(page),
      Number(limit),
    );
  }

  @Get('workout-id/:id')
  getWorkoutExercisesIdsByWorkoutId(@Param('id') workoutId: string) {
    return this.workoutsExercisesService.getWorkoutExercisesIdsByWorkoutId(
      workoutId,
    );
  }

  @Get('exercise-id/:id')
  getWorkoutExercisesIdsByExerciseId(@Param('id') exerciseId: string) {
    return this.workoutsExercisesService.getWorkoutExercisesIdsByExerciseId(
      exerciseId,
    );
  }

  @Get(':id')
  getOneWorkoutsExercises(@Param('id') workoutsExercisesId: string) {
    return this.workoutsExercisesService.getOneWorkoutsExercises(
      workoutsExercisesId,
    );
  }
}
