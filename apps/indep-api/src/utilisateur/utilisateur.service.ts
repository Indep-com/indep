import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { PrismaService } from '../../../../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UtilisateurService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    const UtilisteurExistant = await this.prisma.users.findUnique({
      where: { email: createUtilisateurDto.email },
    })

    if (UtilisteurExistant) {
      throw new ConflictException('L\'Utilisateur s\'existe déjà');
    }
    return this.prisma.users.create({
      data: {
        id: uuidv4(),
        ...createUtilisateurDto,
      }
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: string) {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  update(id: string, updateUtilisateurDto: UpdateUtilisateurDto) {
    return this.prisma.users.update({
      where: { id },
      data: updateUtilisateurDto,
    });
  }

  remove(id: string) {
    return this.prisma.users.delete({
      where: { id },
    });
  }
}
