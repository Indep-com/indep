import { Module } from '@nestjs/common';
import { WorldService } from './world.service';

@Module({
  controllers: [WorldService],
})
export class WorldModule {}