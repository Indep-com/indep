import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_SERVICE',
        transport: Transport.TCP,
        options: { host: 'hello-service', port: 4001 },
      },
      {
        name: 'WORLD_SERVICE',
        transport: Transport.TCP,
        options: { host: 'world-service', port: 4002 },
      },
    ]),
    UtilisateurModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
