import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { CandidatureProxyService } from './candidature-proxy.service';
import { CreateCandidatureDto } from '../candidature/dto/create-candidature';

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
  create(@Body() dto: CreateCandidatureDto) {
    return this.service.create(dto);
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