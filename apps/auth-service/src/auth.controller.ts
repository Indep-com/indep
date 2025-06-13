import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.login')
  async login(data: { email: string; password: string }) {
    const user = await this.authService.validerUtilisateur(data.email, data.password);
    if (!user) return { error: 'Invalid credentials' };
    return this.authService.login(user);
  }

  @MessagePattern('auth.verify')
  async verify(token: string) {
    return this.authService.verify(token);
  }
}
