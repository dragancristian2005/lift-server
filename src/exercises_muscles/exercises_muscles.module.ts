import { Module } from '@nestjs/common';
import { ExercisesMusclesService } from './exercises_muscles.service';
import { ExercisesMusclesController } from './exercises_muscles.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ExercisesMusclesController],
  providers: [ExercisesMusclesService],
  exports: [ExercisesMusclesService],
})
export class ExercisesMusclesModule {}
