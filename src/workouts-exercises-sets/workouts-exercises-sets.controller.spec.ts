import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutsExercisesSetsController } from './workouts-exercises-sets.controller';
import { WorkoutsExercisesSetsService } from './workouts-exercises-sets.service';

describe('WorkoutsExercisesSetsController', () => {
  let controller: WorkoutsExercisesSetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutsExercisesSetsController],
      providers: [WorkoutsExercisesSetsService],
    }).compile();

    controller = module.get<WorkoutsExercisesSetsController>(WorkoutsExercisesSetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
