import { Controller, Get, Query } from '@nestjs/common';
import { PrismaMessagingService } from './prisma-messaging.service';

interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  message: string;
  timestamp: Date;
}

@Controller('messages')
export class MessagesController {
  constructor(private readonly prisma: PrismaMessagingService) {}

  @Get()
  async getMessages(
    @Query('senderId') senderId?: string,
    @Query('recipientId') recipientId?: string,
  ): Promise<Message[]> {
    const where: { senderId?: string; recipientId?: string } = {};
    if (senderId) {
      where.senderId = senderId;
    }
    if (recipientId) {
      where.recipientId = recipientId;
    }
    //or sender in receipient and receipient in sender

    return await this.prisma.message.findMany({
      where,
      orderBy: { timestamp: 'asc' },
    });
  }

  @Get('/conversations')
  async getConversations(@Query('userId') userId: string): Promise<Message[]> {
    if (!userId) {
      throw new Error('User ID is required');
    }

    return await this.prisma.message.findMany({
      where: {
        OR: [{ senderId: userId }, { recipientId: userId }],
      },
      orderBy: { timestamp: 'asc' },
    });
  }

  @Get('/all')
  async getAllMessages(): Promise<Message[]> {
    return await this.prisma.message.findMany({
      orderBy: { timestamp: 'desc' },
    });
  }
}
