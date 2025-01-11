import { Module } from '@nestjs/common';
import { MusclesService } from './muscles.service';
import { PrismaModule } from '../prisma/prisma.module';
import { MusclesController } from './muscles.controller';

@Module({
  imports: [PrismaModule],
  controllers: [MusclesController],
  providers: [MusclesService],
  exports: [MusclesService],
})
export class MusclesModule {}
