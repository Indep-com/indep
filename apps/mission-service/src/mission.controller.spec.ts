import { Test, TestingModule } from '@nestjs/testing';
import { MissionController } from './mission.controller';
import { MissionService } from './mission.service';

describe('MissionController', () => {
  let controller: MissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MissionController],
      providers: [MissionService],
    }).compile();

    controller = module.get<MissionController>(MissionController);
  });

  it('should return an array of missions', () => {
    expect(controller.findAll()).toEqual([{ id: 1, name: 'Mission 1' }]);
  });
});
