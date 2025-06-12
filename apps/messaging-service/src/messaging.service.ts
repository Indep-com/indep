import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagingService {
  private messages: {
    senderId: string;
    recipientId: string;
    message: string;
    timestamp: string;
  }[] = [];

  saveMessage(data: {
    senderId: string;
    recipientId: string;
    message: string;
  }) {
    const msg = {
      ...data,
      timestamp: new Date().toISOString(),
    };
    this.messages.push(msg);
    return msg;
  }

  getMessages(senderId: string, recipientId: string) {
    return this.messages.filter(
      (m) =>
        (m.senderId === senderId && m.recipientId === recipientId) ||
        (m.senderId === recipientId && m.recipientId === senderId),
    );
  }
}
