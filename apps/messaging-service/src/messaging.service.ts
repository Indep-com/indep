import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Injectable()
export class MessagingService {
  constructor(private prisma: PrismaService) {}

  async saveMessage(data: {
    senderId: string;
    recipientId: string;
    message: string;
  }) {
    if (!data.senderId || !data.recipientId || !data.message?.trim()) {
      throw new Error("Invalid message data");
    }

    if (data.senderId === data.recipientId) {
      throw new Error("Sender and recipient cannot be the same");
    }

    console.log("Modèles Prisma :", Object.keys(this.prisma));

    return this.prisma.message.create({
      data: {
        senderId: data.senderId,
        recipientId: data.recipientId,
        message: data.message,
      },
    });
  }

  async getMessages(senderId: string, recipientId: string) {
    if (!senderId || !recipientId) {
      throw new Error("Sender and recipient IDs are required");
    }
    if (senderId === recipientId) {
      throw new Error("Sender and recipient cannot be the same");
    }

    return this.prisma.message.findMany({
      where: {
        OR: [
          { senderId, recipientId },
          { senderId: recipientId, recipientId: senderId },
        ],
      },
      orderBy: { timestamp: "asc" },
    });
  }

  async getConversationPartners(userId: string) {
    if (!userId) {
      throw new Error("User ID is required");
    }
    const messages = await this.prisma.message.findMany({
      where: {
        OR: [{ senderId: userId }, { recipientId: userId }],
      },
      orderBy: { timestamp: "desc" },
    });

    const conversations = new Map<string, any>();

    for (const msg of messages) {
      const otherUserId =
        msg.senderId === userId ? msg.recipientId : msg.senderId;
      if (!conversations.has(otherUserId)) {
        conversations.set(otherUserId, msg);
      }
    }

    return Array.from(conversations.values());
  }

  async getMessagesBetween(senderId: string, recipientId: string) {
    if (!senderId || !recipientId) {
      throw new Error("Sender and recipient IDs are required");
    }
    if (senderId === recipientId) {
      throw new Error("Sender and recipient cannot be the same");
    }

    return this.prisma.message.findMany({
      where: {
        OR: [
          { senderId, recipientId },
          { senderId: recipientId, recipientId: senderId },
        ],
      },
      orderBy: { timestamp: "asc" },
    });
  }
}
