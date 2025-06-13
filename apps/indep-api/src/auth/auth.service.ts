import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {lastValueFrom} from "rxjs";

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
}
