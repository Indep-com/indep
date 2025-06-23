import {
  Controller,
  Post,
  Body,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.login(
      loginDto.email,
      loginDto.password,
    );
    return {
      message: result.message,
      token: result.access_token,
    };
  }
  @Post('logout')
  async logout(@Req() req: Request) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) throw new UnauthorizedException('Token manquant');

    const token = authHeader.replace('Bearer ', '');
    await this.authService.logout(token);

    return { message: 'Déconnecté avec succès' };
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const result = await this.authService.register(registerDto);
    return {
      message: result.message,
      token: result.access_token,
    };
  }
}
