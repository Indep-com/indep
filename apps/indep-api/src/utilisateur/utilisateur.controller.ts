import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Post('/creerUtilisateur')
  creerUtilisateur(@Body() createUtilisateurDto: CreateUtilisateurDto) {
    console.log('Reçu dans creerUtilisateur:', createUtilisateurDto);
    return this.utilisateurService.create(createUtilisateurDto);
  }

  @Get('/recupererToutUtilisateur')
  findAll() {
    return this.utilisateurService.findAll();
  }

  @Get(':id/recupererUnUtilisateurParId')
  findOne(@Param('id') id: string) {
    return this.utilisateurService.findOne(id);
  }

  @Get(':email/recupererUnUtilisateurParEmail')
  findOneByEmail(@Param('email') email: string) {
    return this.utilisateurService.findOneByEmail(email);
  }

  @Patch(':id/modifierUtilisateurParId')
  update(@Param('id') id: string, @Body() updateUtilisateurDto: UpdateUtilisateurDto) {
    return this.utilisateurService.update(id, updateUtilisateurDto);
  }

  @Delete(':id/supprimerUtilisateurParId')
  remove(@Param('id') id: string) {
    return this.utilisateurService.remove(id);
  }
}
