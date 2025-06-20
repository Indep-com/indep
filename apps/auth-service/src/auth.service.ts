import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {UtilisateurModel} from "./models/utilisateur.model";
import {UtilisateurClientService} from "./utilisateur-client.service";
import {LoginDto} from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
              private readonly utilisateurClientService: UtilisateurClientService,) {}

  async login({ email, password }: LoginDto) {
    const utilisateur: UtilisateurModel = await this.utilisateurClientService.utilisateurParEmail(email);
    console.log('Je suis auth service');
    if (email !== utilisateur.email || password !== utilisateur.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: utilisateur.id, email: utilisateur.email };
    return {
      message: 'Authentification réussie',
      access_token: this.jwtService.sign(payload),
    };
  }


  async verify(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (err) {
      return { error: 'Invalid token' };
    }
  }
}
