import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CandidatureProxyService } from './candidature-proxy.service';
import { CandidatureController } from './candidature.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CANDIDATURE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'candidature_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [CandidatureController],
  providers: [CandidatureProxyService],
  exports: [CandidatureProxyService],
})
export class CandidatureModule {}
