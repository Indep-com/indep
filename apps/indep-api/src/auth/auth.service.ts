import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {lastValueFrom} from "rxjs";
import {RegisterDto} from "./dto/register.dto";

@Injectable()
export class AuthService {
    constructor(@Inject('AUTH_SERVICE') private readonly authClient: ClientProxy) {}

    async login(email: string, password: string) {
        const observable = this.authClient.send(
             'auth.login',
            { email, password },
        );
        return await lastValueFrom(observable);
    }
    async register(registerDto: RegisterDto) {
        const observable = this.authClient.send(
            'auth.register',
            registerDto,
        );
        return await lastValueFrom(observable);
    }
}
