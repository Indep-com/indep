import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Socket } from "socket.io";
import { MessagingService } from "./messaging.service";

@WebSocketGateway({ cors: true })
export class MessagingGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messagingService: MessagingService) {}

  handleConnection(client: Socket) {
    console.log(`Client connecté : ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client déconnecté : ${client.id}`);
  }

  @SubscribeMessage("sendMessage")
  handleSendMessage(
    @MessageBody()
    data: { senderId: string; recipientId: string; message: string },
    @ConnectedSocket() client: Socket,
  ) {
    console.log("Message reçu du client :", data);

    const savedMessage = this.messagingService.saveMessage(data);

    client.broadcast.emit("newMessage", savedMessage);

    client.emit("newMessage", savedMessage);

    return savedMessage;
  }
}
