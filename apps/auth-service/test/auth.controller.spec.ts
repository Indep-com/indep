import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../src/auth.controller';
import { AuthService } from '../src/auth.service';

describe('AuthController', () => {
    let authController: AuthController;
    let authService: AuthService;

    const loginDto = { email: 'test@test.com', password: 'password' };
    const utilisateurModel = {
        id: '1',
        email: 'test@test.com',
        password: 'password',
        role: 'visiteur',
        name: 'Test',
        created_at: new Date(),
    };

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [
                {
                    provide: AuthService,
                    useValue: {
                        login: jest.fn().mockResolvedValue({
                            message: 'Authentification réussie',
                            access_token: 'mocked_token',
                        }),
                        register: jest.fn().mockResolvedValue({
                            access_token: {
                                message: 'Authentification réussie',
                                access_token: 'mocked_token',
                            },
                        }),
                        verify: jest.fn().mockResolvedValue({
                            sub: '1',
                            email: 'test@test.com',
                            role: 'visiteur',
                        }),
                    },
                },
            ],
        }).compile();

        authController = moduleRef.get(AuthController);
        authService = moduleRef.get(AuthService);
    });

    it('doit appeler AuthService.login et retourner un token lors de la connexion', async () => {
        const result = await authController.login(loginDto);
        expect(authService.login).toHaveBeenCalledWith(loginDto);
        expect(result).toEqual({
            message: 'Authentification réussie',
            access_token: 'mocked_token',
        });
    });

    it('doit appeler AuthService.register et retourner un token lors de l\'inscription', async () => {
        const result = await authController.register(utilisateurModel);
        expect(authService.register).toHaveBeenCalledWith(utilisateurModel);
        expect(result).toEqual({
            access_token: {
                message: 'Authentification réussie',
                access_token: 'mocked_token',
            },
        });
    });

    it('doit appeler AuthService.verify et retourner la charge utile lors de la vérification', async () => {
        const token = 'someToken';
        const result = await authController.verify(token);
        expect(authService.verify).toHaveBeenCalledWith(token);
        expect(result).toEqual({
            sub: '1',
            email: 'test@test.com',
            role: 'visiteur',
        });
    });
});
