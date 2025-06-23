import { Controller, Get, Query } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { Message } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Controller('messages')
export class MessagesController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getMessages(
    @Query('senderId') senderId?: string,
    @Query('recipientId') recipientId?: string,
  ): Promise<Message[]> {
    const where: Prisma.MessageWhereInput = {};

    if (senderId) {
      where.senderId = senderId;
    }

    if (recipientId) {
      where.recipientId = recipientId;
    }

    return this.prisma.message.findMany({
      where,
      orderBy: {
        timestamp: 'desc',
      },
    });
  }
}
