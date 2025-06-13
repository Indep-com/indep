import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import {MessagePattern} from "@nestjs/microservices";
import {JwtService} from "@nestjs/jwt";
import {UtilisateurClientService} from "./utilisateur-client.service";
import * as bcrypt from 'bcrypt';
import {UtilisateurModel} from "./models/utilisateur.model";

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService,
              private readonly jwtService: JwtService,
              private readonly utilisateurClientService: UtilisateurClientService) {}


  @MessagePattern({ cmd: 'auth_login' })
  async handleLogin({ email, password }: { email: string; password: string }) {
    const utilisateur: UtilisateurModel = await this.utilisateurClientService.utilisateurParEmail(email);

    const isValid = await bcrypt.compare(password, utilisateur.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const payload = { sub: utilisateur.id, email: utilisateur.email };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }

  @MessagePattern('auth.verify')
  async verify(token: string) {
    return this.authService.verify(token);
  }
}
