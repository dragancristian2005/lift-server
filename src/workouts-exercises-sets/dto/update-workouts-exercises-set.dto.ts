import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutsExercisesSetDto } from './create-workouts-exercises-set.dto';

export class UpdateWorkoutsExercisesSetDto extends PartialType(CreateWorkoutsExercisesSetDto) {}
