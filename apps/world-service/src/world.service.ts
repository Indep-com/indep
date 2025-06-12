// apps/world-service/src/world.service.ts
import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class WorldService {
  @MessagePattern({ cmd: "world" })
  getWorld(): { msg: string } {
    return { msg: "world" };
  }
}
