import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import {MessagePattern} from "@nestjs/microservices";
import {LoginDto} from "./dto/login.dto";

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService,) {}

  @MessagePattern('auth.login')
  async login(data: LoginDto) {
    console.log(data);
    return this.authService.login(data);
  }

  @MessagePattern('auth.verify')
  async verify(token: string) {
    return this.authService.verify(token);
  }
}
