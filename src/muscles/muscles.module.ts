import { Module } from '@nestjs/common';
import { MusclesService } from './muscles.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MusclesService],
  exports: [MusclesService],
})
export class MusclesModule {}
