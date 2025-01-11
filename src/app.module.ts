import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MusclesModule } from './muscles/muscles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';
import { ExercisesMusclesModule } from './exercises_muscles/exercises_muscles.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { WorkoutsExercisesModule } from './workouts-exercises/workouts-exercises.module';
import { WorkoutsExercisesSetsModule } from './workouts-exercises-sets/workouts-exercises-sets.module';

@Module({
  imports: [MusclesModule, AuthModule, UsersModule, ExercisesModule, ExercisesMusclesModule, WorkoutsModule, WorkoutsExercisesModule, WorkoutsExercisesSetsModule],
  controllers: [AppController],
})
export class AppModule {}
