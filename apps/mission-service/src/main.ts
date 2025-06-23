import { NestFactory } from '@nestjs/core';
import { MissionModule } from './mission.module';

async function bootstrap() {
  const app = await NestFactory.create(MissionModule);
  app.setGlobalPrefix('missions');
  await app.listen(4004);
  console.log('mission-service is running at http://localhost:4004/missions');
}
bootstrap();
