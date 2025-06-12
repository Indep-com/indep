import { Module } from "@nestjs/common";
import { MessagingGateway } from "./messaging.gateway";
import { MessagingService } from "./messaging.service";
import { PrismaService } from "./prisma.service";

@Module({
  providers: [MessagingGateway, MessagingService, PrismaService],
})
export class MessagingModule {}
