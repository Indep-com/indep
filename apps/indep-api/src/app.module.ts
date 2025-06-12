import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionController } from './mission/mission.controller';
import { MissionProxyService } from './mission/mission-proxy.service';

@Module({
  imports: [
    ClientsModule.register([/*
      {
        name: 'HELLO_SERVICE',
        transport: Transport.TCP,
        options: { host: 'hello-service', port: 4001 },
      },
      {
        name: 'WORLD_SERVICE',
        transport: Transport.TCP,
        options: { host: 'world-service', port: 4002 },
      },*/
    ]),
  ],
  controllers: [AppController, MissionController],
  providers: [AppService, MissionProxyService],
})
export class AppModule {}
