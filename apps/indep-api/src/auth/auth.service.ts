import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
    constructor(@Inject('AUTH_SERVICE') private readonly authClient: ClientProxy) {}

    async login(email: string, password: string) {
        return this.authClient.send(
            { cmd: 'auth_login' },
            { email, password },
        )
    }
}
