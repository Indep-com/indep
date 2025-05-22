import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { WorldModule } from './world.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WorldModule,
    { transport: Transport.TCP, options: { host: '0.0.0.0', port: 4002 } },
  );
  await app.listen();
  console.log('🔔 world-service microservice listening on TCP 4002');
}
bootstrap();