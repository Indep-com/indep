import { NestFactory } from "@nestjs/core";
import { MessagingModule } from "./messaging.module";

async function bootstrap() {
  const app = await NestFactory.create(MessagingModule);
  //app.enableCors(); -> faut ça je pense et t'a un probleme :)
  await app.listen(4002);
}
void bootstrap();
