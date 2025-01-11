import { Controller, Get } from '@nestjs/common';
import { MusclesService } from './muscles/muscles.service';
import { Public } from './decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly musclesService: MusclesService) {}

  @Public()
  @Get('/muscles')
  getMuscles() {
    return this.musclesService.getMuscles();
  }
}
