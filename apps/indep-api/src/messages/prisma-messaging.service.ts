import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../../prisma/generated/prisma-messaging/client';

@Injectable()
export class PrismaMessagingService extends PrismaClient {}
