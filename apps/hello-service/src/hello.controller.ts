import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class HelloController {
  /**
   * Traitement du message pattern { cmd: 'hello' }
   */
  @MessagePattern({ cmd: 'hello' })
  getHello(): { msg: string } {
    return { msg: 'hello' };
  }
}
