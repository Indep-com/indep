import { Controller, Get, Query } from "@nestjs/common";
import { MessagingService } from "./messaging.service";

@Controller("messages")
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  @Get()
  async getMessages(
    @Query("senderId") senderId: string,
    @Query("recipientId") recipientId: string,
  ) {
    return this.messagingService.getMessagesBetween(senderId, recipientId);
  }

  @Get("/conversations")
  async getConversations(@Query("userId") userId: string) {
    return this.messagingService.getConversationPartners(userId);
  }

  @Get("/all")
  async getAllMessages() {
    return this.messagingService.getAllMessages();
  }
}
