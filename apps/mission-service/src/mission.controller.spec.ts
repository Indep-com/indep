import { Test, TestingModule } from '@nestjs/testing';
import { MissionController } from './mission.controller';
import { MissionService } from './mission.service';

describe('MissionController', () => {
  let controller: MissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MissionController],
      providers: [
        {
          provide: MissionService,
          useValue: {
            findAll: jest.fn().mockReturnValue([{ id: '1', title: 'Test Mission' }]),
          },
        },
      ],
    }).compile();

    controller = module.get<MissionController>(MissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of missions', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([{ id: '1', title: 'Test Mission' }]);
  });
});
