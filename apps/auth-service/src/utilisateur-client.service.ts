import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UtilisateurModel } from './models/utilisateur.model';

@Injectable()
export class UtilisateurClientService {
    private readonly API_URL: string;

    constructor(private readonly configService: ConfigService) {
        this.API_URL = this.configService.get<string>('API_URL') || '';
    }

    async utilisateurParEmail(email: string): Promise<UtilisateurModel> {
        try {
            const response = await fetch(`${this.API_URL}/utilisateur/${email}`);

            if (!response.ok) {
                if (response.status === 404) {
                    throw new NotFoundException(`Utilisateur avec email ${email} non trouvé`);
                }
                throw new InternalServerErrorException(`Erreur HTTP: ${response.statusText}`);
            }

            const utilisateur = (await response.json()) as UtilisateurModel;
            return utilisateur;
        } catch (error) {
            console.error('Erreur lors de la récupération de l’utilisateur :', error);
            throw new InternalServerErrorException('Erreur lors de la communication avec le service utilisateur');
        }
    }
}
