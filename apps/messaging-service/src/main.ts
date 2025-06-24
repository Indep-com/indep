import { NestFactory } from "@nestjs/core";
import { MessagingModule } from "./messaging.module";

async function bootstrap() {
  const app = await NestFactory.create(MessagingModule);
  app.enableCors();
  await app.listen(4005);
}
void bootstrap();
