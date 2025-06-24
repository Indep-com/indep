
// mission.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MissionService } from '../mission.service';
import { PgService } from '../pg.service';
import { NotFoundException } from '@nestjs/common';

describe('MissionService', () => {
  let service: MissionService;
  let mockPgClient: { query: jest.Mock };

  beforeEach(async () => {
    mockPgClient = {
      query: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MissionService,
        {
          provide: PgService,
          useValue: { client: mockPgClient },
        },
      ],
    }).compile();

    service = module.get<MissionService>(MissionService);
  });

  describe('findAll', () => {
    it('devrait retourner toutes les missions', async () => {
      const fakeMissions = [{ id: '1', title: 'Mission 1' }];
      mockPgClient.query.mockResolvedValue({ rows: fakeMissions });

      const result = await service.findAll();
      expect(result).toEqual(fakeMissions);
      expect(mockPgClient.query).toHaveBeenCalledWith(
        'SELECT * FROM missions ORDER BY created_at DESC'
      );
    });
  });

  describe('findOne', () => {
    it('devrait retourner une mission par id', async () => {
      const fakeMission = { id: '1', title: 'Test' };
      mockPgClient.query.mockResolvedValue({ rows: [fakeMission], rowCount: 1 });

      const result = await service.findOne('1');
      expect(result).toEqual(fakeMission);
    });

    it('devrait lancer une NotFoundException si la mission existe pas', async () => {
      mockPgClient.query.mockResolvedValue({ rows: [], rowCount: 0 });

      await expect(service.findOne('999')).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('devrait insérer une mission et la retourner', async () => {
      const data = {
        title: 'Nouvelle mission',
        description: 'Desc',
        price: 100,
        status: 'draft',
      };
      const inserted = { id: 'uuid-mocké', ...data };
      mockPgClient.query.mockResolvedValue({ rows: [inserted] });

      const result = await service.create(data);
      expect(result).toEqual(inserted);
      expect(mockPgClient.query).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('devrait mettre à jour la mission', async () => {
      const updated = {
        id: '1',
        title: 'Maj',
        description: 'Nouvelle desc',
        price: 200,
        status: 'active',
        user_id: 'user1',
      };
      mockPgClient.query.mockResolvedValue({ rows: [updated], rowCount: 1 });

      const result = await service.update('1', updated);
      expect(result).toEqual(updated);
    });

    it('devrait throw si la mission existe pas', async () => {
      mockPgClient.query.mockResolvedValue({ rows: [], rowCount: 0 });

      await expect(service.update('404', {
        title: '', description: '', price: 0, status: '', user_id: '',
      })).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('devrait supprimer la mission', async () => {
      mockPgClient.query.mockResolvedValue({ rowCount: 1 });

      const result = await service.remove('1');
      expect(result).toEqual({ message: 'Mission supprimée' });
    });

    it('devrait throw si la mission existe pas', async () => {
      mockPgClient.query.mockResolvedValue({ rowCount: 0 });

      await expect(service.remove('404')).rejects.toThrow(NotFoundException);
    });
  });
});
