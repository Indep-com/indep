import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PgService } from './pg.service';
import { MissionController } from './mission.controller';
import { MissionService } from './mission.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [MissionController],
  providers: [MissionService, PgService],
})
export class MissionModule {}
