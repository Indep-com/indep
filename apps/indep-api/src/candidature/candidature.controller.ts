// apps/indep-api/src/candidature/candidature.controller.ts
import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { CandidatureProxyService } from './candidature-proxy.service';

@Controller('candidatures')
export class CandidatureController {
  constructor(private readonly service: CandidatureProxyService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    const payload = {
      user_id: data.userId,
      mission_id: data.missionId,
      lettre_motivation: data.motivation,
    };
  
    return this.service.create(payload);
  }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
