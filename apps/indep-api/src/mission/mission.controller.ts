// src/mission/mission.controller.ts
import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { MissionProxyService } from './mission-proxy.service';

@Controller('missions')
export class MissionController {
  constructor(private readonly missionService: MissionProxyService) {}

  @Get()
  findAll() {
    return this.missionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.missionService.findOne(+id);
  }

  @Post()
  create(@Body() dto: any) {
    return this.missionService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.missionService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.missionService.delete(+id);
  }
}
