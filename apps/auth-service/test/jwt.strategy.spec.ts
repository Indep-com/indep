import { JwtStrategy } from '../src/jwt.strategy';
import { constants } from '../../../constants';
import {Role} from "../src/enums/role.enum";

describe('JwtStrategy', () => {
    let jwtStrategy: JwtStrategy;

    beforeEach(() => {
        jwtStrategy = new JwtStrategy();
    });

    it('doit avoir la bonne configuration', () => {
        expect(typeof jwtStrategy.validate).toBe('function');
    });

    it('doit retourner les données utilisateur valides lors de la validation', async () => {
        const payload = {
            sub: '123',
            email: 'test@example.com',
            role: Role.VISITEUR,
        };

        const result = await jwtStrategy.validate(payload);

        expect(result).toEqual({
            userId: '123',
            email: 'test@example.com',
            role: Role.VISITEUR,
        });
    });
});
