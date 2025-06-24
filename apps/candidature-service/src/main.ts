import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CandidatureModule } from './candidature.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CandidatureModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'candidature_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();
  console.log('✅ candidature-service is listening on RabbitMQ amqp://localhost:4005');
}

void bootstrap();
