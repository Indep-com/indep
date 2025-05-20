// apps/hello-service/src/hello.module.ts
import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';

@Module({
  controllers: [HelloController],
})
export class HelloModule {}
