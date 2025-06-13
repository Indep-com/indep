import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MessagingService } from "./messaging.service";
import { MessagingGateway } from "./messaging.gateway";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [MessagingService, MessagingGateway, PrismaService],
})
export class MessagingModule {}
