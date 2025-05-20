import 'reflect-metadata';                     // si besoin
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HelloModule } from './hello.module'; 

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HelloModule,
    { transport: Transport.TCP, options: { host: '127.0.0.1', port: 4001 } },
  );
  await app.listen();
  console.log('🔔 hello-service listening on TCP 4001');
}
bootstrap();
