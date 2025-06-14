import {
  BadRequestException,
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { PrismaService } from '../../../../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import {Role} from "../enums/role.enum";

@Injectable()
export class UtilisateurService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    try {
      if (!createUtilisateurDto.email) {
        throw new BadRequestException("L'email est requis.");
      }
      const UtilisteurExistant = await this.prisma.users.findUnique({
        where: { email: createUtilisateurDto.email },
      })
      if (UtilisteurExistant) {
        throw new ConflictException('L\'Utilisateur s\'existe déjà');
      }
      return this.prisma.users.create({
        data: {
          ...createUtilisateurDto,
          id: uuidv4(),
          password: await bcrypt.hash(createUtilisateurDto.password, 10),
          role: createUtilisateurDto.role ?? Role.VISITEUR,
          name: createUtilisateurDto.name,
        }
      });
    }catch (error) {
      if (error instanceof HttpException) throw error;

      throw new InternalServerErrorException('Erreur lors de la création de l’utilisateur');
    }


  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: string) {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  findOneByEmail(email: string) {
    console.log('Je suis email service');
    return this.prisma.users.findUnique({
      where: { email },
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
