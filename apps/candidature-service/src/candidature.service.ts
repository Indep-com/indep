import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '../../../prisma/generated/prisma';

@Injectable()
export class CandidatureService {
  constructor(@Inject('PRISMA') private prisma: PrismaClient) {}

  findAll() {
    return this.prisma.candidatures.findMany({
      include: {
        missions: true,
        users: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.candidatures.findUnique({
      where: { id },
      include: {
        missions: true,
        users: true,
      },
    });
  }

  create(data: {
    mission_id: string;
    user_id: string;
    lettre_motivation?: string;
    status?: string;
  }) {
    return this.prisma.candidatures.create({
      data,
      include: {
        missions: true,
        users: true,
      },
    });
  }

  update(
    id: string,
    data: Partial<{
      mission_id: string;
      user_id: string;
      lettre_motivation: string;
      status: string;
    }>
  ) {
    return this.prisma.candidatures.update({
      where: { id },
      data,
      include: {
        missions: true,
        users: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.candidatures.delete({
      where: { id },
    });
  }
}
