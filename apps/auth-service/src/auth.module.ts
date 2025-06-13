import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      PassportModule,
      JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRES },
      })],
  controllers: [AuthController],
  providers: [
      AuthService,
      JwtStrategy
  ],
})
export class AuthModule {}
