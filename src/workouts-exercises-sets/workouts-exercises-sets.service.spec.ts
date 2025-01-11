import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutsExercisesSetsService } from './workouts-exercises-sets.service';

describe('WorkoutsExercisesSetsService', () => {
  let service: WorkoutsExercisesSetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutsExercisesSetsService],
    }).compile();

    service = module.get<WorkoutsExercisesSetsService>(WorkoutsExercisesSetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
