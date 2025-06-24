import { Module } from '@nestjs/common';
import { CandidatureService } from './candidature.service';
import { CandidatureController } from './candidature.controller';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [CandidatureController],
  providers: [
    CandidatureService,
    {
      provide: 'PRISMA',
      useClass: PrismaService,
    },
  ],
})
export class CandidatureModule {}
