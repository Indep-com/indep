import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class HelloController {
  @MessagePattern({ cmd: "hello" })
  getHello(): { msg: string } {
    return { msg: "hello" };
  }
}
