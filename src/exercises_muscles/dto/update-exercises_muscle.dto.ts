import { PartialType } from '@nestjs/mapped-types';
import { CreateExercisesMuscleDto } from './create-exercises_muscle.dto';

export class UpdateExercisesMuscleDto extends PartialType(CreateExercisesMuscleDto) {}
