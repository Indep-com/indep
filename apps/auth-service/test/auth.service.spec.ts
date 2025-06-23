import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../src/auth.service';
import { UtilisateurClientService } from '../src/utilisateur-client.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
    let authService: AuthService;
    let utilisateurClientService: UtilisateurClientService;
    let jwtService: JwtService;

    const userMock = {
        id: '1',
        email: 'test@test.com',
        password: '',
        role: 'visiteur',
        name: 'Test',
        created_at: new Date(),
    };

    beforeEach(async () => {
        const hashedPassword = await bcrypt.hash('password', 10);
        userMock.password = hashedPassword;

        const moduleRef: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: UtilisateurClientService,
                    useValue: {
                        utilisateurParEmail: jest.fn().mockResolvedValue(userMock),
                        inscrireUnUtilisateur: jest.fn().mockResolvedValue(undefined),
                    },
                },
                {
                    provide: JwtService,
                    useValue: {
                        sign: jest.fn().mockReturnValue('mocked_token'),
                        verify: jest.fn().mockReturnValue({ sub: '1', email: 'test@test.com', role: 'visiteur' }),
                    },
                },
            ],
        }).compile();

        authService = moduleRef.get(AuthService);
        utilisateurClientService = moduleRef.get(UtilisateurClientService);
        jwtService = moduleRef.get(JwtService);
    });

    it('doit se connecter avec succès avec des identifiants valides', async () => {
        const result = await authService.login({
            email: 'test@test.com',
            password: 'password',
        });

        expect(result).toEqual({
            message: 'Authentification réussie',
            access_token: 'mocked_token',
        });
    });

    it('doit lancer une UnauthorizedException pour un mot de passe invalide', async () => {
        await expect(
            authService.login({
                email: 'test@test.com',
                password: 'wrongpassword',
            }),
        ).rejects.toThrow(UnauthorizedException);
    });

    it('doit enregistrer un utilisateur et retourner un token', async () => {
        const result = await authService.register({
            email: 'test@test.com',
            password: 'password',
            id: '1',
            role: 'visiteur',
            name: 'Test',
            created_at: new Date(),
        });

        expect(utilisateurClientService.inscrireUnUtilisateur).toHaveBeenCalled();
        expect(result).toEqual({
            access_token: {
                message: 'Authentification réussie',
                access_token: 'mocked_token',
            },
        });
    });

    it('doit vérifier correctement un token', async () => {
        const payload = await authService.verify('someToken');
        expect(payload).toEqual({
            sub: '1',
            email: 'test@test.com',
            role: 'visiteur',
        });
    });

    it('doit retourner une erreur en cas de token invalide', async () => {
        jwtService.verify = jest.fn(() => {
            throw new Error('Invalid token');
        });

        const result = await authService.verify('invalidToken');
        expect(result).toEqual({ error: 'Invalid token' });
    });
});
