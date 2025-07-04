import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppService } from './app.service';
import { MissionController } from './mission/mission.controller';
import { MissionProxyService } from './mission/mission-proxy.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { MessagesModule } from './messages/messages.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CandidatureModule } from './candidature/candidature.module';

@Module({
  imports: [
    ClientsModule.register([
      /*
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
    UtilisateurModule,
    AuthModule,
    CandidatureModule,
    AuthModule,
    MessagesModule,
    ConfigModule.forRoot({}),
  ],
  controllers: [AppController, MissionController],
  providers: [AppService, MissionProxyService],
})
export class AppModule {}
