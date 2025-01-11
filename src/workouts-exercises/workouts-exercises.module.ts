import { Module } from '@nestjs/common';
import { WorkoutsExercisesService } from './workouts-exercises.service';
import { WorkoutsExercisesController } from './workouts-exercises.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WorkoutsExercisesController],
  providers: [WorkoutsExercisesService],
  exports: [WorkoutsExercisesService],
})
export class WorkoutsExercisesModule {}
