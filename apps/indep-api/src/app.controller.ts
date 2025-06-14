import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  OnModuleInit,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    /*@Inject('HELLO_SERVICE') private readonly helloClient: ClientProxy,
    @Inject('WORLD_SERVICE') private readonly worldClient: ClientProxy,*/
  ) {}

  // Connect to microservices when module initializes
  async onModuleInit() {
    /*try {
      await this.helloClient.connect();
      await this.worldClient.connect();
    } catch (err) {
      console.error('Microservice connection error:', err);
      throw new HttpException(
        'Unable to connect to microservices',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  @Get()
  getData(): string {
    return this.appService.getData();
  }

  @Get('hello-world')
  async getHelloWorld() {
    try {
      const hello$ = this.helloClient.send<{ msg: string }, any>(
        { cmd: 'hello' },
        {},
      );
      const world$ = this.worldClient.send<{ msg: string }, any>(
        { cmd: 'world' },
        {},
      );

      const [{ msg: hello }, { msg: world }] = await Promise.all([
        lastValueFrom(hello$),
        lastValueFrom(world$),
      ]);

      return { msg: `${hello} ${world}` };
    } catch (err) {
      console.error('Error in getHelloWorld:', err);
      throw new HttpException(
        'Error retrieving hello-world',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }*/
  }
}
