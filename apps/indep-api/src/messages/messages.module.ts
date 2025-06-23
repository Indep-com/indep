import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { PrismaMessagingService } from './prisma-messaging.service';

@Module({
  controllers: [MessagesController],
  providers: [PrismaMessagingService],
  exports: [PrismaMessagingService],
})
export class MessagesModule {}
