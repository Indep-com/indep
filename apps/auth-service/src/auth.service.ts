import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {UtilisateurModel} from "./models/utilisateur.model";
import {UtilisateurClientService} from "./utilisateur-client.service";
import {LoginDto} from "./dto/login.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
              private readonly utilisateurClientService: UtilisateurClientService,) {}

  async login({ email, password }: LoginDto) {
    const utilisateur: UtilisateurModel = await this.utilisateurClientService.utilisateurParEmail(email);

    const passwordIsValid = await bcrypt.compare(password, utilisateur.password);

    if (email !== utilisateur.email || !passwordIsValid) {
    console.log('Je suis auth service');
    if (email !== utilisateur.email || password !== utilisateur.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: utilisateur.id, email: utilisateur.email,  role: utilisateur.role, };
    return {
      message: 'Authentification réussie',
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(utilisateurModel: UtilisateurModel) {
    await this.utilisateurClientService.inscrireUnUtilisateur(utilisateurModel);

    const token = await this.login({
      email: utilisateurModel.email,
      password: utilisateurModel.password,
    });

    return {
      access_token: token,
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
