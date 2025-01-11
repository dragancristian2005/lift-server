import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesMusclesController } from './exercises_muscles.controller';
import { ExercisesMusclesService } from './exercises_muscles.service';

describe('ExercisesMusclesController', () => {
  let controller: ExercisesMusclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesMusclesController],
      providers: [ExercisesMusclesService],
    }).compile();

    controller = module.get<ExercisesMusclesController>(ExercisesMusclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
