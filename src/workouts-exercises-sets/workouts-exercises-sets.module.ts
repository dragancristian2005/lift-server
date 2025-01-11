import { Module } from '@nestjs/common';
import { WorkoutsExercisesSetsService } from './workouts-exercises-sets.service';
import { WorkoutsExercisesSetsController } from './workouts-exercises-sets.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WorkoutsExercisesSetsController],
  providers: [WorkoutsExercisesSetsService],
  exports: [WorkoutsExercisesSetsService],
})
export class WorkoutsExercisesSetsModule {}
