import { IsUUID, IsOptional, IsString } from 'class-validator';

export class CreateCandidatureDto {
  @IsUUID()
  mission_id: string;

  @IsUUID()
  user_id: string;

  @IsOptional()
  @IsString()
  lettre_motivation?: string;
}
