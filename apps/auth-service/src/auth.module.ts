import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { constants } from '../../../constants';
import { UtilisateurClientService } from './utilisateur-client.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: constants.secret,
      signOptions: { expiresIn: constants.expires },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UtilisateurClientService],
  exports: [AuthService],
})
export class AuthModule {}
