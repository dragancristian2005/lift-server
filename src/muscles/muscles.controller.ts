import { Controller, Get } from '@nestjs/common';
import { MusclesService } from './muscles.service';

@Controller('muscles')
export class MusclesController {
  constructor(private readonly musclesService: MusclesService) {}

  @Get()
  getAllMuscles() {
    return this.musclesService.getAllMuscles();
  }
}
