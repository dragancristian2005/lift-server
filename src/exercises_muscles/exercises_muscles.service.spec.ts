import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesMusclesService } from './exercises_muscles.service';

describe('ExercisesMusclesService', () => {
  let service: ExercisesMusclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercisesMusclesService],
    }).compile();

    service = module.get<ExercisesMusclesService>(ExercisesMusclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
