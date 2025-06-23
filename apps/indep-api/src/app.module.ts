import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [ClientsModule.register([]), UtilisateurModule, MessagesModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
