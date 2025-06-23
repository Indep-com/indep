import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { CandidatureService } from './candidature.service'

@Controller()
export class CandidatureController {
  constructor(private readonly service: CandidatureService) {}

  @MessagePattern({ cmd: 'create-candidature' })
  create(@Payload() payload: any) {
    return this.service.create(payload)
  }

  @MessagePattern({ cmd: 'get-candidature-by-id' })
  findOne(@Payload() id: string) {
    return this.service.findOne(id)
  }

  @MessagePattern({ cmd: 'get-all-candidatures' })
  findAll() {
    return this.service.findAll()
  }

  @MessagePattern({ cmd: 'update-candidature' })
  update(@Payload() payload: { id: string; data: any }) {
    return this.service.update(payload.id, payload.data)
  }

  @MessagePattern({ cmd: 'delete-candidature' })
  remove(@Payload() id: string) {
    return this.service.remove(id)
  }
}
