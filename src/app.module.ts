import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MusclesModule } from './muscles/muscles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MusclesModule, AuthModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
