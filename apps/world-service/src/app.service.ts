import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  private client!: ClientProxy;

  async onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    });
    const hello = await firstValueFrom(this.client.send({ cmd: 'getHello' }, {}));
    console.log(`${hello} World`);
  }
}
