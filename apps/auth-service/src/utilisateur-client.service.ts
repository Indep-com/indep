import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UtilisateurModel } from './models/utilisateur.model';
import { constants } from '../../../constants';

@Injectable()
export class UtilisateurClientService {
  private readonly API_URL: string;

  constructor() {
    this.API_URL = constants.apiUrl;
  }

  async utilisateurParEmail(email: string): Promise<UtilisateurModel> {
    try {
      const response = await fetch(
        `${this.API_URL}/utilisateur/${email}/recupererUnUtilisateurParEmail`,
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new NotFoundException(
            `Utilisateur avec email ${email} non trouvé`,
          );
        }
        throw new InternalServerErrorException(
          `Erreur HTTP: ${response.statusText}`,
        );
      }

      return (await response.json()) as UtilisateurModel;
    } catch (error) {
      console.error('Erreur lors de la récupération de l’utilisateur :', error);
      throw new InternalServerErrorException(
        'Erreur lors de la communication avec le service utilisateur',
      );
    }
  }
  async inscrireUnUtilisateur(
    utilisateur: UtilisateurModel,
  ): Promise<UtilisateurModel> {
    try {
      console.log('Utilisateur à créer:', utilisateur);
      const response = await fetch(
        `${this.API_URL}/utilisateur/creerUtilisateur`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(utilisateur),
        },
      );

      if (!response.ok) {
        const errorBody = await response.text(); // pour debug
        console.error('Réponse non OK:', response.status, errorBody);
        throw new InternalServerErrorException(
          `Erreur HTTP: ${response.status} - ${response.statusText}`,
        );
      }

      return (await response.json()) as UtilisateurModel;
    } catch (error) {
      console.error("Erreur lors de l'inscription de l'utilisateur :", error);
      throw new InternalServerErrorException(
        'Erreur lors de la communication avec le service utilisateur',
      );
    }
  }
}
