import { Controller, Get } from '@nestjs/common';
import { MusclesService } from './muscles/muscles.service';
import { Public } from './decorators/public.decorator';

@Controller()
export class AppController {}
