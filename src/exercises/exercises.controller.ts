import { Controller, Get, Param, Query } from '@nestjs/common';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  getAllExercises(@Query('page') page: number, @Query('limit') limit: number) {
    return this.exercisesService.getAllExercises(Number(page), Number(limit));
  }

  @Get(':id')
  getOneExercise(@Param('id') id: string) {
    return this.exercisesService.getOneExercise(id);
  }
}
