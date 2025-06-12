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
    if (!data.senderId || !data.recipientId || !data.message) {
      throw new Error("Invalid message data");
    }
    if (data.senderId === data.recipientId) {
      throw new Error("Sender and recipient cannot be the same");
    }
    if (data.message.trim() === "") {
      throw new Error("Message cannot be empty");
    }
    // this.prisma.users
    //   .findUnique({
    //     where: { id: data.senderId },
    //   })
    //   .then((user) => {
    //     if (!user) {
    //       throw new Error("Sender does not exist");
    //     }
    //   });

    return this.prisma.message.create({
      data: {
        senderId: data.senderId,
        recipientId: data.recipientId,
        message: data.message,
      },
    });
  }

  async getMessages(senderId: string, recipientId: string) {
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
