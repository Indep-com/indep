import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {UtilisateurModel} from "./models/utilisateur.model";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validerUtilisateur(email: string, password: string): Promise<UtilisateurModel | null> {
    const fauxUtilisateur = {
      id: 'absc123',
      email: 'test@example.com',
      password: await bcrypt.hash('password', 10),
    };

    const match = await bcrypt.compare(password, fauxUtilisateur.password);
    if (match && email === fauxUtilisateur.email) {
      const { password, ...utilisateur } = fauxUtilisateur;
      return utilisateur as UtilisateurModel;
    }
    return null;
  }

  async login(utilisateur: UtilisateurModel) {
    const payload = { sub: utilisateur.id, email: utilisateur.email };
    return {
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
